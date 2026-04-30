const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Serve the frontend application
app.use(express.static(path.join(__dirname, 'public')));

async function searchOSM(lat, lng, type) {
    const offset = 0.45;
    const s = parseFloat(lat) - offset;
    const w = parseFloat(lng) - offset;
    const n = parseFloat(lat) + offset;
    const e = parseFloat(lng) + offset;

    let filter = '';
    if (type === 'gynecologist') {
        filter = `
          node["healthcare:speciality"~"gynaecology|obstetrics",i];
          node["healthcare"="doctor"]["healthcare:speciality"~"gynaecology|obstetrics",i];
          node["amenity"~"clinic|doctors",i]["healthcare:speciality"~"gynaecology|obstetrics",i];
          node["amenity"~"clinic|doctors|hospital",i]["name"~"gyn|obst|matern|wom|lady|mother|child",i];
          way["amenity"~"clinic|doctors|hospital",i]["name"~"gyn|obst|matern|wom|lady|mother|child",i];
          node["healthcare"="doctor"]["name"~"gyn|obst|matern|wom|lady",i];
        `;
    } else {
        // hospital fallback - more comprehensive
        filter = `
          node["amenity"="hospital"];
          node["healthcare"="hospital"];
          way["amenity"="hospital"];
          way["healthcare"="hospital"];
          node["amenity"="clinic"]["name"~"hospital|medical center",i];
        `;
    }

    const overpassQuery = `
        [out:json][timeout:25][bbox:${s},${w},${n},${e}];
        (
          ${filter}
        );
        out center;
    `;
    console.log(`Searching OSM for ${type} near ${lat}, ${lng} (100km radius)`);
    const url = `https://overpass-api.de/api/interpreter`;
    
    const res = await fetch(url, {
        method: 'POST',
        body: "data=" + encodeURIComponent(overpassQuery),
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'MamaCarePro/1.0 (https://mamacarepro.com)'
        }
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`OSM API error (${res.status}): ${errorText.substring(0, 100)}`);
    }

    const data = await res.json();
    console.log(`OSM found ${data.elements ? data.elements.length : 0} elements`);

    const uniqueDocs = [];
    const ids = new Set();
    if (data && data.elements) {
        for (const el of data.elements) {
            if (ids.has(el.id)) continue;
            ids.add(el.id);

            const isWay = el.type === 'way';
            const elLat = isWay ? el.center.lat : el.lat;
            const elLng = isWay ? el.center.lon : el.lon;

            let pubPriv = el.tags['operator:type'] || el.tags.operator || '';
            if(pubPriv.toLowerCase().includes('public') || pubPriv.toLowerCase().includes('government')) pubPriv = 'Public';
            else if(pubPriv.toLowerCase().includes('private')) pubPriv = 'Private';
            else pubPriv = '';

            let addr = [el.tags['addr:street'], el.tags['addr:housenumber'], el.tags['addr:city']].filter(Boolean).join(' ');
            if (!addr) {
                addr = [el.tags['contact:city'] || el.tags['is_in:city'], el.tags.is_in].filter(Boolean).join(', ');
            }
            if (!addr) addr = 'Address not listed';
            
            let dName = el.tags.name || (type === 'hospital' ? 'General Hospital' : "Women's Clinic / Doctor");

            uniqueDocs.push({
                id: el.id,
                name: dName,
                rating: null,
                user_ratings_total: 0,
                address: addr,
                type: pubPriv,
                lat: elLat,
                lng: elLng,
                mapsUrl: `https://www.google.com/maps/search/?api=1&query=${elLat},${elLng}`,
                provider: 'osm'
            });
        }
    }
    return uniqueDocs;
}

async function searchGoogle(lat, lng, queryType) {
    const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    if (!GOOGLE_API_KEY || GOOGLE_API_KEY.includes('your_google_maps_key_here')) return null;
    
    let keyword = queryType === 'gynecologist' ? 'gynecologist|obstetrician|women+clinic' : 'hospital';
    let type = queryType === 'gynecologist' ? 'doctor' : 'hospital';

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100000&type=${type}&keyword=${keyword}&key=${GOOGLE_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    
    if (!data.results || data.results.length === 0) return [];

    return data.results.map(place => ({
        id: place.place_id,
        name: place.name,
        rating: place.rating || null,
        user_ratings_total: place.user_ratings_total || 0,
        address: place.vicinity,
        type: '', 
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        mapsUrl: `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}&query_place_id=${place.place_id}`,
        provider: 'google'
    }));
}

async function searchBetterDoctor(lat, lng) {
    const BETTER_DOCTOR_KEY = process.env.BETTER_DOCTOR_API_KEY;
    if (!BETTER_DOCTOR_KEY || BETTER_DOCTOR_KEY.includes('your_key_here')) return null;
    
    try {
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat},${lng},5&specialty_uid=obstetrics-gynecology&skip=0&limit=10&user_key=${BETTER_DOCTOR_KEY}`;
        const res = await fetch(url);
        if (!res.ok) return null;
        const data = await res.json();
        
        if (!data.data || data.data.length === 0) return [];

        return data.data.map(doc => {
            let prac = doc.practices[0];
            return {
                id: doc.uid,
                name: `Dr. ${doc.profile.first_name} ${doc.profile.last_name}`,
                rating: null,
                user_ratings_total: 0,
                address: `${prac.visit_address.street}, ${prac.visit_address.city}`,
                type: 'Private',
                lat: prac.lat,
                lng: prac.lon,
                mapsUrl: `https://www.google.com/maps/search/?api=1&query=${prac.lat},${prac.lon}`,
                provider: 'betterdoctor'
            };
        });
    } catch(err) {
        return null;
    }
}


app.get('/api/doctors', async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        // Priority 1: BetterDoctor
        let bdResults = await searchBetterDoctor(lat, lng);
        if (bdResults && bdResults.length > 0) {
            return res.json({ results: bdResults.slice(0, 10), source: 'betterdoctor', isFallbackHospital: false });
        }

        // Priority 2: Google Places
        let googleResults = await searchGoogle(lat, lng, 'gynecologist');
        if (googleResults !== null) {
            if (googleResults.length > 0) {
                return res.json({ results: googleResults.slice(0, 10), source: 'google', isFallbackHospital: false });
            } else {
                let hFallback = await searchGoogle(lat, lng, 'hospital');
                return res.json({ results: (hFallback||[]).slice(0, 10), source: 'google', isFallbackHospital: true });
            }
        }

        // Priority 3: OpenStreetMap
        let osmResults = await searchOSM(lat, lng, 'gynecologist');
        if (osmResults.length > 0) {
            return res.json({ results: osmResults.slice(0, 10), source: 'osm', isFallbackHospital: false });
        } else {
            let hFallback = await searchOSM(lat, lng, 'hospital');
            return res.json({ results: hFallback.slice(0, 10), source: 'osm', isFallbackHospital: true });
        }

    } catch (error) {
        console.error("API Error: ", error.message);
        // Fallback Premium Mock Data for demonstration purposes if Overpass fails
        const mockDoctors = [
            { id: 'm1', name: 'Dr. Sarah Jenkins, FACOG', rating: 4.9, user_ratings_total: 124, address: "Premium Women's Clinic, Downtown", type: 'Private', lat: parseFloat(lat) + 0.01, lng: parseFloat(lng) + 0.01, mapsUrl: '#', provider: 'mock' },
            { id: 'm2', name: 'Dr. Emily Chen, Obstetrics', rating: 4.8, user_ratings_total: 89, address: 'City Medical Center, North Wing', type: 'Hospital', lat: parseFloat(lat) - 0.02, lng: parseFloat(lng) + 0.02, mapsUrl: '#', provider: 'mock' },
            { id: 'm3', name: 'Elite Maternity Care Associates', rating: 4.7, user_ratings_total: 56, address: 'Medical Arts Building, Suite 400', type: 'Private', lat: parseFloat(lat) + 0.03, lng: parseFloat(lng) - 0.01, mapsUrl: '#', provider: 'mock' }
        ];
        res.json({ results: mockDoctors, source: 'mock_fallback', isFallbackHospital: false });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

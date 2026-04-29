
async function test() {
    const lat = 1;
    const lng = 1;
    const url = `http://localhost:3000/api/doctors?lat=${lat}&lng=${lng}`;
    try {
        const res = await fetch(url);
        console.log("Status:", res.status);
        const text = await res.text();
        console.log("Response:", text.substring(0, 500));
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}
test();

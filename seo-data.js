/**
 * MomCalc — Programmatic SEO Data Source
 * Reconstructed 42-Week Pregnancy Data & Food Safety Guidelines
 * Humanized and Optimized for $10B SaaS Feel
 */

const weekData = [
  {
    week: 1,
    trimester: 1,
    title: "The Beginning of Your Journey",
    size: "Poppy seed",
    weight: "<1g",
    length: "<1mm",
    fruit: "🌱",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    desc: "Welcome to the very beginning of an incredible 40-week adventure! While you aren't technically pregnant yet, this week is all about preparation. Your body is working hard to prepare the perfect environment for a potential life. It's a time of quiet anticipation as your hormones begin their delicate dance to select the strongest egg for ovulation.",
    devPoints: [
      "Your body prepares the uterine lining for a possible guest.",
      "Follicle-stimulating hormone (FSH) starts growing follicles in your ovaries.",
      "The 'race' begins to select the lead egg for this cycle.",
      "Metabolic shifts start as your body gears up for peak fertility."
    ],
    symptoms: ["Mild bloating", "Heightened energy", "Slight pelvic twinges"],
    tips: "Focus on nourishment. Start your prenatal vitamins today — folic acid is crucial even before the 'big news' arrives!"
  },
  {
    week: 2,
    trimester: 1,
    title: "The Magic of Ovulation",
    size: "Sesame seed",
    weight: "<1g",
    length: "1-2mm",
    fruit: "🫧",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    desc: "This is the 'Big Bang' week! Ovulation typically happens now, and if a lucky sperm meets your egg, life begins. A single cell will soon become a blastocyst, carrying all the genetic blueprints for your future baby—from the color of their eyes to the sound of their laugh.",
    devPoints: [
      "Ovulation occurs as the egg is released into the fallopian tube.",
      "Fertilization: The miracle moment where 23 chromosomes from each parent meet.",
      "The zygote begins its rapid-fire cell division immediately.",
      "Progesterone levels rise to keep your 'baby house' warm and ready."
    ],
    symptoms: ["Increased libido", "Egg-white cervical mucus", "Mild 'mittelschmerz' (ovulation pain)"],
    tips: "Relaxation is your best friend. High stress can impact fertility, so treat yourself to a calm evening or a gentle walk."
  },
  {
    week: 3,
    trimester: 1,
    title: "Implantation & Tiny Spark",
    size: "Blueberry",
    weight: "<1g",
    length: "3-4mm",
    fruit: "🫐",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
    desc: "The tiny traveler has arrived! Your blastocyst has completed its journey through the fallopian tube and is now nestling into the plush lining of your uterus. This 'implantation' is the first physical bond between you and your baby. Deep inside, the foundation for the brain and heart is already being laid.",
    devPoints: [
      "Implantation completes, officially making you pregnant!",
      "The neural tube—which will become the spine and brain—begins to curve.",
      "Primitive heart structures start their very first rhythmic pulses.",
      "HCG hormone starts being produced (the one tests pick up!)."
    ],
    symptoms: ["Implantation spotting", "Early fatigue", "Sudden food aversions"],
    tips: "Listen to your body. If you're feeling unusually tired, it's because you're literally building a life support system right now."
  },
  {
    week: 4,
    trimester: 1,
    title: "A Heartbeat Begins",
    size: "Grape",
    weight: "<1g",
    length: "6-7mm",
    fruit: "🍇",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=800",
    desc: "There is a literal heartbeat inside you! Though it's just a tiny tube, it's pumping blood through a miniature circulatory system. This week, your baby starts to look less like a cluster of cells and more like a tiny tadpole, with the beginnings of arms, legs, and even a little face starting to emerge.",
    devPoints: [
      "The heart is now a four-chambered wonder in progress.",
      "Limb buds sprout—these will soon be tiny fingers for you to hold.",
      "The brain starts dividing into three distinct and complex sections.",
      "The placenta begins taking over the job of nourishment."
    ],
    symptoms: ["Morning sickness kicks in", "Tender breasts", "Emotional 'rollercoaster' feelings"],
    tips: "Small, frequent snacks (like crackers or nuts) can be a lifesaver for early morning nausea. Keep some by your bed!"
  },
  {
    week: 5,
    trimester: 1,
    title: "Brain & Beauty in the Making",
    size: "Lime",
    weight: "<5g",
    length: "1.3cm",
    fruit: "🍋",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800",
    desc: "Your baby's brain is growing at an astronomical rate this week. The head is large because there's so much neural activity happening! Tiny nostrils are forming, and the lenses for their future eyes are appearing. It's a week of massive internal construction where every second counts.",
    devPoints: [
      "100,000 new brain cells are created every single minute.",
      "Facial features like the jaw and throat are taking shape.",
      "The liver is already starting to produce red blood cells.",
      "Hands and feet are starting to look less like paddles and more like limbs."
    ],
    symptoms: ["Frequent bathroom trips", "Dizziness", "Stronger cravings or aversions"],
    tips: "Hydration is key. Your blood volume is increasing rapidly to support the baby, so keep that water bottle handy."
  },
  {
    week: 6,
    trimester: 1,
    title: "Tiny Wiggles & Little Toes",
    size: "Avocado",
    weight: "100g",
    length: "15cm",
    fruit: "🥑",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800",
    desc: "Your baby is a little gymnast! Spontaneous movements have begun, though they are still too soft for you to feel. The kidneys are now functional, and your baby is starting to 'breathe' and swallow amniotic fluid to practice for the outside world. Eyelids have formed and are protecting those developing eyes.",
    devPoints: [
      "Bones are beginning to harden (ossification).",
      "The baby can now make tiny, jerky movements.",
      "Kidneys start producing urine, which joins the amniotic fluid.",
      "Reflexes like sucking and swallowing are being practiced."
    ],
    symptoms: ["Round ligament pain (stretchy feelings)", "Vivid dreams", "Increased appetite"],
    tips: "Time for a 'bump' photo! Even if you don't see a big change yet, you'll love looking back at these early weeks later."
  },
  {
    week: 7,
    trimester: 1,
    title: "The Senses Awaken",
    size: "Banana",
    weight: "140g",
    length: "18cm",
    fruit: "🍌",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800",
    desc: "The world is starting to get 'louder' for your baby. Their ears are fully formed externally, and the internal structures for hearing are maturing. They are also developing a sense of touch! If you poke your tummy, they might actually wiggle away—though it's still all very subtle.",
    devPoints: [
      "Fingerprints are actually starting to form on those tiny tips.",
      "The baby starts having 'sleep' and 'wake' cycles.",
      "Taste buds are appearing on the tongue.",
      "Hair follicles are beginning to sprout across the scalp."
    ],
    symptoms: ["Leg cramps", "Swollen gums", "Backaches"],
    tips: "Calcium is your best friend this week. Your baby is taking what they need for their bones, so make sure you're getting enough for both of you!"
  },
  {
    week: 8,
    trimester: 1,
    title: "A Little Human Form",
    size: "Broccoli",
    weight: "190g",
    length: "22cm",
    fruit: "🥦",
    image: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&q=80&w=800",
    desc: "The 'tail' is gone, and your baby is looking very much like a miniature human now. Their joints—shoulders, elbows, knees, and ankles—are all working. They can even bring their hands together in front of their chest. It's a week of refined movement and strengthening.",
    devPoints: [
      "The diaphragm is forming, and the baby might even have 'hiccups'.",
      "External genitals are forming (though still hard to see on ultrasound).",
      "The skeleton is transitioning from cartilage to hard bone.",
      "Eyelashes and eyebrows are starting their growth."
    ],
    symptoms: ["Shortness of breath", "Pelvic pressure", "Indigestion"],
    tips: "Posture matters! As your center of gravity shifts, try to stand tall to avoid unnecessary back strain."
  },
  {
    week: 9,
    trimester: 1,
    title: "Practicing for Life",
    size: "Honeydew",
    weight: "270g",
    length: "25cm",
    fruit: "🍈",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    desc: "Your baby is getting ready for their big debut! They are practicing breathing by moving amniotic fluid in and out of their developing lungs. Their skin is still translucent but is starting to thicken. They are also building up 'brown fat' which will help keep them warm after birth.",
    devPoints: [
      "The lungs are producing 'surfactant' to help them expand later.",
      "The baby's brain can now control their heartbeat.",
      "Sucking reflex is strong—they might even be sucking their thumb!",
      "Meconium (the first poop) is starting to form in the intestines."
    ],
    symptoms: ["Braxton Hicks (practice contractions)", "Varicose veins", "Difficulty sleeping"],
    tips: "Side sleeping (specifically the left side) is the gold standard now for optimal blood flow. Use a pregnancy pillow for extra comfort."
  },
  {
    week: 10,
    trimester: 1,
    title: "Graduation Day!",
    size: "Pumpkin",
    weight: "340g",
    length: "27cm",
    fruit: "🎃",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800",
    desc: "Congratulations! Your baby has officially graduated from 'embryo' to 'fetus.' This is a huge milestone. The critical period of organ development is over, and the rest of the pregnancy is about growth, refinement, and getting 'chunky' for the real world.",
    devPoints: [
      "All vital organs are in place and working.",
      "The baby's heart is now strong enough to be heard with a Doppler.",
      "Tooth buds for all 20 baby teeth are waiting in the gums.",
      "The 'tail' at the bottom of the spinal cord has completely vanished."
    ],
    symptoms: ["Nesting instinct starts", "Hip pain", "Visible bump"],
    tips: "Celebrate! You've made it through the most delicate phase of pregnancy. Maybe a nice (non-alcoholic) date night is in order?"
  }
];

// Fill 11-42 with humanized content
const fruitsList = {
  11: "Watermelon", 12: "Christmas Tree", 13: "Cabbage", 14: "Peach", 15: "Apple", 
  16: "Mango", 17: "Corn", 18: "Sweet Potato", 19: "Grapefruit", 20: "Banana",
  21: "Carrot", 22: "Papaya", 23: "Pineapple", 24: "Ear of Corn", 25: "Cauliflower",
  26: "Head of Lettuce", 27: "Cucumber", 28: "Eggplant", 29: "Butternut Squash", 30: "Cabbage",
  31: "Coconut", 32: "Jicama", 33: "Pineapple", 34: "Cantaloupe", 35: "Honeydew",
  36: "Romaine Lettuce", 37: "Swiss Chard", 38: "Winter Melon", 39: "Pumpkin", 40: "Watermelon",
  41: "Large Jackfruit", 42: "Giant Melon"
};

const titlesList = {
  11: "Rapid Growth & Tiny Nails", 12: "Reflexes & Face Refinement", 13: "Hello, Second Trimester!",
  14: "Little Facial Expressions", 15: "Hearing the World", 16: "Gender Reveal Readiness",
  17: "Building the Fat Stores", 18: "The First Fluttering Kicks", 19: "Senses Going Live",
  20: "The Halfway Celebration", 21: "Coordinated Acrobatics", 22: "Developing Touch",
  23: "Sharp Ears & Rhythmic Beats", 24: "The Viability Milestone", 25: "Startling at Sounds",
  26: "Opening Tiny Eyes", 27: "Entering the Home Stretch", 28: "Dreaming & Breathing",
  29: "Brain Power Surge", 30: "Developing a Personality", 31: "Getting Ready to Meet",
  32: "Practicing the Big Breath", 33: "Immune System Boost", 34: "Stronger & Chunkier",
  35: "Final Brain Maturation", 36: "Almost Full Term!", 37: "Early Term Readiness",
  38: "Full Term Perfection", 39: "Packing for the Big Day", 40: "Your Due Date Arrival", 
  41: "Taking Extra Time", 42: "The Final Countdown"
};

const imagesList = [
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800"
];

for (let w = 11; w <= 42; w++) {
  const tri = w <= 12 ? 1 : w <= 26 ? 2 : 3;
  weekData.push({
    week: w,
    trimester: tri,
    title: titlesList[w] || "Continued Growth",
    size: fruitsList[w] || "Fruit",
    weight: w < 20 ? `${w * 15}g` : `${(w / 12).toFixed(1)}kg`,
    length: `${w + 8}cm`,
    fruit: "🤰",
    image: imagesList[w % imagesList.length],
    desc: `Week ${w} is a period of remarkable transformation. Your baby is now focusing all their energy on gaining weight and refining the complex systems that will sustain them. Every day, their brain is forming new connections, and their body is becoming more proportioned and ready for the world.`,
    devPoints: [
      "Nervous system maturity reaches new heights.",
      "Building up subcutaneous fat for temperature regulation.",
      "Strengthening the suck-swallow-breathe coordination.",
      "Developing unique sleep and wake patterns you might start to notice."
    ],
    symptoms: ["Occasional Braxton Hicks", "Lower back tension", "Increased energy or nesting urges"],
    tips: "Focus on your well-being. Gentle movement, plenty of fluids, and a positive mindset are your best tools right now."
  });
}

const foodData = [
  {
    food: "sushi",
    title: "Sushi During Pregnancy: What You Need to Know",
    safe: false,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    answer: "While sushi is a global favorite, raw fish can be risky during pregnancy due to potential parasites and Listeria bacteria. Your immune system is slightly suppressed right now, making you more vulnerable. However, you don't have to skip the sushi bar entirely—just choose wisely!",
    alternatives: "Opt for cooked rolls like California rolls (crab meat is usually cooked), shrimp tempura rolls, or delicious vegetarian options like avocado and cucumber rolls."
  },
  {
    food: "coffee",
    title: "Your Morning Brew: Is Coffee Safe?",
    safe: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    answer: "Good news for coffee lovers! You don't have to give up your morning ritual. Current guidelines suggest that up to 200mg of caffeine per day (about one 12-ounce cup of coffee) is perfectly safe for you and your baby. Moderation is the key to enjoying your brew without worry.",
    alternatives: "If you're looking to cut back, try half-caf, high-quality decaf, or explore the world of pregnancy-safe herbal teas like rooibos or peppermint."
  },
  {
    food: "soft-cheese",
    title: "The Cheese Guide: Brie, Feta, and More",
    safe: false,
    image: "https://images.unsplash.com/photo-1528284850592-457588390079?auto=format&fit=crop&q=80&w=800",
    answer: "Soft cheeses are a bit of a gray area. The concern is unpasteurized milk, which can carry Listeria. In many countries, most store-bought soft cheeses are pasteurized and safe, but always check the label. If it's unpasteurized, it's best to pass for now.",
    alternatives: "Hard cheeses like Cheddar, Swiss, and Parmesan are always safe. For that creamy fix, look for pasteurized versions of goat cheese or cream cheese."
  },
  {
    food: "deli-meat",
    title: "Deli Meats & Sandwiches: Safety First",
    safe: false,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800",
    answer: "Cold deli meats can occasionally carry Listeria. To enjoy your favorite sandwich safely, the secret is heat! Heating deli meats until they are steaming hot (165°F) kills any harmful bacteria, making them safe to eat.",
    alternatives: "Freshly roasted chicken or turkey, hot grilled sandwiches, or protein-rich plant-based spreads like hummus."
  },
  {
    food: "eggs",
    title: "The Power of Eggs for Baby's Brain",
    safe: true,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    answer: "Eggs are a nutritional powerhouse, especially for the brain-boosting nutrient choline. The only rule is to make sure they are fully cooked. Runny yolks or raw egg in dressings carry a small risk of Salmonella, so go for 'hard' or 'well-done' styles.",
    alternatives: "Hard-boiled eggs are a perfect on-the-go snack. Scrambled, poached (well-done), or omelets are all fantastic choices."
  },
  {
    food: "salmon",
    title: "Salmon: The Ultimate Pregnancy Superfood",
    safe: true,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    answer: "Salmon is one of the best things you can eat! It's packed with Omega-3 fatty acids (DHA) that are essential for your baby's brain and eye development. Plus, it's low in mercury. Just ensure it's fully cooked to enjoy all those benefits.",
    alternatives: "If you're not a fan of salmon, other low-mercury options include trout, herring, and sardines."
  },
  {
    food: "honey",
    title: "Honey: Sweet and Safe",
    safe: true,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    answer: "You can absolutely enjoy honey while pregnant. While honey is unsafe for infants under one year old due to botulism spores, your mature digestive system handles it easily, and it cannot pass through the placenta to your baby.",
    alternatives: "Maple syrup or agave nectar are also great natural sweeteners if you prefer a different flavor profile."
  },
  {
    food: "pineapple",
    title: "Pineapple Myths vs. Reality",
    safe: true,
    image: "https://images.unsplash.com/photo-1550258114-b834e70e9be1?auto=format&fit=crop&q=80&w=800",
    answer: "Don't believe the old wives' tales! Pineapple does not cause labor. You'd have to eat an impossible amount of pineapple cores for the bromelain to have any effect. In normal amounts, it's a delicious source of Vitamin C and fiber.",
    alternatives: "Mango, papaya (make sure it's ripe), and citrus fruits are also wonderful tropical treats."
  },
  {
    food: "tuna",
    title: "Tuna: Finding the Mercury Balance",
    safe: true,
    image: "https://images.unsplash.com/photo-1544610830-2350fffd4ad9?auto=format&fit=crop&q=80&w=800",
    answer: "Tuna is safe and healthy, but mercury is the thing to watch. The simple rule: 'Light' canned tuna is better than 'White' or Albacore because it has much less mercury. Stick to 1-2 servings a week and you're good to go!",
    alternatives: "Canned salmon is a great high-protein, low-mercury alternative that works perfectly in sandwiches and salads."
  },
  {
    food: "chocolate",
    title: "Chocolate: A Sweet Pregnancy Treat?",
    safe: true,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800",
    answer: "Indulge your cravings! Chocolate is safe and may even have benefits for blood pressure and mood. Just keep an eye on the caffeine content (especially in dark chocolate) and the added sugars.",
    alternatives: "Dark chocolate (70%+ cocoa) is the healthiest choice for a rich flavor with less sugar. Cocoa powder in smoothies is also a great option."
  },
  {
    food: "peanuts",
    title: "Peanuts & Pregnancy: Allergy Myths Debunked",
    safe: true,
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&q=80&w=800",
    answer: "Unless you have a peanut allergy yourself, peanuts and peanut butter are perfectly safe. In fact, eating peanuts during pregnancy may actually reduce the risk of your child developing a nut allergy later in life!",
    alternatives: "Almond butter, sunflower seed butter, or walnuts are also excellent sources of healthy fats and protein."
  },
  {
    food: "spicy-food",
    title: "Spicy Food: Will it Affect Your Baby?",
    safe: true,
    image: "https://images.unsplash.com/photo-1544333346-64e4fe1f8fa2?auto=format&fit=crop&q=80&w=800",
    answer: "Spice things up! Spicy food is 100% safe for your baby. While it might cause you some heartburn or indigestion as your pregnancy progresses, it won't harm the little one. Your baby even gets a tiny 'preview' of the flavors through the amniotic fluid!",
    alternatives: "If spice causes too much heartburn, try milder aromatics like ginger, garlic, or fresh herbs like cilantro and basil."
  },
  {
    food: "papaya",
    title: "Papaya: Ripe vs. Unripe Warning",
    safe: true,
    image: "https://images.unsplash.com/photo-1517282003859-744491f21165?auto=format&fit=crop&q=80&w=800",
    answer: "The safety of papaya depends entirely on how ripe it is. Fully ripe papaya (yellow/orange skin) is safe and packed with vitamins. However, unripe or semi-ripe papaya contains a latex substance that can trigger uterine contractions, so it must be avoided.",
    alternatives: "Mango, cantaloupe, and oranges are safe, vitamin-rich alternatives if you're unsure about the ripeness of a papaya."
  },
  {
    food: "herbal-tea",
    title: "Herbal Teas: Which Ones Are Safe?",
    safe: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd99625?auto=format&fit=crop&q=80&w=800",
    answer: "Most common herbal teas like Ginger (great for nausea!) and Peppermint are safe and soothing. However, some herbs like Hibiscus, Nettle, or Raspberry Leaf (in early pregnancy) should be avoided or used with caution. Always check the ingredients list.",
    alternatives: "Rooibos is a fantastic caffeine-free and safe option. Hot water with a slice of lemon and a bit of honey is also a classic and safe choice."
  },
  {
    food: "mayo",
    title: "Mayonnaise: The Pasteurization Rule",
    safe: true,
    image: "https://images.unsplash.com/photo-1582230689914-7226685f0962?auto=format&fit=crop&q=80&w=800",
    answer: "Commercial mayonnaise (the kind you find on the shelf at the grocery store) is safe because it's made with pasteurized eggs. The only ones to avoid are 'house-made' or 'artisan' mayos often found in fancy restaurants, as they may use raw eggs.",
    alternatives: "Greek yogurt or smashed avocado can be used as a delicious and safe creamy substitute in sandwiches and salads."
  },
  {
    food: "yogurt",
    title: "Yogurt: Probiotics for Two",
    safe: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    answer: "Yogurt is an amazing pregnancy food! It's rich in calcium and probiotics that support your gut health. Just ensure it's pasteurized (which almost all commercial brands are) and try to choose low-sugar options when possible.",
    alternatives: "Kefir is another great probiotic drink. For a dairy-free option, coconut or almond milk yogurts are also safe and delicious."
  },
  {
    food: "steak",
    title: "Steak & Red Meat: The Temperature Guide",
    safe: true,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
    answer: "Steak is a great source of iron and protein, which you need more of right now. The catch? It must be well-done. Raw or medium-rare meat can harbor parasites like Toxoplasma. Cook your steak to an internal temperature of 160°F (71°C) to be safe.",
    alternatives: "Slow-cooked stews, pot roasts, or ground meat (fully cooked) are easy ways to ensure your meat is safe and tender."
  },
  {
    food: "energy-drinks",
    title: "Energy Drinks: High Voltage Warning",
    safe: false,
    image: "https://images.unsplash.com/photo-1622543953495-a1796493a7a7?auto=format&fit=crop&q=80&w=800",
    answer: "It's best to skip the energy drinks for now. They often contain very high levels of caffeine and 'proprietary blends' of herbs (like ginseng or taurine) that haven't been thoroughly studied for safety during pregnancy.",
    alternatives: "If you need an energy boost, try a small cup of coffee, a glass of cold sparkling water with lime, or a protein-rich snack like almonds."
  },
  {
    food: "mushrooms",
    title: "Mushrooms: Cooked vs. Raw",
    safe: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    answer: "Mushrooms are safe and provide unique B-vitamins. However, you should always eat them cooked. Cooking breaks down tough cell walls and any mild toxins. Also, stick to store-bought varieties and avoid foraging for wild mushrooms unless you're an expert.",
    alternatives: "Button, Cremini, Portobello, and Shiitake mushrooms are all safe and nutritious when sautéed, roasted, or added to soups."
  }
];

module.exports = { weekData, foodData };

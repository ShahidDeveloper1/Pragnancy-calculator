/**
 * MamaCare Pro — Programmatic SEO Data Source
 * Reconstructed 42-Week Pregnancy Data & Food Safety Guidelines
 */

const weekData = [
  {
    week: 1,
    trimester: 1,
    title: "Fertilization & Implantation",
    size: "Poppy seed",
    weight: "<1g",
    length: "<1mm",
    fruit: "🌱",
    desc: "Your pregnancy journey begins now. Although you aren't technically pregnant during the first two weeks of your cycle, your body is preparing for ovulation. Fertilization typically occurs at the end of week 2 or the beginning of week 3.",
    devPoints: ["Fertilization occurs", "Zygote formation", "Travel to uterus", "Hormonal shifts begin"],
    symptoms: ["Fatigue", "Mild spotting", "Mood changes"],
    tips: "Start taking prenatal vitamins with at least 400mcg of folic acid daily."
  },
  {
    week: 2,
    trimester: 1,
    title: "Cell Division Begins",
    size: "Sesame seed",
    weight: "<1g",
    length: "1-2mm",
    fruit: "🫧",
    desc: "The fertilized egg, now called a zygote, begins a rapid process of cell division as it travels toward your uterus. It eventually becomes a blastocyst, preparing for the critical moment of implantation into the uterine wall.",
    devPoints: ["Rapid cell division", "Blastocyst formation", "Implantation begins", "Uterine lining thickening"],
    symptoms: ["Missed period", "Breast tenderness", "Fatigue"],
    tips: "Avoid alcohol, smoking, and limit caffeine to under 200mg per day."
  },
  {
    week: 3,
    trimester: 1,
    title: "Embryo Formation",
    size: "Blueberry",
    weight: "<1g",
    length: "3-4mm",
    fruit: "🫐",
    desc: "Implantation is complete. Your baby is now an embryo, and the cells are organizing into three distinct layers that will form the brain, heart, and internal organs. The heart begins its first primitive beats.",
    devPoints: ["Neural tube forming", "Heart begins beating", "Three germ layers develop", "Amniotic sac appearing"],
    symptoms: ["Morning sickness", "Frequent urination", "Heightened smell"],
    tips: "Ginger tea or small, frequent meals can help manage early nausea."
  },
  {
    week: 4,
    trimester: 1,
    title: "Heart Starts Beating",
    size: "Grape",
    weight: "<1g",
    length: "6-7mm",
    fruit: "🍇",
    desc: "The neural tube is closing, forming the foundation of the brain and spinal cord. The heart is now a simple tube that is actively pumping blood. Limb buds that will become arms and legs begin to sprout.",
    devPoints: ["Heart chambers forming", "Brain dividing into 3 parts", "Limb buds visible", "Facial features start"],
    symptoms: ["Nausea", "Bloating", "Mood swings", "Breast changes"],
    tips: "Schedule your first prenatal appointment for between 8 and 10 weeks."
  },
  {
    week: 5,
    trimester: 1,
    title: "Major Organs Forming",
    size: "Lime",
    weight: "<5g",
    length: "1.3cm",
    fruit: "🍋",
    desc: "Rapid brain growth continues, and the head is disproportionately large compared to the body. Facial features like nostrils and eye structures are starting to emerge. The liver is already producing blood cells.",
    devPoints: ["Intense brain growth", "Kidneys forming", "Liver producing blood", "Ear structures start"],
    symptoms: ["Dizziness", "Constipation", "Headaches", "Vaginal discharge"],
    tips: "Stay hydrated — aim for at least 8 to 10 glasses of water daily."
  },
  {
    week: 6,
    trimester: 1,
    title: "Facial Features Appear",
    size: "Avocado",
    weight: "100g",
    length: "15cm",
    fruit: "🥑",
    desc: "Your baby is becoming more active, though you can't feel it yet. The kidneys are functioning, and the baby is starting to produce urine. Eyelids are forming and will remain fused until the third trimester.",
    devPoints: ["Fingers and toes forming", "Bones beginning to harden", "Eyes can blink", "Fetal movement starts"],
    symptoms: ["Energy boost", "Decreased nausea", "Leg cramps", "Bump appears"],
    tips: "Start sleeping on your side to improve blood flow to the placenta."
  },
  {
    week: 7,
    trimester: 1,
    title: "Brain Development Surge",
    size: "Banana",
    weight: "140g",
    length: "18cm",
    fruit: "🍌",
    desc: "The brain is developing at an incredible rate, creating 100,000 neurons every minute. Fingers and toes are becoming more distinct, and the baby is starting to practice swallowing amniotic fluid.",
    devPoints: ["Hearing develops", "Sleep/wake cycles begin", "Facial expressions practice", "Rapid neuron growth"],
    symptoms: ["Heartburn", "Swollen gums", "Backache", "Linea nigra"],
    tips: "Pelvic floor exercises (Kegels) are great to start now and continue daily."
  },
  {
    week: 8,
    trimester: 1,
    title: "Movement Begins",
    size: "Broccoli",
    weight: "190g",
    length: "22cm",
    fruit: "🥦",
    desc: "The tail at the base of the spinal cord has disappeared. Your baby's bones are beginning to ossify (harden), and joints like elbows and knees are functioning. The baby can now perform spontaneous movements.",
    devPoints: ["Taste buds forming", "Eyelashes appearing", "Muscles strengthening", "Skeleton solidifying"],
    symptoms: ["Shortness of breath", "Frequent urination", "Pelvic pressure"],
    tips: "Eat small, iron-rich meals to maintain energy and support baby's growth."
  },
  {
    week: 9,
    trimester: 1,
    title: "Tiny Fingers & Toes",
    size: "Honeydew",
    weight: "270g",
    length: "25cm",
    fruit: "🍈",
    desc: "The face is looking more human, with the eyes moving from the sides to the front of the head. Tiny fingernails and toenails are beginning to form. The baby's heart is now fully divided into four chambers.",
    devPoints: ["Lungs producing surfactant", "Eyes can sense light", "Fat layers building", "Head-down position focus"],
    symptoms: ["Braxton Hicks", "Sleep difficulties", "Swollen ankles"],
    tips: "Track your baby's kick counts daily to ensure they are active and healthy."
  },
  {
    week: 10,
    trimester: 1,
    title: "Vital Organs Complete",
    size: "Pumpkin",
    weight: "340g",
    length: "27cm",
    fruit: "🎃",
    desc: "Your baby has officially graduated from 'embryo' to 'fetus.' All vital organs are formed and functioning. The critical period of organogenesis is largely complete, and the focus shifts to rapid growth and maturation.",
    devPoints: ["Brain structures complete", "Nails and hair fully grown", "Strong heartbeat", "Preparing for birth"],
    symptoms: ["Pelvic pressure", "Nesting instinct", "Hip pain"],
    tips: "Pack your hospital bag and finalize your birth plan with your partner."
  }
];

// Fill 11-42 with placeholders to avoid script crash while maintaining scale
for (let w = 11; w <= 42; w++) {
  const tri = w <= 12 ? 1 : w <= 26 ? 2 : 3;
  const fruits = {
    11: "Watermelon", 12: "Christmas Tree", 13: "Cabbage", 14: "Peach", 15: "Apple", 
    16: "Mango", 17: "Corn", 18: "Sweet Potato", 19: "Mango", 20: "Banana",
    21: "Carrot", 22: "Papaya", 23: "Pineapple", 24: "Corn", 25: "Cauliflower",
    26: "Lettuce", 27: "Cucumber", 28: "Eggplant", 29: "Coconut", 30: "Broccoli",
    31: "Kiwi", 32: "Squash", 33: "Pineapple", 34: "Cantaloupe", 35: "Honeydew",
    36: "Romaine", 37: "Swiss Chard", 38: "Leek", 39: "Mini Watermelon", 40: "Baby",
    41: "Large Melon", 42: "Huge Melon"
  };
  const titles = {
    11: "Rapid Growth Phase", 12: "Reflexes Develop", 13: "Second Trimester Begins",
    14: "Facial Expressions", 15: "Hearing Develops", 16: "Gender May Be Visible",
    17: "Fat Storage Begins", 18: "Movement You Can Feel", 19: "Senses Awakening",
    20: "Halfway There!", 21: "Coordinated Movement", 22: "Touch Sensitivity",
    23: "Hearing Sharpens", 24: "Viability Milestone", 25: "Startle Reflex",
    26: "Eyes Open", 27: "Third Trimester Begins", 28: "Lungs Maturing",
    29: "Brain Growth Accelerates", 30: "Strong Kicks", 31: "Rapid Weight Gain",
    32: "Practice Breathing", 33: "Immune System Building", 34: "Lung Maturity Nears",
    35: "Rapid Brain Development", 36: "Almost Full Term", 37: "Early Term",
    38: "Full Term", 39: "Ready for Birth", 40: "Due Date!", 41: "Post-Date", 42: "Post-Term"
  };
  
  weekData.push({
    week: w,
    trimester: tri,
    title: titles[w] || "Growth & Development",
    size: fruits[w] || "Fruit",
    weight: w < 20 ? `${w*5}g` : `${(w/10).toFixed(1)}kg`,
    length: `${w + 5}cm`,
    fruit: "🤰",
    desc: `Week ${w} marks a significant phase in your baby's development. At this stage, growth is the primary focus as all systems continue to mature and prepare for life outside the womb.`,
    devPoints: ["Rapid organ maturation", "Weight gain for temperature control", "Nervous system refinement", "Refining motor skills"],
    symptoms: ["Fatigue", "Backache", "Increased appetite"],
    tips: "Ensure you are staying active with gentle exercises like walking or prenatal yoga."
  });
}

const foodData = [
  {
    food: "sushi",
    title: "Can Pregnant Women Eat Sushi?",
    safe: false,
    answer: "Raw fish sushi carries a high risk of parasitic infections and listeria. While cooked sushi (like California rolls) is safe, raw preparations should be avoided until after delivery.",
    alternatives: "Cooked sushi rolls, vegetarian sushi, or tempura-based rolls."
  },
  {
    food: "coffee",
    title: "Can Pregnant Women Drink Coffee?",
    safe: true,
    answer: "Moderate caffeine intake (under 200mg per day, about one 12oz cup) is generally considered safe. High caffeine consumption has been linked to increased risks of low birth weight.",
    alternatives: "Decaf coffee, herbal teas (check safety), or fruit-infused water."
  },
  {
    food: "soft-cheese",
    title: "Can Pregnant Women Eat Soft Cheese?",
    safe: false,
    answer: "Unpasteurized soft cheeses like Brie, Camembert, and Feta can harbor Listeria. Only consume soft cheeses if they are clearly labeled as 'made with pasteurized milk.'",
    alternatives: "Hard cheeses (Cheddar, Parmesan), or pasteurized versions of soft cheese."
  },
  {
    food: "deli-meat",
    title: "Can Pregnant Women Eat Deli Meat?",
    safe: false,
    answer: "Cold cuts and deli meats can be contaminated with Listeria. If you must eat them, ensure they are heated until steaming hot (74°C/165°F) to kill any bacteria.",
    alternatives: "Freshly cooked meats, roasted chicken, or heated sandwiches."
  },
  {
    food: "eggs",
    title: "Can Pregnant Women Eat Eggs?",
    safe: true,
    answer: "Eggs are a fantastic source of choline. However, they must be fully cooked (solid yolks) to avoid Salmonella risk. Avoid raw cookie dough or homemade Caesar dressings.",
    alternatives: "Hard-boiled eggs, scrambled eggs, or pasteurized egg products."
  },
  {
    food: "salmon",
    title: "Can Pregnant Women Eat Salmon?",
    safe: true,
    answer: "Salmon is an excellent source of Omega-3 fatty acids (DHA), which is vital for baby's brain development. It is low in mercury and safe when fully cooked.",
    alternatives: "Sardines, trout, and other low-mercury fatty fish."
  },
  {
    food: "honey",
    title: "Can Pregnant Women Eat Honey?",
    safe: true,
    answer: "Honey is safe for pregnant women. While it can contain botulism spores that are dangerous for infants under 1 year, a pregnant woman's digestive system can handle them.",
    alternatives: "Maple syrup, agave nectar, or fruit purees."
  },
  {
    food: "pineapple",
    title: "Can Pregnant Women Eat Pineapple?",
    safe: true,
    answer: "The myth that pineapple causes labor is largely unfounded. You would need to eat massive quantities for the bromelain to have any effect. In normal amounts, it's a great source of Vitamin C.",
    alternatives: "Mango, papaya (ripe), or citrus fruits."
  },
  {
    food: "tuna",
    title: "Can Pregnant Women Eat Tuna?",
    safe: true,
    answer: "Tuna is safe in moderation. Stick to 'Light' canned tuna (lower mercury) rather than Albacore or tuna steaks. Limit consumption to 1-2 servings per week.",
    alternatives: "Light canned tuna, salmon, or shrimp."
  },
  {
    food: "shrimp",
    title: "Can Pregnant Women Eat Shrimp?",
    safe: true,
    answer: "Shrimp is low in mercury and high in protein, making it a safe and healthy choice during pregnancy when fully cooked. Avoid raw shrimp preparations.",
    alternatives: "Cooked prawns, scallops, or crab meat."
  }
];

module.exports = { weekData, foodData };

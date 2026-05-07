const foodDataRich = [
  {
    food: "sushi",
    safe: false,
    title: "Sushi and Raw Fish",
    metaTitle: "Can I Eat Sushi While Pregnant? Safety Guide | MomCalc",
    metaDesc: "Is sushi safe during pregnancy? Learn about the risks of raw fish, parasites, and safe sushi alternatives for pregnant women.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">It is one of the most common pregnancy cravings, but raw sushi remains one of the most debated foods in prenatal nutrition. While the risk of parasitic infection is relatively low in high-end restaurants, the consequences of foodborne illness during pregnancy can be severe for a developing baby.</p>",
    safetyVerdict: "Most medical professionals advise avoiding raw fish sushi (Sashimi, Nigiri) due to the risk of parasites like Anisakis and bacteria like Listeria. However, cooked sushi and vegetarian rolls are perfectly safe and highly recommended for their nutritional value.",
    medicalInsights: "The primary concern with raw fish is the risk of parasites and bacteria. While your adult immune system might handle a mild case of food poisoning, pregnancy suppresses your immune response to protect the embryo. This makes you more susceptible to Listeriosis, which can cross the placenta and lead to miscarriage or preterm birth. Additionally, some raw fish contains high levels of mercury, which can interfere with the development of the baby's nervous system.",
    risksAndBenefits: ["Risk of Listeria and Salmonella", "Potential for parasitic infection", "High mercury in certain raw fish", "Rich in Omega-3 fatty acids (if cooked)", "High quality protein"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Opt for fully cooked rolls</strong> — Tempura, California rolls (with imitation crab), and unagi (eel) are safe choices because the fish has been heat-treated." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Try vegetarian options</strong> — Avocado rolls, cucumber rolls, and sweet potato tempura provide the sushi experience without any risk of illness." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Watch for cross-contamination</strong> — Ensure the restaurant uses separate knives and cutting boards for raw and cooked sushi to prevent the transfer of bacteria." }
    ],
    alternatives: "Cooked shrimp rolls, California rolls, avocado maki, or high-quality smoked salmon (if hot-smoked to an internal temperature of 145°F).",
    faqs: [
      { q: "Can I eat smoked salmon sushi?", a: "Only if it is 'hot-smoked' (cooked through). 'Cold-smoked' salmon is still technically raw and carries a higher risk of Listeria contamination." },
      { q: "Is imitation crab safe during pregnancy?", a: "Yes. Imitation crab (surimi) is made from cooked white fish and is perfectly safe for pregnant women." },
      { q: "What should I do if I accidentally ate raw sushi?", a: "Don't panic. The risk of infection from a single serving is low. Monitor yourself for symptoms like fever, muscle aches, or gastrointestinal distress, and contact your doctor if you feel unwell." }
    ]
  },
  {
    food: "coffee",
    safe: true,
    title: "Coffee and Caffeine Intake",
    metaTitle: "Is Coffee Safe During Pregnancy? Caffeine Limits | MomCalc",
    metaDesc: "Wondering if you can have your morning cup? Learn about safe caffeine limits during pregnancy and how coffee affects your baby's development.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">For many, the morning doesn't truly begin until the first sip of coffee. When you're pregnant, that routine suddenly feels loaded with questions. The good news? You don't have to give up your caffeine fix entirely—you just need to manage the dose.</p>",
    safetyVerdict: "Coffee is generally safe during pregnancy as long as consumption is limited to 200mg of caffeine per day. This is roughly equivalent to one 12-ounce cup of brewed coffee.",
    medicalInsights: "Caffeine is a stimulant that easily crosses the placenta. While your body can process it efficiently, a developing baby does not yet have the enzymes required to metabolize caffeine quickly. High levels of caffeine can constrict blood flow to the placenta and have been linked to lower birth weights and, in extreme cases, an increased risk of miscarriage. However, staying under the 200mg threshold is widely considered safe by major health organizations like ACOG.",
    risksAndBenefits: ["Improved focus and energy", "Potential for reduced pregnancy brain", "High intake linked to low birth weight", "Can cause jitteriness and insomnia", "Increased heart rate in both mother and baby"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Measure your intake</strong> — Be aware that a 'cup' in many coffee shops is actually 16 or 20 ounces, which can easily exceed the 200mg limit." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Switch to half-decaf</strong> — If you enjoy the ritual of drinking multiple cups, try mixing decaf and regular beans to lower your total caffeine load." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Consider hidden caffeine</strong> — Remember that chocolate, soda, and certain teas also contain caffeine that counts toward your daily total." }
    ],
    alternatives: "Decaffeinated coffee, chicory root tea, or a small cup of green tea (which has less caffeine and more antioxidants).",
    faqs: [
      { q: "Does caffeine cause birth defects?", a: "No. There is no evidence linking moderate caffeine intake (under 200mg) to birth defects or developmental delays." },
      { q: "Can I drink espresso while pregnant?", a: "Yes. A single shot of espresso typically contains 60-75mg of caffeine, which fits well within the daily limit." },
      { q: "Why does coffee make me more nauseous now?", a: "Pregnancy hormones can make you more sensitive to the acidity and bitter compounds in coffee, often leading to heartburn or aggravated morning sickness." }
    ]
  },
  {
    food: "soft-cheese",
    safe: false,
    title: "Soft Cheeses and Listeria Risk",
    metaTitle: "Safe Cheeses During Pregnancy: Brie, Feta & More | MomCalc",
    metaDesc: "Which cheeses are safe for pregnancy? Learn why unpasteurized soft cheeses like Brie and Gorgonzola carry a Listeria risk and what to choose instead.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">A cheese platter is the centerpiece of many social gatherings, but for pregnant women, it can be a minefield of 'can-I-eat-this?' moments. The rule is simpler than it looks: it's not the texture of the cheese that matters most—it's the pasteurization.</p>",
    safetyVerdict: "Soft cheeses like Brie, Camembert, and Feta are only safe if they are made with pasteurized milk. Unpasteurized (raw milk) soft cheeses should be strictly avoided due to the risk of Listeria contamination.",
    medicalInsights: "Listeria monocytogenes is a hardy bacterium that can thrive in moist, low-acid environments like soft cheese. Unlike most foodborne illnesses, Listeria can grow even at refrigerated temperatures. While it rarely causes severe illness in healthy adults, it is 10 to 20 times more likely to infect pregnant women. A Listeria infection can cross the placental barrier, potentially causing miscarriage, stillbirth, or severe neurological issues for the newborn.",
    risksAndBenefits: ["High Listeria risk in raw varieties", "Excellent source of calcium", "High protein and healthy fats", "Supports baby's bone development", "Aids in maternal dental health"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Always check the label</strong> — Look for the word 'pasteurized'. In the US and many other countries, most supermarket soft cheeses are pasteurized by law." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook it to be sure</strong> — Listeria is killed by heat. If you really want Brie, bake it until it's bubbling hot (165°F) to ensure any bacteria are destroyed." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid 'artisanal' raw cheeses</strong> — Be extra cautious at farmer's markets or specialty shops where cheeses might be made from raw, unpasteurized milk." }
    ],
    alternatives: "Hard cheeses (Cheddar, Parmesan, Swiss), pasteurized cream cheese, cottage cheese, or pasteurized mozzarella.",
    faqs: [
      { q: "Is Feta cheese safe during pregnancy?", a: "Yes, provided it is made from pasteurized milk. Most Feta sold in major grocery stores is pasteurized and safe." },
      { q: "Can I eat Mozzarella?", a: "Yes! Mozzarella is almost always pasteurized and is considered a very safe, low-risk cheese for pregnancy." },
      { q: "What about Blue Cheese?", a: "Pasteurized blue cheese (like Gorgonzola) is safe, but because it is moist, some doctors still suggest caution. If it's cooked into a sauce or on a pizza, it's completely safe." }
    ]
  },
  {
    food: "deli-meat",
    safe: false,
    title: "Deli Meats and Cold Cuts",
    metaTitle: "Can I Eat Deli Meat While Pregnant? Safety Tips | MomCalc",
    metaDesc: "Deli meats and cold cuts carry a risk of Listeria. Learn how to safely consume turkey, ham, and roast beef during your pregnancy journey.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">The convenience of a deli sandwich is hard to beat, but during pregnancy, cold cuts require a second thought. These meats are processed in environments that can sometimes harbor persistent bacteria, making safety protocols essential for your lunchtime routine.</p>",
    safetyVerdict: "Deli meats (turkey, ham, bologna, roast beef) should be avoided unless they are heated until steaming hot (165°F) just before serving. This kills any potential Listeria bacteria.",
    medicalInsights: "Deli meats are at risk for Listeria contamination after they have been cooked but before they are packaged, or at the deli counter itself. Because Listeria can survive and even grow in cold temperatures, the refrigerator doesn't provide protection. While outbreaks are rare, the severity of Listeriosis during pregnancy makes the 'heat it up' rule a standard medical recommendation.",
    risksAndBenefits: ["High risk of Listeria contamination", "Convenient source of protein", "Often high in sodium and nitrates", "Risk of cross-contamination at deli counters", "Supports muscle maintenance"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Heat until steaming</strong> — Use a microwave or pan to heat your deli meat until it is visibly steaming. This ensures the internal temperature has reached the safety threshold." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid the deli counter</strong> — Pre-packaged meats from reputable brands are slightly lower risk than meat sliced at a communal deli counter, though both still require heating." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Watch for nitrates</strong> — Many deli meats are high in nitrates, which some studies suggest should be limited during pregnancy. Look for 'nitrate-free' options." }
    ],
    alternatives: "Freshly cooked chicken breast, canned tuna (in moderation), roasted vegetables, or hot grilled sandwiches.",
    faqs: [
      { q: "Is pepperoni safe on pizza?", a: "Yes. Because pepperoni on pizza is cooked at very high temperatures in the oven, any bacteria are destroyed, making it safe to eat." },
      { q: "Can I eat cold chicken salad?", a: "If the chicken was freshly cooked and then immediately refrigerated, it is generally safe. Avoid pre-made chicken salads from deli displays where they may have sat out for long periods." },
      { q: "What are the symptoms of Listeria?", a: "Symptoms can take up to 2 months to appear and include fever, chills, muscle aches, and sometimes diarrhea or upset stomach. Always report these to your doctor if you're pregnant." }
    ]
  },
  {
    food: "steak",
    safe: true,
    title: "Steak and Red Meat",
    metaTitle: "Safe Steak Temperatures During Pregnancy | MomCalc",
    metaDesc: "Craving a steak? Learn the safe cooking temperatures for red meat during pregnancy to avoid Toxoplasmosis and other foodborne risks.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Red meat is a powerhouse of iron and protein, two nutrients your body needs more of than ever right now. But if you're used to ordering your steak 'blue' or medium-rare, your cooking habits will need a temporary upgrade for safety.</p>",
    safetyVerdict: "Steak is safe and highly nutritious during pregnancy, provided it is cooked to an internal temperature of at least 145°F (63°C) with a three-minute rest time. Ground beef must reach 160°F.",
    medicalInsights: "The primary risk with undercooked red meat is Toxoplasmosis, a parasite found in soil and meat that can cause serious developmental issues in a fetus. While many adults have been exposed to it and are immune, a new infection during pregnancy can be dangerous. Cooking meat to the recommended temperature effectively kills the parasite, as well as common bacteria like E. coli and Salmonella.",
    risksAndBenefits: ["Excellent source of heme iron", "High-quality protein for baby's growth", "Risk of Toxoplasmosis in raw meat", "B12 for nervous system support", "Potential for E. coli in undercooked ground beef"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Use a meat thermometer</strong> — Color is not a reliable indicator of safety. A thermometer ensures your steak has reached the 145°F threshold for safety." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Order 'Medium' or higher</strong> — When dining out, avoid 'Rare' or 'Medium-Rare'. Most experts recommend Medium (145°F) as the safe minimum for whole cuts of beef." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Ground beef is different</strong> — Because bacteria on the surface are mixed throughout during grinding, all ground beef (burgers, meatloaf) must be cooked to 160°F." }
    ],
    alternatives: "Slow-cooked pot roast, well-done burgers, iron-rich spinach, or lentils.",
    faqs: [
      { q: "Is pink in the middle okay for steak?", a: "For whole cuts like steak, a slight pink center is usually safe if the internal temperature reached 145°F. For ground beef, no pink should remain." },
      { q: "What if I ate rare meat before I knew I was pregnant?", a: "The risk of a single exposure is low. You can ask your doctor for a Toxoplasmosis titer test to see if you have existing immunity or a recent infection." },
      { q: "Why do I need more iron now?", a: "Your blood volume increases by nearly 50% during pregnancy to support the baby and placenta. Iron is the key component of hemoglobin, which carries oxygen to your baby." }
    ]
  },
  {
    food: "eggs",
    safe: true,
    title: "Eggs and Salmonellosis Risk",
    metaTitle: "Can I Eat Eggs While Pregnant? Safety Guide | MomCalc",
    metaDesc: "Eggs are a pregnancy superfood, but raw yolks carry risks. Learn how to safely enjoy eggs and avoid Salmonella during your pregnancy.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Eggs are often called 'nature's multivitamin' for pregnant women, packed with choline for baby's brain development. However, the days of dipping your toast into a runny yolk are temporarily on hold for the sake of safety.</p>",
    safetyVerdict: "Eggs are safe and highly recommended during pregnancy, provided both the white and the yolk are cooked until firm. Raw or undercooked eggs should be avoided due to the risk of Salmonella.",
    medicalInsights: "Salmonella is a type of bacteria that can be found inside eggs or on the shells. While a Salmonella infection usually won't harm the baby directly, it can cause severe vomiting, diarrhea, and dehydration in the mother, which can lead to complications. In rare cases, high maternal fever from the infection can affect fetal development. Cooking eggs until the yolks are solid destroys any potential bacteria.",
    risksAndBenefits: ["Essential choline for brain health", "High quality, affordable protein", "Risk of Salmonella in raw yolks", "Vitamin D for bone support", "Supports maternal eye health"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook until yolks are firm</strong> — Whether boiled, poached, or fried, ensure the yolk is no longer runny or liquid." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Use pasteurized eggs for recipes</strong> — If a recipe (like homemade mayo or certain desserts) calls for raw eggs, use 'pasteurized-in-the-shell' eggs which have been heat-treated to kill bacteria." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Beware of hidden raw eggs</strong> — Some restaurant Caesar dressings, hollandaise sauces, and tiramisu use raw eggs. Always ask before ordering." }
    ],
    alternatives: "Hard-boiled eggs, well-cooked omelets, or commercial dressings (which are almost always pasteurized).",
    faqs: [
      { q: "Can I eat poached eggs?", a: "Only if the yolk is cooked until it is no longer runny. Traditional 'runny' poached eggs are considered higher risk during pregnancy." },
      { q: "Is Hollandaise sauce safe?", a: "Traditional Hollandaise is made with raw egg yolks and should be avoided unless you are certain it was made with pasteurized eggs or heated thoroughly." },
      { q: "What is choline and why do I need it?", a: "Choline is a nutrient vital for the development of the baby's brain and spinal cord, helping to prevent certain birth defects." }
    ]
  },
  {
    food: "tuna",
    safe: true,
    title: "Tuna and Mercury Levels",
    metaTitle: "Safe Tuna Consumption During Pregnancy | MomCalc",
    metaDesc: "Tuna is rich in Omega-3s but contains mercury. Learn the safe limits for canned light vs. albacore tuna to protect your baby's development.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Tuna is a convenient, high-protein pantry staple that provides essential fatty acids for your baby's growing brain. But because tuna is a predatory fish, it also accumulates mercury, requiring a balanced approach to how much you eat.</p>",
    safetyVerdict: "Tuna is safe in moderation. Pregnant women can safely eat up to 12 ounces (2-3 servings) of 'Canned Light' tuna per week. 'Albacore' or 'White' tuna should be limited to 6 ounces per week.",
    medicalInsights: "Mercury is a heavy metal that can build up in the bloodstream over time. Predatory fish like tuna consume smaller fish, accumulating the mercury from those fish in their own tissues. High levels of mercury in a pregnant woman's blood can cross the placenta and potentially interfere with the development of the baby's brain and nervous system. Canned light tuna is typically made from smaller skipjack tuna, which has lower mercury levels than larger albacore.",
    risksAndBenefits: ["Rich in DHA for brain growth", "Excellent source of Vitamin D", "Risk of mercury accumulation", "Supports cardiovascular health", "Promotes healthy fetal weight"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose 'Light' over 'White'</strong> — Check the label on your canned tuna. 'Light' tuna is significantly lower in mercury than 'Albacore' or 'White' tuna." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid Tuna Steaks</strong> — Fresh or frozen tuna steaks are usually from larger tuna species and contain much higher mercury levels than canned varieties." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Track your servings</strong> — Keep a mental note of your seafood intake for the week to ensure you don't exceed the 12-ounce combined limit for low-mercury fish." }
    ],
    alternatives: "Salmon, sardines, herring, and trout are all very low in mercury and high in healthy Omega-3s.",
    faqs: [
      { q: "Is 'White' tuna the same as 'Light' tuna?", a: "No. 'White' tuna is Albacore, which has three times more mercury than 'Light' tuna (Skipjack). Use 'Light' tuna for your weekly sandwiches." },
      { q: "Can I eat tuna every day?", a: "No. It's best to rotate your protein sources to avoid building up high levels of mercury. Limit tuna to 2-3 times per week." },
      { q: "What fish should I avoid entirely?", a: "Avoid high-mercury fish like King Mackerel, Shark, Swordfish, and Tilefish from the Gulf of Mexico." }
    ]
  },
  {
    food: "salmon",
    safe: true,
    title: "Salmon: The Pregnancy Superfood",
    metaTitle: "Eating Salmon During Pregnancy: Benefits & Safety | MomCalc",
    metaDesc: "Salmon is one of the best foods for a healthy pregnancy. Discover the benefits of DHA, low-mercury safety, and the best ways to prepare it.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">If there was a prize for the 'best all-around pregnancy food,' salmon would be a top contender. Low in mercury and incredibly high in brain-building fats, it is a nutritional powerhouse that supports both you and your baby.</p>",
    safetyVerdict: "Salmon is exceptionally safe and highly recommended during pregnancy. It is a low-mercury fish that can be enjoyed 2-3 times per week, provided it is cooked to an internal temperature of 145°F.",
    medicalInsights: "Salmon is one of the primary sources of DHA (docosahexaenoic acid), an Omega-3 fatty acid that is essential for the development of your baby's brain, eyes, and central nervous system. Studies suggest that mothers who consume adequate Omega-3s during pregnancy may have children with better cognitive outcomes. Furthermore, salmon is a rare food source of Vitamin D, which helps your body absorb the calcium needed for your baby's skeletal growth.",
    risksAndBenefits: ["Best source of DHA for brain health", "Very low mercury levels", "Supports maternal heart health", "Reduces risk of preterm birth", "Provides high-quality protein"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook to 145°F</strong> — Ensure the salmon is opaque and flakes easily with a fork. This ensures any potential parasites or bacteria are destroyed." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Wild-caught is ideal</strong> — While both farmed and wild salmon are safe, wild-caught salmon often has a slightly better nutritional profile and fewer contaminants." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid raw salmon</strong> — Sashimi and cold-smoked salmon carry a Listeria risk and should be avoided unless they are cooked through." }
    ],
    alternatives: "Sardines, rainbow trout, and walnuts (for a plant-based Omega-3 source).",
    faqs: [
      { q: "Is farmed salmon safe?", a: "Yes, farmed salmon is safe and provides excellent nutrition. Modern farming practices have significantly reduced the level of contaminants once found in farmed fish." },
      { q: "Can I eat the skin?", a: "Yes, but some experts suggest removing the skin because it is where contaminants (if present) are most likely to accumulate. The flesh itself is the primary source of nutrients." },
      { q: "How much salmon is too much?", a: "While salmon is low in mercury, it's generally recommended to stick to 2-3 servings per week as part of a varied diet." }
    ]
  },
  {
    food: "shrimp",
    safe: true,
    title: "Shrimp and Shellfish",
    metaTitle: "Is Shrimp Safe During Pregnancy? Cooking & Safety | MomCalc",
    metaDesc: "Shrimp is a low-mercury, high-protein choice for pregnancy. Learn how to safely cook shrimp and avoid risks associated with raw shellfish.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Shrimp is one of the most popular seafood choices worldwide, and for good reason—it's versatile, lean, and nutrient-dense. For pregnant women, it's a great way to get high-quality protein without worrying about high mercury levels.</p>",
    safetyVerdict: "Shrimp is safe and a great nutritional choice during pregnancy. It is very low in mercury and can be eaten up to 12 ounces per week, as long as it is fully cooked until the flesh is pearly and opaque.",
    medicalInsights: "Like other shellfish, shrimp should never be eaten raw or undercooked (like in certain ceviches) because of the risk of Vibrio bacteria and other foodborne pathogens. However, shrimp are very low on the food chain, meaning they don't accumulate the high levels of mercury found in predatory fish. They are also a good source of iodine, which is critical for the development of the baby's thyroid gland and brain.",
    risksAndBenefits: ["Very low mercury levels", "High in iodine and selenium", "Excellent lean protein source", "Supports baby's thyroid function", "Low in saturated fat"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook until opaque</strong> — Raw shrimp is gray and translucent; cooked shrimp should be pink and opaque. Ensure it's firm to the touch." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Peel and devein</strong> — While not strictly a safety requirement, removing the digestive tract (the 'vein') is recommended for cleanliness and better flavor." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Beware of raw shellfish</strong> — Avoid raw oysters, clams, and mussels entirely, as they carry a much higher risk of severe bacterial infection than shrimp." }
    ],
    alternatives: "Cooked scallops, crab meat (pasteurized), and white fish like cod or tilapia.",
    faqs: [
      { q: "Can I eat shrimp cocktail?", a: "Yes, as long as the shrimp were fully boiled and then chilled. Avoid any 'shrimp ceviche' where the shrimp might be 'cooked' only in lime juice." },
      { q: "Is fried shrimp okay?", a: "Yes, fried shrimp is safe as it is cooked at high temperatures. Just be mindful of the added fats and calories from the batter." },
      { q: "Can I eat shrimp if I have a mild allergy?", a: "No. Pregnancy can sometimes worsen allergic reactions. If you have any history of shellfish allergy, avoid it entirely and consult your doctor." }
    ]
  },
  {
    food: "herbal-tea",
    safe: true,
    title: "Herbal Teas and Infusions",
    metaTitle: "Safe Herbal Teas During Pregnancy | MomCalc",
    metaDesc: "Not all herbal teas are safe for pregnancy. Learn which infusions like ginger and peppermint are safe, and which herbs can stimulate the uterus.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">A warm cup of tea can be incredibly soothing, especially when dealing with pregnancy symptoms like morning sickness or insomnia. But because 'herbal' doesn't always mean 'gentle,' you need to know which plants are safe for your growing baby.</p>",
    safetyVerdict: "Many herbal teas (like Ginger, Peppermint, and Raspberry Leaf after the first trimester) are safe in moderation. However, some herbs act as uterine stimulants and should be strictly avoided.",
    medicalInsights: "Unlike regular black or green tea, herbal teas are made from various parts of plants that can have medicinal effects. Some herbs, such as pennyroyal, licorice root, and cohosh, can cause uterine contractions or interfere with hormones, increasing the risk of preterm labor or miscarriage. Furthermore, herbal teas are often unregulated, meaning the concentration of the active ingredients can vary widely between brands.",
    risksAndBenefits: ["Ginger tea relieves morning sickness", "Peppermint aids in digestion", "Raspberry leaf may tone the uterus", "Certain herbs can stimulate contractions", "Unregulated ingredients in some brands"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Stick to 'Culinary' herbs</strong> — Teas made from common food ingredients like ginger, lemon balm, and fruit are generally the safest choices." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Limit intake to 2 cups</strong> — Even safe herbal teas should be consumed in moderation. Excessive amounts of any herb can potentially have side effects." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid 'Medicinal' blends</strong> — Steer clear of teas marketed for detoxing, weight loss, or PMS, as these often contain potent herbs that are unsafe for pregnancy." }
    ],
    alternatives: "Hot water with fresh lemon and honey, decaffeinated black tea, or Rooibos (Red) tea which is naturally caffeine-free.",
    faqs: [
      { q: "Is Peppermint tea safe?", a: "Yes. Peppermint tea is widely considered safe and is often used to help relieve pregnancy-related bloating and indigestion." },
      { q: "Can I drink Raspberry Leaf tea?", a: "Most doctors suggest waiting until the second or third trimester. It is traditionally used to 'tone the uterus' in preparation for labor, but should be avoided in early pregnancy." },
      { q: "Which herbs should I avoid entirely?", a: "Avoid teas containing Licorice Root, Sage (in large amounts), Rosemary (in large amounts), Hibiscus (in excess), and any 'labor-inducing' herbs." }
    ]
  },
  {
    food: "chocolate",
    safe: true,
    title: "Chocolate: A Sweet Pregnancy Treat?",
    metaTitle: "Is Chocolate Safe During Pregnancy? Benefits & Caffeine | MomCalc",
    metaDesc: "Indulge your cravings! Learn why chocolate is safe for pregnancy, the benefits for blood pressure, and how to manage caffeine and sugar intake.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Pregnancy and chocolate are a classic pairing. Whether it's a late-night craving or a small daily treat, chocolate can actually offer some surprising benefits for your health—as long as you keep an eye on the extras.</p>",
    safetyVerdict: "Chocolate is perfectly safe and potentially beneficial during pregnancy. The main considerations are the caffeine content (especially in dark chocolate) and the added sugar and fat found in many commercial varieties.",
    medicalInsights: "Dark chocolate contains flavonoids, which are antioxidants that can help improve blood flow and lower blood pressure. Some studies have even suggested that moderate chocolate consumption might reduce the risk of preeclampsia. However, it's important to remember that dark chocolate also contains caffeine (about 12-20mg per ounce). While this is much lower than coffee, it contributes to your daily 200mg limit.",
    risksAndBenefits: ["Flavonoids improve blood flow", "May reduce risk of preeclampsia", "Mood-boosting properties", "Caffeine contribution", "High in empty calories/sugar"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose dark chocolate</strong> — Dark chocolate (70% cocoa or higher) has more beneficial antioxidants and less sugar than milk or white chocolate." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Portion your treats</strong> — Enjoy a square or two rather than an entire bar to avoid excessive sugar intake, which can increase the risk of gestational diabetes." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Watch for heartburn</strong> — Chocolate is a common trigger for acid reflux and heartburn, which are already prevalent during pregnancy." }
    ],
    alternatives: "Cocoa powder in smoothies, fresh fruit dipped in dark chocolate, or a small cup of hot cocoa.",
    faqs: [
      { q: "Does dark chocolate have more caffeine than milk chocolate?", a: "Yes. The higher the cocoa content, the more caffeine. However, even dark chocolate is relatively low compared to coffee." },
      { q: "Can I eat white chocolate?", a: "Yes, but it contains no actual cocoa solids (meaning no antioxidants) and is very high in sugar and fat. It's safe, but less nutritious than dark chocolate." },
      { q: "Is chocolate linked to baby's mood?", a: "Some interesting research suggests that mothers who ate chocolate daily reported having 'happier' and more active babies at six months, likely due to the mood-boosting chemicals in chocolate." }
    ]
  },
  {
    food: "energy-drinks",
    safe: false,
    title: "Energy Drinks and Stimulants",
    metaTitle: "Energy Drinks During Pregnancy: Safety & Risks | MomCalc",
    metaDesc: "Why energy drinks are high-risk during pregnancy. Learn about excessive caffeine, taurine, and other stimulants that can affect your baby.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">The exhaustion of the first and third trimesters can make an energy drink seem like a quick fix. But behind the bright cans and promises of 'focus' lies a combination of stimulants that are not designed for a developing pregnancy.</p>",
    safetyVerdict: "Most energy drinks are considered unsafe during pregnancy. They often contain excessive amounts of caffeine, along with herbal stimulants and additives like taurine and guarana that have not been proven safe for fetal development.",
    medicalInsights: "The primary danger is the unpredictable amount of caffeine, which can often exceed 200mg or 300mg in a single serving. Furthermore, ingredients like guarana are actually concentrated forms of caffeine that aren't always fully accounted for on the label. High doses of stimulants can cause heart palpitations in the mother and increase fetal heart rate, potentially leading to low birth weight or other developmental issues.",
    risksAndBenefits: ["Excessive caffeine levels", "Presence of unstudied herbal stimulants", "High sugar content causing crashes", "Increased risk of heart palpitations", "Disruption of maternal sleep patterns"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Read labels carefully</strong> — If you must have one, check the total caffeine count and avoid any 'energy blends' containing unstudied herbs." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Address the root cause of fatigue</strong> — Pregnancy exhaustion is often due to iron deficiency or dehydration. Focus on sleep and hydration instead of caffeine." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid 'sugar-free' varieties</strong> — Many sugar-free energy drinks use artificial sweeteners that some experts suggest should be limited during pregnancy." }
    ],
    alternatives: "A small cup of coffee, green tea, or a vitamin-rich fruit smoothie for a natural energy boost.",
    faqs: [
      { q: "Is taurine safe during pregnancy?", a: "There is very little research on the effects of concentrated taurine (common in energy drinks) on a developing fetus, so doctors generally recommend avoiding it." },
      { q: "What about 'natural' energy drinks?", a: "Even 'natural' energy drinks often use guarana or yerba mate, both of which are high in caffeine and stimulants. Stick to simple, single-ingredient sources." },
      { q: "Can I drink Red Bull while pregnant?", a: "It is not recommended. One small can contains 80mg of caffeine, but the addition of other stimulants and high sugar makes it a poor choice compared to coffee or tea." }
    ]
  },
  {
    food: "honey",
    safe: true,
    title: "Honey and Botulism Concerns",
    metaTitle: "Is Honey Safe During Pregnancy? | MomCalc",
    metaDesc: "Good news: honey is safe for pregnant women! Learn why the botulism risk only applies to infants and how honey can help with pregnancy coughs.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Honey is a natural sweetener with ancient medicinal properties. While parents are famously told never to give honey to babies under one year old, the rules for eating it *during* pregnancy are much more permissive.</p>",
    safetyVerdict: "Honey is perfectly safe to consume during pregnancy. Your adult digestive system is capable of neutralizing the spores that cause botulism before they can harm you or your baby.",
    medicalInsights: "The reason honey is dangerous for infants is that their immature digestive tracts cannot process the botulism spores (Clostridium botulinum) that can sometimes be found in honey. In adults, including pregnant women, the stomach is acidic and mature enough to prevent these spores from germinating and producing toxins. The toxin itself cannot cross the placenta, meaning your baby is protected even if you were to ingest the spores.",
    risksAndBenefits: ["Natural cough suppressant", "Contains trace antioxidants", "Energy-dense simple sugar", "Safe for the baby", "Soothing for pregnancy sore throats"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose pasteurized honey</strong> — While raw honey is generally safe for adults, pasteurized honey has been heat-treated, further reducing the risk of any bacterial contamination." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Use as a natural remedy</strong> — Honey mixed with warm water and lemon is an excellent, safe way to soothe a cough or sore throat when many medications are off-limits." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Watch your blood sugar</strong> — If you have gestational diabetes, remember that honey is still a sugar and will impact your glucose levels." }
    ],
    alternatives: "Maple syrup, agave nectar, or fresh fruit for sweetness.",
    faqs: [
      { q: "Can honey give my baby botulism?", a: "No. The spores cannot survive your digestive tract, and the toxin cannot cross the placenta to reach your baby." },
      { q: "Is raw honey better than pasteurized?", a: "Raw honey has more trace nutrients, but for pregnancy, pasteurized honey is the safer choice to avoid any rare instances of foodborne illness." },
      { q: "Can I use honey to treat pregnancy allergies?", a: "Some people find that local honey helps with seasonal allergies, though there is more anecdotal evidence than scientific proof for this." }
    ]
  },
  {
    food: "mayo",
    safe: true,
    title: "Mayonnaise and Raw Egg Safety",
    metaTitle: "Is Mayonnaise Safe During Pregnancy? Store-Bought vs. Homemade | MomCalc",
    metaDesc: "Can you eat mayo while pregnant? Learn why store-bought mayo is safe and why you should avoid homemade versions made with raw eggs.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">From potato salad to turkey sandwiches, mayo is a kitchen staple. The concern for pregnant women stems from the fact that traditional mayo is made with raw eggs—but the answer depends entirely on where your mayo comes from.</p>",
    safetyVerdict: "Store-bought, commercial mayonnaise is perfectly safe for pregnancy because it is made with pasteurized eggs. Homemade mayonnaise should be avoided unless it is made with pasteurized-in-the-shell eggs.",
    medicalInsights: "The primary risk with mayonnaise is Salmonella, which can be present in raw eggs. Commercial manufacturers (like Hellmann's or Kraft) use pasteurized eggs and add acids like vinegar or lemon juice, which create an environment that inhibits bacterial growth. Homemade versions often use raw, unpasteurized yolks and may not reach the acidity level required for safety, posing a significant risk of food poisoning.",
    risksAndBenefits: ["Commercial varieties are pasteurized", "Safe source of healthy fats", "Homemade versions carry Salmonella risk", "Adds flavor to healthy salads", "Provides Vitamin E"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Check for 'Pasteurized'</strong> — Almost all major commercial mayo brands are pasteurized. You can verify this by checking the ingredient list for 'pasteurized egg yolks'." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Refrigerate immediately</strong> — Even though commercial mayo is safe, it must be kept refrigerated once opened to prevent the growth of other bacteria." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid mayo at picnics</strong> — Be cautious of mayo-based salads (potato, macaroni) that have been sitting out at room temperature for more than 2 hours." }
    ],
    alternatives: "Greek yogurt, mashed avocado, or vegan mayo (which contains no eggs at all).",
    faqs: [
      { q: "Is Aioli safe during pregnancy?", a: "Often not. Traditional restaurant aioli is frequently made from scratch with raw eggs. Always ask if the aioli is pasteurized before ordering." },
      { q: "Can I eat mayo past the expiration date?", a: "No. While the acidity helps, pregnancy is not the time to risk eating expired condiments. Follow 'best by' dates strictly." },
      { q: "What about 'light' mayo?", a: "Light mayo is just as safe as regular mayo, as it also uses pasteurized eggs. It just has fewer calories and fat." }
    ]
  },
  {
    food: "mushrooms",
    safe: true,
    title: "Mushrooms: Fungi and Pregnancy",
    metaTitle: "Safe Mushrooms During Pregnancy: Cooking & Benefits | MomCalc",
    metaDesc: "Mushrooms are a great source of B-vitamins for pregnancy. Learn which varieties are safe, why you must cook them, and which to avoid.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Mushrooms offer a unique, savory 'umami' flavor and a wealth of nutrients. While most common culinary mushrooms are a fantastic addition to your diet, there are specific rules about how to prepare them safely during pregnancy.</p>",
    safetyVerdict: "Cooked culinary mushrooms (button, cremini, portobello, shiitake) are safe and nutritious. Raw mushrooms and wild-foraged mushrooms should be avoided.",
    medicalInsights: "Raw mushrooms contain small amounts of agaritine, a naturally occurring toxin that is destroyed by cooking. Furthermore, mushrooms grow in soil and can harbor bacteria or parasites if not washed and heated thoroughly. Wild mushrooms are particularly dangerous because of the high risk of misidentification, which can lead to severe poisoning or even death. Stick to store-bought varieties that are clearly labeled.",
    risksAndBenefits: ["Rich in B-vitamins (Riboflavin, Niacin)", "Rare plant source of Vitamin D", "Supports baby's bone development", "Raw mushrooms contain minor toxins", "Wild mushrooms carry poisoning risk"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Always cook thoroughly</strong> — Sautéing, roasting, or boiling mushrooms ensures that any toxins and bacteria are neutralized." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Wash before cooking</strong> — Gently wipe or rinse mushrooms to remove any lingering soil, which can contain Toxoplasmosis spores." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Never eat wild mushrooms</strong> — Even if you think you know the species, the risk of error is too high during pregnancy. Stick to commercially grown varieties." }
    ],
    alternatives: "Tofu for texture, roasted eggplant, or sun-dried tomatoes for savory flavor.",
    faqs: [
      { q: "Can I eat mushrooms in a salad?", a: "Only if they have been cooked first. Raw mushrooms in salads are less digestible and carry a higher risk of bacterial contamination." },
      { q: "Are medicinal mushrooms (Reishi, Lion's Mane) safe?", a: "There is insufficient research on the safety of medicinal mushroom extracts and supplements during pregnancy. Consult your doctor before using them." },
      { q: "Do mushrooms help with pregnancy fatigue?", a: "Yes! Their high B-vitamin content helps your body convert food into energy more efficiently." }
    ]
  },
  {
    food: "papaya",
    safe: false,
    title: "Papaya: Ripe vs. Unripe",
    metaTitle: "Can I Eat Papaya While Pregnant? Ripe vs. Unripe | MomCalc",
    metaDesc: "The safety of papaya depends on its ripeness. Learn why unripe papaya is dangerous for pregnancy and why fully ripe papaya is a healthy choice.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">Papaya is a tropical fruit known for its vibrant color and digestive enzymes. In many cultures, it is the subject of pregnancy folk-wisdom—and in this case, the traditional warnings are backed by modern science.</p>",
    safetyVerdict: "Fully ripe papaya (bright yellow/orange skin) is safe and healthy. Unripe or semi-ripe papaya (green skin) must be strictly avoided as it contains a latex substance that can trigger uterine contractions.",
    medicalInsights: "Unripe papaya is rich in a concentrated latex that contains papain and chymopapain. These substances can act like prostaglandins and oxytocin—hormones that stimulate labor. This can lead to uterine contractions, spotting, or even miscarriage in early pregnancy. As the fruit ripens, the latex disappears, leaving behind a fruit that is high in Vitamins A, C, and fiber, which are beneficial for pregnancy.",
    risksAndBenefits: ["Unripe latex can trigger labor", "Ripe papaya is high in Vitamin C", "Aids in pregnancy digestion", "Supports baby's vision development", "Unripe variety may cause spotting"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Only eat fully ripe fruit</strong> — Ensure the skin is completely yellow or orange with no green patches, and the fruit is soft to the touch." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Remove the seeds</strong> — While the seeds aren't necessarily toxic, they are not recommended during pregnancy and should be discarded." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid green papaya salad</strong> — Som Tum and other green papaya dishes are made with the dangerous unripe variety and should be avoided entirely." }
    ],
    alternatives: "Mango, cantaloupe, or peaches for a similar tropical flavor and texture.",
    faqs: [
      { q: "What happens if I eat a little green papaya?", a: "If you've eaten a small amount, don't panic. Monitor for any cramping or spotting and contact your doctor if you experience symptoms." },
      { q: "Is papaya juice safe?", a: "Only if it is made from fully ripe fruit and has been pasteurized. Fresh-squeezed juice at a market may contain unripe fruit latex." },
      { q: "Does ripe papaya help with heartburn?", a: "Yes, the natural enzymes in ripe papaya (in small amounts) can actually aid digestion and reduce pregnancy-related indigestion." }
    ]
  },
  {
    food: "peanuts",
    safe: true,
    title: "Peanuts and Allergy Prevention",
    metaTitle: "Eating Peanuts During Pregnancy: New Safety Advice | MomCalc",
    metaDesc: "The advice on peanuts has changed! Learn why eating peanuts during pregnancy might actually help prevent allergies in your baby.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">For years, pregnant women were told to avoid peanuts to prevent their babies from developing allergies. However, groundbreaking new research has completely flipped this advice on its head.</p>",
    safetyVerdict: "Unless you have a peanut allergy yourself, peanuts are safe and highly recommended during pregnancy. Current evidence suggests that early exposure in the womb may actually lower the risk of your baby developing a peanut allergy.",
    medicalInsights: "Large-scale studies have shown that there is no link between a mother eating peanuts and her child developing an allergy. In fact, many experts now believe that exposing the baby's developing immune system to peanut proteins through the placenta can build tolerance. Peanuts are also an excellent source of protein, healthy fats, and folate, which is critical for preventing neural tube defects.",
    risksAndBenefits: ["May prevent future peanut allergies", "Excellent source of plant-based protein", "High in folate (B9) for baby's spine", "Contains healthy monounsaturated fats", "Risk of choking (always chew thoroughly)"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Enjoy in moderation</strong> — Peanuts are calorie-dense, so a handful a day is a perfect snack size." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Watch for added salt</strong> — Choose unsalted or lightly salted varieties to avoid contributing to pregnancy swelling (edema)." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Verify with your doctor</strong> — If you have a strong family history of severe allergies, mention it to your doctor, although the current general advice remains favorable." }
    ],
    alternatives: "Almonds, walnuts, or sunflower seeds for similar nutritional benefits.",
    faqs: [
      { q: "Will my baby get an allergy if I eat peanuts?", a: "Current research suggests the opposite: eating peanuts may actually reduce the chance of your baby developing an allergy." },
      { q: "Is peanut butter safe?", a: "Yes! Peanut butter is a safe, high-protein snack. Just check the label for added sugars and hydrogenated oils." },
      { q: "What if I have a mild nut sensitivity?", a: "If you have any history of allergic reactions, it's best to avoid peanuts and consult an allergist, as pregnancy can change your body's immune response." }
    ]
  },
  {
    food: "pineapple",
    safe: true,
    title: "Pineapple and Bromelain Myth",
    metaTitle: "Is Pineapple Safe During Pregnancy? Myths & Facts | MomCalc",
    metaDesc: "Does pineapple cause labor? We debunk the myths about bromelain and explain why pineapple is a safe, Vitamin C-rich treat for pregnancy.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Pineapple is often at the center of pregnancy myths, with many claiming it can 'induce labor.' While there is a grain of truth to the science behind it, the reality is much less dramatic for your average fruit salad.</p>",
    safetyVerdict: "Pineapple is safe and healthy during pregnancy. The amount of the enzyme 'bromelain' found in a normal serving of pineapple is far too low to have any effect on the uterus or labor.",
    medicalInsights: "Bromelain is an enzyme that can break down proteins and, in very high concentrations (like in supplement form), might soften the cervix. However, a pregnant woman would have to eat between 7 and 10 whole pineapples in one sitting to reach those levels. In normal amounts, pineapple provides a massive boost of Vitamin C, which helps your body absorb iron and supports your immune system, along with manganese for bone health.",
    risksAndBenefits: ["Massive boost of Vitamin C", "Aids in iron absorption", "Contains fiber for digestion", "Acidity may trigger heartburn", "Bromelain is negligible in food form"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Enjoy fresh or canned</strong> — Both are safe. Canned pineapple has even lower bromelain levels because the heating process during canning destroys the enzyme." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Watch for heartburn</strong> — Because pineapple is highly acidic, it can worsen pregnancy-related acid reflux. Eat it in small amounts if you're prone to heartburn." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid bromelain supplements</strong> — While the fruit is safe, concentrated bromelain tablets are not recommended during pregnancy." }
    ],
    alternatives: "Oranges, strawberries, or kiwi for similar Vitamin C benefits with less acidity.",
    faqs: [
      { q: "Can pineapple cause a miscarriage?", a: "No. There is no scientific evidence that eating pineapple in normal food amounts leads to miscarriage or preterm labor." },
      { q: "Does pineapple help induce labor?", a: "No. While often used as a 'natural' induction method, it is not scientifically effective in the amounts a human can safely eat." },
      { q: "Is pineapple core safe?", a: "Yes, though it is much tougher and has a higher concentration of bromelain than the flesh. Most people discard it for texture reasons." }
    ]
  },
  {
    food: "spicy-food",
    safe: true,
    title: "Spicy Foods and Digestion",
    metaTitle: "Eating Spicy Food While Pregnant: Myths vs. Reality | MomCalc",
    metaDesc: "Craving heat? Spicy food is safe for your baby, but it might not be kind to your stomach. Learn about heartburn, myths, and safe spicy eating.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">If you're suddenly craving hot sauce on everything, you're not alone. Many women find that their taste buds change during pregnancy, leading them to crave bolder, spicier flavors.</p>",
    safetyVerdict: "Spicy food is 100% safe for your baby. Capsaicin (the compound that makes food hot) does not cross the placenta and cannot harm the fetus. The only person it might bother is you!",
    medicalInsights: "The primary 'risk' of spicy food during pregnancy is discomfort for the mother. As your pregnancy progresses, the hormone progesterone relaxes the valve at the top of your stomach, and your growing uterus pushes your stomach upward. This makes you much more susceptible to heartburn and acid reflux, which spicy foods can aggressively trigger. However, your baby is perfectly insulated in the amniotic sac and will not 'feel the burn'.",
    risksAndBenefits: ["Safe for baby's development", "May broaden baby's future palate", "Significant trigger for heartburn", "Can worsen pregnancy indigestion", "No risk of triggering labor"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Know your limits</strong> — If you aren't used to spicy food, start slow. Pregnancy is not the best time to try a 'ghost pepper' challenge." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Keep antacids handy</strong> — If you enjoy spicy meals, be prepared for the likely heartburn that follows. Check with your doctor which over-the-counter antacids are safe for you." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid before bed</strong> — To minimize nighttime reflux, try to eat your spiciest meals for lunch rather than a late dinner." }
    ],
    alternatives: "Mild salsa, ginger-based heat, or flavorful herbs like cilantro and basil to add depth without the burn.",
    faqs: [
      { q: "Can spicy food induce labor?", a: "No. While it's a popular old wives' tale, there is no medical evidence that spicy food triggers contractions or labor." },
      { q: "Does spicy food affect the baby's eyes?", a: "No. This is an old myth with no basis in biology. The baby is completely protected from the heat of the spices." },
      { q: "Can the baby taste the spices?", a: "Yes! Some studies suggest that strong flavors like garlic, vanilla, and various spices can subtly flavor the amniotic fluid, which may influence your baby's taste preferences after they are born." }
    ]
  },
  {
    food: "yogurt",
    safe: true,
    title: "Yogurt and Probiotics",
    metaTitle: "Is Yogurt Safe During Pregnancy? Benefits & Probiotics | MomCalc",
    metaDesc: "Yogurt is a pregnancy superfood! Learn about the benefits of calcium, protein, and probiotics for your digestive health and baby's growth.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Yogurt is the ultimate 'versatile' pregnancy food. Whether it's a quick breakfast or a creamy snack, it provides a massive hit of calcium and protein that your body is currently using as building blocks for a new human being.</p>",
    safetyVerdict: "Yogurt is safe and highly beneficial during pregnancy, provided it is made from pasteurized milk. The probiotics in yogurt can also help manage common pregnancy issues like bloating and constipation.",
    medicalInsights: "Your baby needs a significant amount of calcium to build their skeleton, and if you don't consume enough, your body will actually 'steal' calcium from your own bones to give to the baby. Yogurt is an excellent source of this calcium. Additionally, the 'live active cultures' (probiotics) found in yogurt help maintain a healthy balance of bacteria in your gut and vagina, which can potentially reduce the risk of yeast infections and improve overall digestion.",
    risksAndBenefits: ["High in calcium for baby's bones", "Rich in protein for tissue growth", "Probiotics aid in digestion", "Reduces risk of yeast infections", "Provides essential Iodine"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose pasteurized</strong> — As with all dairy, ensure the yogurt is made from pasteurized milk to avoid any risk of Listeria." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Opt for low-sugar varieties</strong> — Many flavored yogurts are packed with sugar. Plain Greek yogurt with fresh fruit is a much healthier choice for managing gestational diabetes risk." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Watch for 'Raw' labels</strong> — Be careful at artisanal dairies or farm stands that might sell raw, unpasteurized yogurt." }
    ],
    alternatives: "Kefir (a probiotic drink), cottage cheese, or fortified plant-based yogurts (soy, almond).",
    faqs: [
      { q: "Is Greek yogurt better than regular yogurt?", a: "Greek yogurt has significantly more protein and less sugar than regular yogurt, making it an excellent choice for keeping you full and supporting baby's growth." },
      { q: "Can I eat yogurt every day?", a: "Yes! 1-2 servings of yogurt a day is a great way to meet your daily calcium requirements during pregnancy." },
      { q: "Are the probiotics safe for the baby?", a: "Yes. Probiotics are safe and beneficial for both you and your baby, supporting a healthy immune system and digestive tract." }
    ]
  },
  {
    food: "alcohol",
    safe: false,
    title: "Alcohol and Pregnancy",
    metaTitle: "Is Any Amount of Alcohol Safe During Pregnancy? | MomCalc",
    metaDesc: "The 'Zero Tolerance' rule for alcohol during pregnancy. Learn about the risks of FASD and why experts recommend avoiding all alcoholic beverages.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">It is one of the most consistent pieces of medical advice globally: there is no known safe amount, no safe type, and no safe time to drink alcohol during pregnancy. The 'Zero Tolerance' rule is designed to protect your baby's developing brain during its most vulnerable stages.</p>",
    safetyVerdict: "Alcohol should be strictly avoided throughout pregnancy. It is a known teratogen that crosses the placenta and can cause permanent physical and cognitive damage to the developing fetus.",
    medicalInsights: "When you drink, alcohol passes from your blood through the placenta to the baby. A baby's liver is the last organ to mature and cannot process alcohol as your liver does. This leads to high concentrations of alcohol in the baby's system, which can interfere with the delivery of oxygen and nutrients to developing tissues. The resulting condition, Fetal Alcohol Spectrum Disorders (FASD), can include physical deformities, intellectual disabilities, and behavioral problems that last a lifetime.",
    risksAndBenefits: ["Risk of Fetal Alcohol Syndrome (FAS)", "Increased risk of miscarriage and stillbirth", "Potential for low birth weight", "Interference with brain development", "Risk of premature birth"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Switch to Mocktails</strong> — Enjoy sparkling water with lime, ginger beer, or alcohol-free versions of your favorite drinks for a similar social experience." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Read labels on 'Non-Alcoholic' beer</strong> — Many 'non-alcoholic' drinks still contain up to 0.5% ABV. Look for '0.0%' labels to be absolutely certain." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid alcohol in cooking</strong> — While some alcohol 'burns off,' significant amounts can remain in sauces and stews unless simmered for long periods (over 2 hours)." }
    ],
    alternatives: "Sparkling cider, kombucha (check for alcohol content), fruit-infused water, or herbal infusions.",
    faqs: [
      { q: "Is a single glass of wine okay in the third trimester?", a: "No. Brain development continues throughout the entire pregnancy, and there is no evidence that alcohol is 'safer' at any specific stage." },
      { q: "What if I drank before I knew I was pregnant?", a: "Many women do. The best course of action is to stop immediately upon learning you are pregnant. Most babies will still be born healthy, but you should discuss the exposure with your doctor." },
      { q: "Can alcohol in skincare be harmful?", a: "Topical alcohol in lotions or sanitizers is not absorbed into the bloodstream in significant amounts and is considered safe for use during pregnancy." }
    ]
  },
  {
    food: "soft-serve",
    safe: false,
    title: "Soft Serve Ice Cream",
    metaTitle: "Is Soft Serve Ice Cream Safe During Pregnancy? | MomCalc",
    metaDesc: "Soft serve carries a hidden Listeria risk. Learn why the machines, not the ingredients, are the concern and how to satisfy your cravings safely.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">A swirl of soft serve on a hot day is a classic treat, but for pregnant women, it comes with a footnote of caution. While the ice cream itself is pasteurized, the delivery system is where the safety concerns begin.</p>",
    safetyVerdict: "Soft serve ice cream is generally considered 'medium risk.' While it's made from pasteurized milk, the machines used to dispense it are notoriously difficult to clean and can harbor Listeria bacteria.",
    medicalInsights: "Listeria monocytogenes is unique because it can survive and even grow in cold, damp environments like the internal pipes of a soft-serve machine. If a machine is not cleaned and sanitized correctly every single day, a biofilm can form, contaminating every serving. Since Listeria is particularly dangerous during pregnancy, many obstetricians recommend opting for 'hard' scooped ice cream or pre-packaged treats instead.",
    risksAndBenefits: ["Risk of Listeria from contaminated machines", "Excellent source of calcium", "High in sugar and empty calories", "May cause digestive upset in some", "Cooling relief for morning sickness"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose high-volume shops</strong> — Reputable, busy establishments are more likely to have strict cleaning protocols and high turnover, reducing the risk of bacterial buildup." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Opt for hard ice cream</strong> — Traditional scooped ice cream is kept at much colder temperatures and doesn't rely on complex machinery, making it significantly safer." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid at fairs or festivals</strong> — Mobile food units may have less consistent access to the deep-cleaning equipment required to keep soft-serve machines sterile." }
    ],
    alternatives: "Hard-packed ice cream, frozen yogurt from a reputable shop, or homemade fruit sorbet.",
    faqs: [
      { q: "Is McDonald's soft serve safe?", a: "Large chains like McDonald's usually have automated heat-treatment cycles and strict corporate cleaning standards, making them lower risk than independent stands, but the risk is never zero." },
      { q: "Does the cold kill Listeria?", a: "No. Unlike many other bacteria, Listeria can thrive at refrigerator and soft-serve temperatures." },
      { q: "What about frozen yogurt machines?", a: "The risk is identical to soft-serve ice cream machines, as they use the same dispensing technology." }
    ]
  },
  {
    food: "sprouts",
    safe: false,
    title: "Raw Sprouts and Bacteria",
    metaTitle: "Can I Eat Sprouts While Pregnant? Safety Alert | MomCalc",
    metaDesc: "Raw sprouts are a high-risk food for Salmonella and E. coli. Learn why you should avoid alfalfa and bean sprouts unless they are cooked.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">They look like the ultimate health food—delicate, crunchy, and packed with nutrients. But for a pregnant woman, raw sprouts are one of the most frequent sources of foodborne illness outbreaks.</p>",
    safetyVerdict: "Raw sprouts (including Alfalfa, Clover, Radish, and Mung Bean) should be strictly avoided. They must be cooked thoroughly until steaming hot to be considered safe for pregnancy.",
    medicalInsights: "Bacteria like Salmonella, E. coli, and Listeria can get into sprout seeds through cracks in the shell before the sprouts even grow. Once the seeds start to sprout, they require warm, humid conditions—the exact environment where bacteria thrive. Because the bacteria are often internal or tightly wedged in the structure of the sprout, washing them is not enough to make them safe. Only heat can effectively destroy these pathogens.",
    risksAndBenefits: ["High risk of Salmonella and E. coli", "Concentrated source of vitamins K and C", "Aids in healthy digestion (if cooked)", "Frequent cause of food poisoning outbreaks", "Risk of severe dehydration from illness"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook them thoroughly</strong> — Sauté sprouts in a stir-fry or boil them in soup until they are steaming hot throughout. This kills any bacteria lurking in the seeds." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Check your sandwiches</strong> — When ordering out, explicitly ask for 'no sprouts' on your wraps or sandwiches, as they are a common garnish." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Don't trust 'home-grown'</strong> — Even if you grow them yourself in a clean environment, the seeds themselves may already be contaminated before you start." }
    ],
    alternatives: "Shredded cabbage, thinly sliced carrots, or snap peas for a similar crunch without the risk.",
    faqs: [
      { q: "Are cooked bean sprouts in Pad Thai safe?", a: "Yes, provided the sprouts were cooked at a high temperature until they were steaming hot. Avoid them if they are added as a raw garnish at the end." },
      { q: "Can I just wash the sprouts really well?", a: "No. Bacteria can be inside the sprout or seed, making washing ineffective at removing the risk of infection." },
      { q: "What should I do if I accidentally ate raw sprouts?", a: "Monitor for symptoms like diarrhea, fever, and stomach cramps. Contact your doctor if you experience any signs of food poisoning, especially if accompanied by a high fever." }
    ]
  },
  {
    food: "juice",
    safe: false,
    title: "Unpasteurized Juice and Cider",
    metaTitle: "Is Fresh Squeezed Juice Safe During Pregnancy? | MomCalc",
    metaDesc: "The risks of unpasteurized juice and cider. Learn why 'fresh' isn't always best and how to identify safe, pasteurized beverages.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">Freshly squeezed orange juice or a cup of raw apple cider feels like the height of nutrition. However, without the safety net of pasteurization, these 'natural' drinks can harbor dangerous bacteria.</p>",
    safetyVerdict: "Unpasteurized or 'raw' juice and cider should be avoided during pregnancy. Only drink juice that has been pasteurized or heat-treated to kill harmful pathogens like E. coli.",
    medicalInsights: "Juice is made from raw fruits and vegetables that grow in the ground or on trees where they can come into contact with animal waste or contaminated water. When juice is squeezed, any bacteria on the outside of the fruit can end up in the liquid. Pasteurization—a process of heating the liquid to a specific temperature—is the only way to ensure these bacteria are destroyed. Pregnant women have a higher risk of severe illness from E. coli and Cryptosporidium, which are common in raw juice.",
    risksAndBenefits: ["High risk of E. coli and parasites", "Excellent source of Vitamin C (if pasteurized)", "Helps with hydration", "May contain beneficial antioxidants", "Unpasteurized versions linked to severe outbreaks"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Look for the 'Pasteurized' label</strong> — Most juices sold in grocery store refrigerated sections are pasteurized. Check the fine print on the bottle." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Boil it to be safe</strong> — If you have unpasteurized cider, you can make it safe by bringing it to a rolling boil for at least one minute before drinking it hot or cold." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid 'Fresh-Pressed' at stands</strong> — Be extremely cautious at farmer's markets, orchards, or juice bars where juice is squeezed on-site and not heat-treated." }
    ],
    alternatives: "Commercial pasteurized juices, 100% fruit juice from concentrate, or whole washed fruits.",
    faqs: [
      { q: "Is orange juice from the grocery store safe?", a: "Yes, 98% of juice sold in the US is pasteurized and perfectly safe. The few that aren't must carry a warning label by law." },
      { q: "Can I drink apple cider if it's hot?", a: "Only if it was brought to a boil. Simply 'warming' it is not enough to kill bacteria like E. coli." },
      { q: "What about 'cold-pressed' juice?", a: "Cold-pressed does not mean pasteurized. Many cold-pressed juices use High-Pressure Processing (HPP) which is safe, but always verify on the label that it is treated." }
    ]
  },
  {
    food: "pate",
    safe: false,
    title: "Pâté and Liver Products",
    metaTitle: "Is Pâté Safe During Pregnancy? Vitamin A & Listeria | MomCalc",
    metaDesc: "Why pâté and liver products are high-risk. Learn about the dangers of Listeria in refrigerated spreads and Vitamin A toxicity from liver.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">Pâté is a gourmet delicacy, but for a developing baby, it presents a double threat. Between the risk of bacterial contamination and the extreme levels of certain vitamins, it is a food that requires careful management.</p>",
    safetyVerdict: "All refrigerated pâtés (meat, fish, or vegetable) should be strictly avoided. Additionally, liver and liver-based products should be limited or avoided due to excessively high levels of Vitamin A (retinol).",
    medicalInsights: "Refrigerated pâtés are prone to Listeria contamination because the bacteria can survive and grow even in cold temperatures. Furthermore, liver is exceptionally high in preformed Vitamin A (retinol). While Vitamin A is essential, too much retinol during pregnancy has been linked to serious birth defects in the baby's head, heart, and central nervous system. A single serving of liver can contain several times the daily recommended limit of Vitamin A.",
    risksAndBenefits: ["Highest risk of Listeria in meat spreads", "Risk of Vitamin A (retinol) toxicity", "High in iron and B12", "Can cause congenital abnormalities", "Potential for heavy metal accumulation"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose shelf-stable options</strong> — Canned or jarred pâtés and meat spreads that are shelf-stable (don't need refrigeration until opened) are heat-treated and safer from Listeria." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Limit liver intake</strong> — If you do eat liver, keep it to a very small amount (less than 2oz) no more than once a week to avoid Vitamin A spikes." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid 'refrigerated' spreads</strong> — Steer clear of any meat spreads or pâtés found in the refrigerated deli section of the grocery store." }
    ],
    alternatives: "Cooked ham spreads, canned tuna (in moderation), or hummus for a similar spreadable texture.",
    faqs: [
      { q: "Is vegetable pâté safe?", a: "No. Even vegetable-based pâtés in the refrigerated section carry a Listeria risk and should be avoided." },
      { q: "Why is Vitamin A in liver different from carrots?", a: "Carrots contain beta-carotene, which your body converts to Vitamin A as needed. Liver contains 'preformed' Vitamin A (retinol), which the body cannot easily regulate, leading to potential toxicity." },
      { q: "Can I eat Foie Gras?", a: "No. Foie gras is a type of pâté made from liver and carries the same high risks of Listeria and Vitamin A toxicity." }
    ]
  },
  {
    food: "salads",
    safe: false,
    title: "Pre-packaged Salads and Greens",
    metaTitle: "Are Bagged Salads Safe During Pregnancy? | MomCalc",
    metaDesc: "The truth about pre-packaged salads and Listeria. Learn why 'triple washed' might not be enough and how to prepare greens safely at home.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">They are the ultimate convenience for a healthy diet, but bagged salads are frequently at the center of food safety recalls. When you're eating for two, the convenience of pre-cut greens comes with a significant risk profile.</p>",
    safetyVerdict: "Pre-packaged salads (bagged lettuce, slaws, and prepared salad kits) are considered high-risk for Listeria. It is significantly safer to buy whole heads of lettuce and wash them thoroughly yourself at home.",
    medicalInsights: "Listeria can contaminate greens in the field or during processing in a factory. Because bagged salads are kept in a moist environment and have a long shelf life, Listeria has ample time to multiply. 'Triple-washed' labels provide some protection, but once the leaves are cut, bacteria can migrate into the tissues where washing cannot reach. For pregnant women, a Listeria infection is a medical emergency that can affect the health of the baby.",
    risksAndBenefits: ["Frequent source of Listeria and E. coli", "High in essential Folate and Fiber", "Risk of cross-contamination in factories", "Convenient for meeting veggie goals", "Low calorie and nutrient dense"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Buy whole heads</strong> — Purchase whole romaine, butter lettuce, or kale. They are less processed and easier to clean effectively." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Wash again anyway</strong> — If you must use bagged salad, wash the greens again under cold running water and dry them with a clean paper towel before eating." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid salad bars</strong> — Communal salad bars at grocery stores or restaurants have a high risk of cross-contamination and improper temperature control." }
    ],
    alternatives: "Freshly washed whole lettuce, roasted vegetables, or cooked spinach.",
    faqs: [
      { q: "Is 'triple washed' lettuce safe?", a: "It is safer than unwashed lettuce, but still carries a higher risk than whole heads because the cutting process allows bacteria to enter the leaf." },
      { q: "Can I eat coleslaw?", a: "Commercial coleslaw in jars is usually pasteurized and safe. Fresh coleslaw from a deli or salad bar should be avoided due to the raw cabbage and Listeria risk." },
      { q: "How should I wash my lettuce?", a: "Rinse individual leaves under cold running water. Do not soak them in a sink, as this can spread bacteria from one leaf to another." }
    ]
  },
  {
    food: "mercury-fish",
    safe: false,
    title: "High-Mercury Fish to Avoid",
    metaTitle: "Which Fish are Unsafe During Pregnancy? Mercury Guide | MomCalc",
    metaDesc: "Avoid high-mercury fish like Shark and Swordfish. Learn which species can harm your baby's nervous system and which are safe to eat.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">While seafood is generally a pregnancy superfood, a handful of species carry a hidden danger. These large, long-lived predatory fish act as 'mercury sponges,' accumulating levels that can be toxic to a developing nervous system.</p>",
    safetyVerdict: "Pregnant women should strictly avoid fish with high mercury levels, including Shark, Swordfish, King Mackerel, Tilefish (from the Gulf of Mexico), Marlin, and Orange Roughy.",
    medicalInsights: "Mercury is a heavy metal that occurs naturally in the environment but is also increased by industrial pollution. In the ocean, it turns into methylmercury, which is absorbed by small organisms and then moves up the food chain. The largest, oldest fish eat many smaller fish, concentrating the mercury in their muscles. High levels of methylmercury in a pregnant woman's blood can cross the placenta and interfere with the baby's developing brain and nervous system, potentially leading to delays in walking, talking, and learning.",
    risksAndBenefits: ["Permanent damage to baby's nervous system", "Risk of developmental delays", "High protein source (but unsafe)", "Accumulates in the mother's body", "Potential for cognitive impairments"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Follow the 'Big Four' rule</strong> — Memorize the most common high-mercury fish: Shark, Swordfish, King Mackerel, and Tilefish. These are the ones most likely to appear on restaurant menus." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Check local advisories</strong> — If you eat fish caught by family or friends in local lakes or rivers, check with local health departments for mercury and PCB advisories." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Limit Albacore Tuna</strong> — While not on the 'avoid' list, Albacore (White) tuna has more mercury than Light tuna and should be limited to 6oz per week." }
    ],
    alternatives: "Salmon, Shrimp, Pollock, Catfish, and Canned Light Tuna are all low-mercury 'Best Choices'." ,
    faqs: [
      { q: "What happens if I ate swordfish once?", a: "Don't panic. Mercury builds up over time. A single serving is unlikely to cause harm, but you should avoid it for the remainder of your pregnancy." },
      { q: "Is King Mackerel the same as regular Mackerel?", a: "No. Smaller North Atlantic or Chub Mackerel are low in mercury and safe. Only the large King Mackerel should be avoided." },
      { q: "Does cooking remove mercury?", a: "No. Mercury is bound to the protein in the fish's muscle and cannot be cooked out or cut away." }
    ]
  },
  {
    food: "oysters",
    safe: false,
    title: "Raw Oysters and Shellfish",
    metaTitle: "Can I Eat Raw Oysters While Pregnant? | MomCalc",
    metaDesc: "Raw oysters carry a high risk of Vibrio and Norovirus. Learn why you must cook all shellfish during pregnancy to protect your health.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">They are often considered a luxury, but raw oysters are a high-stakes gamble during pregnancy. These filter-feeders can concentrate pathogens from the water that are far too dangerous for an expectant mother.</p>",
    safetyVerdict: "Raw or undercooked shellfish (Oysters, Clams, Mussels) should be strictly avoided. They must be cooked until their shells open to be considered safe.",
    medicalInsights: "Oysters and other shellfish are filter feeders, meaning they pump large volumes of water through their bodies and trap bacteria and viruses in the process. This includes the Vibrio vulnificus bacteria, which can cause life-threatening infections, and the Norovirus. During pregnancy, your immune system is altered, making you more susceptible to these infections, which can lead to severe dehydration and potential complications for the baby.",
    risksAndBenefits: ["High risk of Vibrio and Norovirus", "Excellent source of Zinc and Iron", "Risk of severe food poisoning", "Supports baby's immune system (if cooked)", "Potential for Listeria contamination"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Cook until they open</strong> — When steaming or boiling, ensure the shells open wide. Discard any that stay closed, as they may not have reached a safe temperature." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Order 'Fried' or 'Grilled'</strong> — If you crave oysters, ensure they are fully fried or grilled until firm. Avoid 'lightly seared' or 'raw on the half-shell'." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Beware of cross-contamination</strong> — Ensure cooked shellfish are not placed on the same ice or plates that held raw shellfish." }
    ],
    alternatives: "Fully cooked shrimp, pasteurized crab meat, or thoroughly cooked scallops.",
    faqs: [
      { q: "Is oyster sauce safe?", a: "Yes. Commercial oyster sauce is highly processed and heat-treated, making it perfectly safe for cooking during pregnancy." },
      { q: "Can I eat clams in linguine?", a: "Yes, as long as the clams were cooked until their shells opened. The high heat of the pasta sauce and steam makes them safe." },
      { q: "Is the 'R' month rule for oysters true?", a: "The old rule (only eat oysters in months with an 'R') was meant to avoid warm-water bacteria, but modern farming and refrigeration make it obsolete. For pregnancy, the only rule is: No Raw Shellfish." }
    ]
  },
  {
    food: "produce",
    safe: true,
    title: "Unwashed Fruits and Vegetables",
    metaTitle: "Washing Produce During Pregnancy: Safety Tips | MomCalc",
    metaDesc: "Why washing fruits and vegetables is critical during pregnancy. Learn how to avoid Toxoplasmosis and E. coli from soil-borne pathogens.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Fruits and vegetables are the foundation of a healthy pregnancy diet. But because they come from the earth, they can bring along uninvited guests like soil-borne parasites that require a simple but vital cleaning routine.</p>",
    safetyVerdict: "Fruits and vegetables are safe and essential, but they must be washed thoroughly under running water before eating, peeling, or cutting. This is critical for preventing Toxoplasmosis and other bacterial infections.",
    medicalInsights: "The primary concern with unwashed produce is Toxoplasma gondii, a parasite that lives in soil where cats have been. If you ingest even a tiny amount of contaminated soil on a piece of fruit, it can cause Toxoplasmosis. While often symptomless for the mother, the parasite can cross the placenta and cause serious issues for the baby's vision and brain development. Additionally, unwashed produce can carry E. coli and Salmonella from irrigation water.",
    risksAndBenefits: ["Essential vitamins and minerals", "Risk of Toxoplasmosis from soil", "Supports baby's growth and development", "High fiber for digestive health", "Potential for E. coli contamination"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Rinse under running water</strong> — Do not soak produce in a sink. The friction of running water is more effective at removing bacteria and soil." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Scrub firm produce</strong> — Use a clean vegetable brush to scrub the skin of melons, cucumbers, and potatoes, even if you plan to peel them." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid soap or detergents</strong> — Fruits and vegetables are porous and can absorb chemicals from dish soap. Use only clean, running water." }
    ],
    alternatives: "Frozen or canned fruits and vegetables are pre-washed and heat-treated, making them excellent, low-risk alternatives.",
    faqs: [
      { q: "Do I need to wash organic produce?", a: "Yes. Organic produce is just as likely to have soil-borne parasites like Toxoplasmosis as conventional produce. Always wash it thoroughly." },
      { q: "Should I wash fruit with a peel (like bananas)?", a: "Yes. Bacteria on the outside of a melon or orange can be transferred to the knife and then onto the fruit you eat when you cut through it." },
      { q: "Can I use a vinegar soak?", a: "While some people use vinegar, the FDA recommends plain running water as the most effective and safest method for cleaning produce." }
    ]
  },
  {
    food: "leftovers",
    safe: true,
    title: "Leftovers and Food Safety",
    metaTitle: "Safe Reheating Rules for Pregnancy | MomCalc",
    metaDesc: "Can you eat leftovers while pregnant? Learn the 165°F reheating rule, storage limits, and how to avoid Listeria in your fridge.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Meal prepping is a lifesaver when pregnancy fatigue hits. But the safety of yesterday's dinner depends entirely on two things: how quickly you cooled it and how hot you reheat it.</p>",
    safetyVerdict: "Leftovers are safe to eat provided they were refrigerated within two hours of cooking and are reheated to an internal temperature of at least 165°F (steaming hot) before serving.",
    medicalInsights: "When food sits at room temperature, it enters the 'Danger Zone' (40°F - 140°F) where bacteria like Salmonella and Listeria can double every 20 minutes. Reheating food until it is 'steaming hot' (165°F) is the only way to kill any bacteria that may have grown during storage. For pregnant women, who are more susceptible to Listeriosis, this reheating step is a vital safety barrier.",
    risksAndBenefits: ["Convenient for managing fatigue", "Reduces food waste", "Risk of bacterial growth if cooled slowly", "Potential for Listeria in long-stored food", "Supports consistent nutrition"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">The Two-Hour Rule</strong> — Never let perishable food sit out for more than two hours. If it's over 90°F outside, reduce that to one hour." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">The 165°F Rule</strong> — Reheat all leftovers in the microwave or oven until they are steaming hot throughout. Use a meat thermometer to check the center." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Follow the 4-Day Limit</strong> — Eat or freeze refrigerated leftovers within 3 to 4 days. When in doubt, throw it out." }
    ],
    alternatives: "Freshly cooked meals, shelf-stable canned foods, or frozen meals that are cooked from scratch.",
    faqs: [
      { q: "Is cold pizza safe?", a: "No. While tempting, cold pizza that has been sitting in the fridge can harbor Listeria. Reheat it until the cheese is bubbling to be safe." },
      { q: "Can I reheat food more than once?", a: "It's best to only reheat food once. Each time food is cooled and reheated, the risk of bacterial growth increases." },
      { q: "How should I store large pots of food?", a: "Divide large amounts of hot food into smaller, shallow containers so they cool faster in the refrigerator." }
    ]
  },
  {
    food: "raspberry-leaf",
    safe: true,
    title: "Raspberry Leaf Tea",
    metaTitle: "Is Raspberry Leaf Tea Safe During Pregnancy? | MomCalc",
    metaDesc: "The benefits and timing of Raspberry Leaf tea. Learn why it is recommended for the third trimester and why you should avoid it in the first.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Often called the 'mother's herb,' Red Raspberry Leaf tea has been used for centuries to support uterine health. But timing is everything with this potent infusion.</p>",
    safetyVerdict: "Raspberry leaf tea is generally safe during the second and third trimesters. However, most midwives and doctors recommend avoiding it during the first trimester due to its potential effect on uterine muscles.",
    medicalInsights: "Red Raspberry Leaf contains an alkaloid called fragarine, which is thought to help tone the muscles of the pelvic area, including the walls of the uterus. While it doesn't 'induce' labor, it may help the uterus contract more efficiently during the second stage of labor. Studies are mixed, but some suggest it can lead to a shorter labor and fewer interventions like forceps or C-sections. It is high in magnesium, potassium, iron, and B vitamins, making it a nutrient-dense choice for late pregnancy.",
    risksAndBenefits: ["Tones uterine muscles for labor", "Rich in Iron and Magnesium", "May shorten the second stage of labor", "Avoid in 1st trimester to prevent early contractions", "May cause Braxton Hicks if started too early"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Start at 32 weeks</strong> — Most experts suggest starting with one cup a day around week 32, gradually increasing to 3 cups by week 37." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Monitor contractions</strong> — If you notice an increase in Braxton Hicks or any spotting after drinking the tea, stop and consult your healthcare provider." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid if planning a VBAC</strong> — Some doctors advise against uterine tonics if you have a previous uterine scar or are planning a VBAC." }
    ],
    alternatives: "Nettle tea (for iron) or Oatstraw tea (for calcium and nervous system support).",
    faqs: [
      { q: "Will raspberry leaf tea induce labor?", a: "No. It is a toner, not an inducer. It prepares the uterus for the work of labor rather than starting it prematurely." },
      { q: "Can I drink it while breastfeeding?", a: "Yes. It is considered safe while nursing and may even help the uterus return to its pre-pregnancy size faster." },
      { q: "Is it the same as raspberry-flavored fruit tea?", a: "No. Raspberry fruit tea is just for flavor. Ensure the label specifically says 'Red Raspberry Leaf' to get the uterine benefits." }
    ]
  },
  {
    food: "ginger-tea",
    safe: true,
    title: "Ginger and Peppermint Tea",
    metaTitle: "Ginger Tea for Morning Sickness: Is it Safe? | MomCalc",
    metaDesc: "The best herbal teas for nausea relief. Learn why Ginger and Peppermint are pregnancy favorites and how to use them effectively.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">When morning sickness strikes, a warm mug of tea can be your best friend. Ginger and Peppermint are the gold standards for natural, soothing relief.</p>",
    safetyVerdict: "Ginger and Peppermint teas are among the safest and most effective herbal remedies for pregnancy-related nausea and digestive upset when consumed in moderate amounts.",
    medicalInsights: "Ginger contains compounds called gingerols and shogaols that act directly on the digestive tract to speed up stomach emptying and reduce the 'queasy' feeling. Clinical trials have shown ginger to be as effective as some over-the-counter anti-nausea medications. Peppermint tea works by relaxing the smooth muscles of the stomach, which can help with gas, bloating, and indigestion (heartburn), though it can sometimes worsen reflux in some women.",
    risksAndBenefits: ["Highly effective for morning sickness", "Reduces gas and bloating", "Natural and caffeine-free", "Safe throughout all trimesters", "May worsen acid reflux in some cases"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Use fresh ginger</strong> — Steep slices of fresh ginger root in hot water for the most potent anti-nausea effect." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Sip slowly</strong> — Drinking too much liquid at once can sometimes trigger nausea. Sip small amounts throughout the day." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Limit to 4 cups a day</strong> — While safe, excessive amounts of ginger can theoretically increase the risk of bleeding, so stick to 1,000mg of ginger root equivalent per day." }
    ],
    alternatives: "Lemon water, ginger ale (check for real ginger), or acupressure wristbands.",
    faqs: [
      { q: "Does peppermint tea help with heartburn?", a: "It's hit or miss. It relaxes the stomach muscles, which helps some, but it also relaxes the esophageal sphincter, which can allow acid to rise in others." },
      { q: "Is it safe in the first trimester?", a: "Yes, this is when ginger tea is most helpful for managing early pregnancy nausea." },
      { q: "Can I use ginger supplements instead?", a: "Yes, but check the dosage with your doctor. Most recommend staying under 1,000mg of ginger root per day." }
    ]
  },
  {
    food: "chamomile-tea",
    safe: false,
    title: "Chamomile Tea Caution",
    metaTitle: "Is Chamomile Tea Safe During Pregnancy? | MomCalc",
    metaDesc: "Why you should be cautious with chamomile tea while pregnant. Learn about the potential risks of uterine stimulation and how to enjoy it safely.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">A cup of chamomile is the universal symbol for relaxation. But during pregnancy, this gentle flower carries some surprising medical footnotes that every mother should know.</p>",
    safetyVerdict: "Chamomile tea is generally considered 'Caution.' While an occasional cup is likely safe, regular or large amounts should be avoided due to its potential to act as a uterine stimulant and its effect on fetal circulation.",
    medicalInsights: "Chamomile contains anti-inflammatory compounds that are excellent for relaxation but can act similarly to NSAIDs (like ibuprofen). In large quantities, these compounds can potentially cause the ductus arteriosus (a vital blood vessel in the baby's heart) to close prematurely. Additionally, some studies suggest that chamomile may stimulate uterine contractions if consumed in high concentrations. Most doctors recommend limiting it to an occasional treat rather than a daily habit.",
    risksAndBenefits: ["Helps with insomnia and anxiety", "Soothes digestive upset", "Potential for uterine stimulation", "Possible effect on fetal heart circulation", "May cause allergic reactions in those sensitive to ragweed"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Limit to one cup</strong> — If you use it for sleep, stick to one weak cup occasionally rather than every night." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid 'medicinal' strengths</strong> — Steer clear of concentrated chamomile extracts or tinctures; stick to standard commercial tea bags." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Consult your doctor</strong> — If you have a history of preterm labor or heart issues, it's best to avoid chamomile entirely." }
    ],
    alternatives: "Lemon balm tea or warm milk with honey for a safe, relaxing bedtime routine.",
    faqs: [
      { q: "Can chamomile cause miscarriage?", a: "There is no evidence that an occasional cup of tea causes miscarriage, but the caution exists to prevent potential uterine stimulation in high doses." },
      { q: "Is it safe in the third trimester?", a: "This is when the caution regarding the baby's heart circulation (ductus arteriosus) is most relevant, so limit intake in the final months." },
      { q: "What about chamomile in lotions?", a: "Topical use of chamomile in skincare is perfectly safe as it is not absorbed into the bloodstream in significant amounts." }
    ]
  },
  {
    food: "hibiscus-tea",
    safe: false,
    title: "Hibiscus Tea: Avoid",
    metaTitle: "Why Hibiscus Tea is Unsafe During Pregnancy | MomCalc",
    metaDesc: "The risks of hibiscus tea during pregnancy. Learn about its potential hormonal effects and why experts recommend avoiding this red herbal tea.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">Known for its vibrant red color and tart flavor, hibiscus is a common ingredient in many herbal blends. However, for a developing baby, it can interfere with the delicate hormonal balance of pregnancy.</p>",
    safetyVerdict: "Hibiscus tea should be avoided during pregnancy. It is known to have 'emmenagogue' properties, meaning it can stimulate blood flow to the uterus and potentially interfere with pregnancy hormones.",
    medicalInsights: "Animal studies have shown that hibiscus extract can delay puberty in offspring and interfere with the implantation of an embryo. In humans, it is thought that hibiscus can affect estrogen levels, which are critical for maintaining a healthy pregnancy. While the data on humans is limited, the potential for uterine stimulation and hormonal disruption makes it a high-risk herbal choice that most obstetricians advise against.",
    risksAndBenefits: ["High risk of uterine stimulation", "May interfere with estrogen levels", "Linked to potential pregnancy complications in studies", "Rich in Vitamin C (but unsafe sources)", "Commonly hidden in 'mixed berry' fruit teas"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Read 'Zinger' tea labels</strong> — Many popular fruit teas (like 'Lemon Zinger' or 'Berry Zinger') use hibiscus as a base for color and tartness. Check the ingredient list carefully." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid Agua de Jamaica</strong> — This popular Mexican hibiscus drink is very concentrated and should be skipped until after delivery." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Wait until postpartum</strong> — Hibiscus is safe and even beneficial after pregnancy for managing blood pressure, but wait until the baby is born." }
    ],
    alternatives: "Rosehip tea (rich in Vitamin C and generally safe) or Rooibos tea.",
    faqs: [
      { q: "I drank a berry tea with hibiscus, should I worry?", a: "A single cup of a blended fruit tea usually contains a small amount of hibiscus. It is unlikely to cause harm, but you should switch to a hibiscus-free blend going forward." },
      { q: "Is hibiscus safe while breastfeeding?", a: "Most experts still recommend caution or avoidance while nursing due to its potential effects on hormones and milk supply." },
      { q: "Does hibiscus cause contractions?", a: "It is traditionally used in some cultures to encourage menstruation, which implies it can stimulate the uterus, though it is not a reliable labor inducer." }
    ]
  },
  {
    food: "folic-acid",
    safe: true,
    title: "Folic Acid & Folate",
    metaTitle: "Folic Acid vs Folate in Pregnancy: Which is Best? | MomCalc",
    metaDesc: "The essential guide to Vitamin B9. Learn why Folic Acid is critical for preventing birth defects and how to get enough for you and your baby.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">It is the single most important nutrient in the first few weeks of life—often before you even know you're pregnant. Folic acid is the primary builder of your baby's neural tube.</p>",
    safetyVerdict: "Folic Acid (the synthetic form) and Folate (the natural form) are essential and safe throughout pregnancy. A daily supplement of 400-800mcg is recommended for all pregnant women.",
    medicalInsights: "Folic acid is a B-vitamin (B9) that is crucial for DNA synthesis and cell division. In the first 28 days of pregnancy, the baby's neural tube—which becomes the brain and spinal cord—closes. Adequate folic acid intake reduces the risk of neural tube defects (NTDs) like spina bifida and anencephaly by up to 70%. While 'folate' is found in foods like spinach and beans, the 'folic acid' in supplements is often more easily absorbed by the body, ensuring you hit the necessary levels.",
    risksAndBenefits: ["Prevents major brain and spine birth defects", "Supports healthy blood production", "Reduces risk of premature birth", "Essential for DNA and cell growth", "Safe and highly recommended"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Take 400-800mcg daily</strong> — Start taking a supplement at least one month before trying to conceive and continue through at least the first trimester." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Eat folate-rich foods</strong> — Supplement your intake with dark leafy greens, citrus fruits, beans, and fortified cereals." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Check for MTHFR</strong> — If you have the MTHFR gene mutation, your doctor may recommend 'Methylfolate' (5-MTHF) instead of standard Folic Acid for better absorption." }
    ],
    alternatives: "Methylfolate (L-5-MTHF) for those who prefer the active form of the vitamin.",
    faqs: [
      { q: "Is 800mcg too much?", a: "No. 800mcg is a standard and very safe dose found in most prenatal vitamins. Some women at high risk for NTDs may be prescribed up to 5mg (5,000mcg) by their doctor." },
      { q: "Can I get enough from food alone?", a: "It is difficult. Because the need is so high and food folate is less stable, medical organizations globally recommend a supplement to be certain of protection." },
      { q: "Does it help with morning sickness?", a: "While it doesn't stop nausea, taking it with a small snack at night can help prevent it from upsetting an empty stomach." }
    ]
  },
  {
    food: "prenatal-vitals",
    safe: true,
    title: "Prenatal Vitamins",
    metaTitle: "Choosing the Best Prenatal Vitamin | MomCalc",
    metaDesc: "Why prenatal vitamins are your pregnancy insurance policy. Learn what to look for on the label and how to manage side effects like nausea.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">Think of your prenatal vitamin as an insurance policy. Even on days when morning sickness makes a balanced diet impossible, these tiny capsules ensure your baby has the building blocks they need.</p>",
    safetyVerdict: "Prenatal vitamins are highly recommended and safe. They are specifically formulated to meet the increased nutritional demands of pregnancy that food alone often cannot satisfy.",
    medicalInsights: "During pregnancy, your blood volume increases by 50%, and your body's demand for iron, calcium, and iodine skyrockets. A standard multivitamin isn't enough; prenatals contain higher levels of folic acid (for the brain) and iron (to prevent anemia). They also typically include iodine for thyroid health and Vitamin D for bone development. Taking a prenatal ensures that if your diet lacks a specific nutrient one day, your body—and your baby—won't suffer a deficiency.",
    risksAndBenefits: ["Bridges nutritional gaps from morning sickness", "Prevents iron-deficiency anemia", "Supports baby's brain and bone growth", "May cause nausea or constipation", "Reduces risk of low birth weight"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Take with food</strong> — To avoid the common 'vitamin nausea,' take your prenatal with your largest meal or just before bed." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Look for DHA</strong> — If your prenatal doesn't include Omega-3 (DHA), consider taking a separate supplement for baby's brain development." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Don't double up</strong> — Never take two prenatals or add a multivitamin on top. Excessive amounts of certain vitamins (like A and D) can be harmful." }
    ],
    alternatives: "Gummy prenatals (often easier on the stomach, but usually lack iron) or liquid prenatals.",
    faqs: [
      { q: "What if the pills make me vomit?", a: "Try switching to a gummy version or taking them at night. If you still can't keep them down, talk to your doctor about individual Folic Acid and Iron supplements instead." },
      { q: "Do I need one with iron?", a: "Most women do, but if your iron levels are high, your doctor may suggest an iron-free version to reduce constipation." },
      { q: "Should I take them while breastfeeding?", a: "Yes. Postnatal or continuing your prenatal vitamins helps replenish your body's stores and ensures your breast milk is nutrient-rich." }
    ]
  },
  {
    food: "omega-3",
    safe: true,
    title: "Omega-3 (DHA/EPA)",
    metaTitle: "DHA for Baby's Brain: Omega-3 Guide | MomCalc",
    metaDesc: "The power of Omega-3 in pregnancy. Learn how DHA builds your baby's brain and eyes, and how to choose a safe, mercury-free supplement.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">About 60% of the human brain is made of fat, and DHA is the primary structural fat in the brain and retina. It is the 'smart fuel' for your baby's development.</p>",
    safetyVerdict: "Omega-3 fatty acids, specifically DHA and EPA, are safe and essential during pregnancy. They are critical for the development of the baby's brain, eyes, and nervous system.",
    medicalInsights: "During the third trimester, the baby's brain undergoes a massive growth spurt, requiring a steady supply of Docosahexaenoic acid (DHA). Since the human body cannot produce significant amounts of DHA, it must come from the mother's diet or supplements. Higher intake of Omega-3s has been linked to better cognitive development, improved attention spans, and a reduced risk of preterm birth and postpartum depression in mothers.",
    risksAndBenefits: ["Crucial for brain and eye development", "Reduces risk of preterm labor", "Supports mother's mood and heart health", "Must be mercury-free and purified", "Can have a 'fishy' aftertaste"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Aim for 200-300mg DHA daily</strong> — Check your supplement label to ensure it contains at least this much DHA, which is the most important component for the baby." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Choose molecularly distilled</strong> — Ensure your fish oil supplement is purified to remove any trace of mercury, PCBs, or heavy metals." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Avoid Cod Liver Oil</strong> — Fish *liver* oils are very high in Vitamin A (retinol), which can be toxic in high doses. Stick to standard fish oil or algae-based DHA." }
    ],
    alternatives: "Algae-based DHA (vegan-friendly and naturally mercury-free) or eating 2-3 servings of low-mercury fish per week.",
    faqs: [
      { q: "Is plant-based Omega-3 (ALA) enough?", a: "No. Flax and chia seeds contain ALA, but the body is very inefficient at converting it to DHA. For pregnancy, a direct DHA source (fish or algae) is much better." },
      { q: "When should I start taking it?", a: "While it's most critical in the second and third trimesters, taking it from the start of pregnancy provides a solid foundation." },
      { q: "Does it help with 'Pregnancy Brain'?", a: "While it's not a cure, maintaining high levels of Omega-3s can support the mother's cognitive function and emotional well-being during and after pregnancy." }
    ]
  },
  {
    food: "iron",
    safe: true,
    title: "Iron Supplements",
    metaTitle: "Managing Iron in Pregnancy: Dosage & Safety | MomCalc",
    metaDesc: "Why your iron needs double during pregnancy. Learn how to prevent anemia, improve absorption, and manage common side effects like constipation.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">During pregnancy, you aren't just eating for two—you're breathing for two. Iron is the vehicle that carries oxygen to your baby, and your demand for it doubles almost overnight.</p>",
    safetyVerdict: "Iron supplements are safe and often necessary during pregnancy. The recommended daily intake increases to 27mg to support the massive increase in maternal blood volume and fetal growth.",
    medicalInsights: "Iron is the core component of hemoglobin, the protein in red blood cells that carries oxygen. If you don't have enough iron, you can develop iron-deficiency anemia, which can lead to extreme fatigue, dizziness, and a higher risk of preterm birth or low birth weight. Because the body's iron stores are often depleted by the end of the second trimester, many doctors recommend a separate iron supplement if your prenatal vitamin doesn't provide enough or if your blood tests show low ferritin.",
    risksAndBenefits: ["Prevents iron-deficiency anemia", "Reduces fatigue and brain fog", "Essential for baby's blood supply", "Can cause constipation or dark stools", "May cause stomach upset if taken on an empty stomach"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Pair with Vitamin C</strong> — Take your iron with a glass of orange juice or a Vitamin C supplement. This significantly increases absorption." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid calcium/caffeine nearby</strong> — Do not take iron within 2 hours of dairy, calcium supplements, or coffee/tea, as they block iron absorption." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Increase fiber and water</strong> — To combat iron-induced constipation, be sure to drink plenty of water and eat high-fiber foods." }
    ],
    alternatives: "Iron-rich foods like lean red meat, spinach, lentils, and pumpkin seeds, or 'gentle' iron supplements (Iron Bisglycinate).",
    faqs: [
      { q: "Why are my stools dark?", a: "This is a normal and harmless side effect of iron supplements. It's just unabsorbed iron leaving your body." },
      { q: "Can I take iron if I'm not anemic?", a: "Yes, 27mg is the daily requirement for all pregnant women to *prevent* anemia. However, do not take high 'therapeutic' doses unless directed by your doctor." },
      { q: "What's the best time to take it?", a: "Iron is best absorbed on an empty stomach, but many women find that causes too much upset. Taking it with a light, non-dairy snack is a good compromise." }
    ]
  },
  {
    food: "vitamin-d",
    safe: true,
    title: "Vitamin D",
    metaTitle: "The Importance of Vitamin D in Pregnancy | MomCalc",
    metaDesc: "Is your Vitamin D level high enough for pregnancy? Learn how the 'sunshine vitamin' builds baby's bones and supports your immune system.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--mint); padding-left: 20px; font-style: italic;\">It's known as the 'sunshine vitamin,' but for many pregnant women, the sun isn't enough. Vitamin D is the master regulator of calcium, ensuring your baby's skeleton develops strong and healthy.</p>",
    safetyVerdict: "Vitamin D is safe and essential during pregnancy. A daily intake of at least 600 IU (though many doctors recommend 1,000-4,000 IU) is vital for bone health and immune function.",
    medicalInsights: "Vitamin D allows your body to absorb calcium. Without it, your body may pull calcium from your own bones to give to the baby, increasing your risk of bone density loss. Emerging research also suggests that adequate Vitamin D levels may reduce the risk of preeclampsia, gestational diabetes, and low birth weight. Many women are deficient in Vitamin D, especially those in northern climates or those with darker skin, making supplementation a key part of pregnancy care.",
    risksAndBenefits: ["Crucial for baby's bone and tooth development", "Supports maternal immune system", "May reduce risk of preeclampsia", "Helps prevent newborn Vitamin D deficiency", "Very safe at recommended doses"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Get your levels tested</strong> — A simple blood test can tell you if you are deficient and need a higher therapeutic dose than what's in your prenatal." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Look for D3 (Cholecalciferol)</strong> — This form is more effective at raising blood levels than Vitamin D2." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Don't exceed 4,000 IU</strong> — Unless specifically directed by your doctor to correct a severe deficiency, do not exceed the upper safety limit of 4,000 IU per day." }
    ],
    alternatives: "Safe sun exposure (15-20 mins), fatty fish (Salmon/Sardines), and fortified milk or egg yolks.",
    faqs: [
      { q: "Is Vitamin D in my prenatal enough?", a: "Many prenatals only contain 400-600 IU. Depending on your location and lifestyle, your doctor may suggest an additional supplement to reach 1,000-2,000 IU." },
      { q: "Can Vitamin D deficiency affect the birth?", a: "Severe deficiency has been linked to an increased risk of C-section and complications like preeclampsia, though more research is needed to confirm the exact link." },
      { q: "Is it safe while breastfeeding?", a: "Yes. In fact, if you don't supplement the baby directly, the mother often needs a high dose (6,400 IU) to ensure enough Vitamin D passes through breast milk." }
    ]
  },
  {
    food: "vitamin-a",
    safe: false,
    title: "Vitamin A (Retinol) Warning",
    metaTitle: "Vitamin A in Pregnancy: Safety & Toxicity Risks | MomCalc",
    metaDesc: "Why high doses of Vitamin A are dangerous during pregnancy. Learn the difference between safe Beta-Carotene and risky Retinol.",
    hook: "<p style=\"font-size: 1.18rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px; border-left: 4px solid var(--rose); padding-left: 20px; font-style: italic;\">Vitamin A is essential for your baby's vision and immune system, but it is one of the few vitamins where 'more' can be devastatingly harmful.</p>",
    safetyVerdict: "Vitamin A is essential in small amounts, but high doses of 'preformed' Vitamin A (Retinol) should be strictly avoided. Excess Retinol is a known cause of serious birth defects.",
    medicalInsights: "There are two types of Vitamin A: Beta-Carotene (found in plants like carrots) and Retinol (found in animal products and some supplements). Your body only converts Beta-Carotene into Vitamin A as needed, making it very safe. However, Retinol is absorbed directly and can accumulate to toxic levels. High intake of Retinol—especially from liver, fish liver oils, or high-dose supplements—has been linked to 'Retinoid Embryopathy,' causing severe malformations of the baby's heart, brain, and face.",
    risksAndBenefits: ["Essential for vision and cell growth", "High risk of birth defects from excess Retinol", "Beta-Carotene is the safe, preferred form", "Retinol is stored in the liver for long periods", "Can affect baby's central nervous system"],
    safetyGuidelines: [
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Stick to Beta-Carotene</strong> — Ensure your prenatal vitamin uses Beta-Carotene for at least part of its Vitamin A content." },
      { icon: "✅", text: "<strong style=\"color:var(--text-primary);\">Avoid high-dose supplements</strong> — Do not take any 'skin, hair, and nails' vitamins or high-dose Vitamin A supplements without medical supervision." },
      { icon: "⚠️", text: "<strong style=\"color:var(--text-primary);\">Stop Accutane/Retinols</strong> — Prescription acne medications like Accutane and topical Retin-A are extremely high in Vitamin A and must be stopped before and during pregnancy." }
    ],
    alternatives: "Carrots, sweet potatoes, spinach, and cantaloupe (all provide safe Beta-Carotene).",
    faqs: [
      { q: "Is the Vitamin A in carrots dangerous?", a: "No. You cannot get Vitamin A toxicity from eating vegetables. Your body simply stops converting the carotene once it has enough Vitamin A." },
      { q: "What is the safe daily limit?", a: "Most experts recommend staying below 10,000 IU (3,000 mcg) of preformed Vitamin A per day. Most prenatals contain a safe amount (around 2,500-5,000 IU)." },
      { q: "Should I avoid all Vitamin A?", a: "No. Deficiency is also risky for the baby's development. The goal is a balanced amount, primarily from plant sources and a standard prenatal." }
    ]
  }
];

module.exports = { foodDataRich };

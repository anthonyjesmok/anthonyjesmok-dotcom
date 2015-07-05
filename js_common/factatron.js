var facts = 
["I am a walkie-talkie tinkerer, having programmed and operated commercial Motorola and Kenwood radios.",
"Fried chicken, pizza, and pasta are some of my favorite foods.",
"Because of my allergies to hairy pets, I keep exotic pets. I have owned tarantulas, millipedes, crabs, and a massive pleco fish named Jake. I am totally a dog person though.",
"I have studied a variety of fields, including information science, computer science, business, and the arts.",
"I am a Google Glass Explorer and am using the Mirror API to create applications for Google Glass devices.",
"I have worked on applications for many industries, including startups, non-profit organizations, higher education, and others.",
"One quality of mine that has been noticed by numerous professionals: my attention to detail.",
"While I am primarily a developer, I'm also getting my feet wet with hardware hacking projects and design."];

$("#tidbit").text(facts[Math.floor(Math.random() * facts.length)]);
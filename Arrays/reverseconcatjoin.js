let family = ['Young child', 'Older child', 'mother', 'father', 'grandmother', 'grandfather']
console.log(`Family chronology from young----->old :  ${family}`);
console.log(`\nArrow -> Family chronology from young----->old :  ${family.join('----->')}`);
let reverseChronoFamily = family.reverse()
console.log(`\nFamily chronology reverse from old----->young :  ${reverseChronoFamily}`);

console.log(`\nArrow -> Family chronology reverse from old----->young :  ${reverseChronoFamily.join('----->')}`);

let childrenProfession = ['Software Engineer', 'AI Scientist']

let parentsProfession = ['Doctor', 'Pilot']

console.log(`\nconcatenation version of family profession----> ${childrenProfession.concat(parentsProfession)}`);
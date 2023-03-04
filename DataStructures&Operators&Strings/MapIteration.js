//using forEach or forOf
const myMap = new Map();
myMap.set('question1', 'what is the size of earth?');
myMap.set('question2', 'what is the name of third planet?');
myMap.set('question3', 'what is fastest revolving planet?');

for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

//map to array
const arrayFromMap = [...myMap]

console.log(`array from map ===========`, arrayFromMap);

//array to map
const mapFromArray = new Map(arrayFromMap)

console.log(`map from array ==========`, mapFromArray);
const countryCapitalMap = new Map(Object.entries({

        'Japan': 'Tokyo1',
        'Australia': 'Canberra1',
        'India': 'Delhi',
        'China': 'Beijing',
        'Australia': 'Canberra',
        'China': 'Beijing duplicate',
        'Japan': 'Tokyo'
    }))
    //duplicates will be removed last value will be assigned to key
console.log(`==========map object=========`);
console.log(countryCapitalMap);
//object--->convert----->array using object.entries becos objec tis not iterable but array is
console.log(`========map for each==========`);
countryCapitalMap.forEach((item, index, map) => {
    console.log(index);
    console.log(item);
    console.log(map);
})
console.log(`========for of item in map==========`);
for (const item of countryCapitalMap.entries()) {
    console.log(item);
}
console.log(`============key Of map entries===========`);
for (const [key, ] of countryCapitalMap.entries()) {
    console.log(key);
}

console.log(`============Set===========`);
countryCapitalSet = new Set([
    'apple', 'mango',
    'orange ', 'mango',
    'grapes', 'apple', 'apple'
])

countryCapitalSet.forEach((item) => {
    console.log(item);
})
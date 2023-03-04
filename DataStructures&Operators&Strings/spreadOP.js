const menu = [
    ["Vegetarian", "Non-Vegetarian"],
    ["veg burger", "veg pizza", "paneer kadhai", "malai Kofta", "Jalfrezi"],
    ["chicken burger", "mutton pizza", "Chicken kadhai", "Fish fry", "mutton biryani"]

]

//spread operator on arrays
const foodCategories = [...menu[0]]
const vegetarianItems = [...menu[1]]
const allFoodItems = [...menu[1], ...menu[2]]

console.log('Food Categories-------', foodCategories);

console.log('Food Vegetarian Dishes-------', vegetarianItems);

console.log('Food Veg and Non-Veg Dishes-------', allFoodItems);

const singleFoodItem = [...menu[1][1]]

//spread operator on strings
console.log('Single Food Item String spread OP=======', singleFoodItem);

//spreadop mostly used to pass args in Fn call  add(...nums)
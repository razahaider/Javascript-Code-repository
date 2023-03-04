const restaurant = {
    name: "HiFi restaurant",
    location: "Denmark",
    menu: [
        ["Vegetarian", "Non-Vegetarian"],
        ["veg burger", "veg pizza", "paneer kadhai", "malai Kofta", "Jalfrezi"],
        ["chicken burger", "mutton pizza", "Chicken kadhai", "Fish fry", "mutton biryani"]

    ]
}

const { menu } = restaurant // in object destructuring name should be same as property accessed
console.log(menu);
//default values in object Destr
const { menu2 = ['default menu'] } = restaurant
console.log(menu2);

//mutating existing variables from destructing
let veg_dish = 'french fries'
let nonveg_dish = 'chicken nuggets'

//below code won't work from node run but in browser will run
const fullPlatter = { veg_dish: 'paneer tikka', nonveg_dish: 'chicken tikka' }

//{ veg_dish, nonveg_dish } = fullPlatter // wil not work as declard variables inside {} are read as code block

({ veg_dish, nonveg_dish } = fullPlatter)
console.log(veg_dish, nonveg_dish);
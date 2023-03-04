/*
map - has, set, get,delete, keys() size
set - has, add, delete, clear, size <<unique but not ordered
  arrays, - 
  */
const restaurant = {
    name: "HiFi restaurant",
    location: "Denmark",
    cuisine: "Indian",
    rating: 4.5,
    menu: [
        ["Vegetarian", "Non-Vegetarian"],
        ["veg burger", "veg pizza", "paneer kadhai", "malai Kofta", "Jalfrezi"],
        ["chicken burger", "mutton pizza", "Chicken kadhai", "Fish fry", "mutton biryani"]

    ],
    timings: {
        mon: '9am-5pm',
        tue: '10am-2pm',
        wed: '9am-5pm',
        thu: '9am-5pm',
        fri: '9am-12pm',
        sat: 'closed'
    }
}
const restaurantCrew = {
    Waiters: ['BookerT', 'Scotty', 'James', 'Robert', 'Eugene'],
    Managers: ['Chris Hemsworth', 'Christian Bale', 'Dwayne Johnson', 'John Cena'],
    Chefs: ['Elon Musk', 'Mark Zuckerberg', 'Adani', 'Bill Gates', 'Steve Jobs', 'Harry', 'Grover'],
    Owners: ['Dhoni', 'Kohli', 'Jadeja', 'Dravid'],
    Team1: ['Waiter', 'Waiter', 'Owner', 'Chef', 'Chef', 'Chef', 'Manager'],
    Team2: ['Waiter', 'Owner', 'Chef', 'Chef', 'Manager']
}

const restaurantMapData = new Map(Object.entries(restaurant))
console.log(restaurantMapData.get('name')); //returns only value
console.log(restaurantMapData.set('rating', 7.0)); //returns whole map
console.log(restaurantMapData.set(true, 'isFamilyFriendly')); //returns whole map
console.log(restaurantMapData.set(1, 'Food based business'))

console.log(`restaurantMapData.get('menu')[0].includes('Vegetarian')=======`,
    restaurantMapData.get('menu')[0].includes('Vegetarian'));


if (restaurantMapData.has('menu') && (restaurantMapData.get('menu')[0].includes('Vegetarian'))) {
    console.log('vegetarian dishes available');
}

//special case of key as array

restaurantMapData.set(['Italian', 'Arabic'], 'Options available')
console.log(restaurantMapData.get(['Italian', 'Arabic'])); // undefined
//reason: when set -> ['Italian', 'Arabic'] this array object
// is different than get -> ['Italian', 'Arabic']

//solution:

const otherFoodOptions = ['Italian', 'Arabic']
restaurantMapData.set(otherFoodOptions, 'Options available')
console.log(otherFoodOptions, restaurantMapData.get(otherFoodOptions));
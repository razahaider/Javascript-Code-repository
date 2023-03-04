const restaurant = {
    name: "HiFi restaurant",
    location: "Denmark",
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

console.log(restaurant.timings?.sat)

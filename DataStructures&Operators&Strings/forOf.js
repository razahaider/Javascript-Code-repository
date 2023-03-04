//in forOf we can exit from within at any point

const menu = [
        ["Vegetarian", "Non-Vegetarian"],
        ["veg burger", "veg pizza", "paneer kadhai", "malai Kofta", "Jalfrezi"],
        ["chicken burger", "mutton pizza", "Chicken kadhai", "Fish fry", "mutton biryani"]

    ]
    //prints only entry
for (const item of menu) {
    console.log(item);
    break

}
//prints index and entry
for (const item of menu.entries) {
    console.log(item);
    break

}
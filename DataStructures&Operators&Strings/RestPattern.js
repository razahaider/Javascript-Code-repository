 //REST is used on LHS to capture all the items into one snigle variable
 const restaurant = {
     name: "HiFi restaurant",
     location: "Denmark",
     menu: [
         ["Vegetarian", "Non-Vegetarian"],
         ["veg burger", "veg pizza", "paneer kadhai", "malai Kofta", "Jalfrezi"],
         ["chicken burger", "mutton pizza", "Chicken kadhai", "Fish fry", "mutton biryani"]

     ]
 }


 const { name, ...restOfRestaurantDetails } = restaurant

 console.log('rest with objects---------', restOfRestaurantDetails);

 const [categories, ...restOfMenuDetails] = restaurant.menu


 console.log('Rest with arrays----------', restOfMenuDetails);

 //Rest operator mostly used in function args declaration function(...args){}
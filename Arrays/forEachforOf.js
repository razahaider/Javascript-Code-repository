/*
forEach = HOD function (accepts a callback), cannot exit before complete iterations
forOf = loop from within which we can exit
*/

const fruitBasket = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grapes', 'muskmelon']
console.log(`==============For Each======================`);
fruitBasket.forEach((item) => {
    console.log(`each item in fruitBasket=============`, item);
})

fruitBasket.forEach((item, index) => {
    console.log(`each item with index in fruitBasket=============${index}:`, item);
})

fruitBasket.forEach((item, index, fruitBasket) => {
    console.log(`fruitBasket: ${fruitBasket}==================${index}:`, item);
})
console.log(`==============For Of======================`);
for (fruit of fruitBasket) {

    if (fruit === 'watermelon') {
        console.log(`>>unable to handled heavy fruit exiting<<=======${fruit} `);
        break;
    }

    console.log(`fruit spotted in fruitbasket continuing=====${fruit}`);
}

/*
when Array can be undefined

const fruitBasket = [,'apple', 'orange', 'banana', 'mango', 'watermelon', 'grapes', 'muskmelon']
in this case first element will be printed as undefined and loop will be continued
*/
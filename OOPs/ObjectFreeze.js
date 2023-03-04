const customer = {
    name: 'Harry',
    designation: 'Youtuber',
    age: 24,
    experience: {
        hobby: 'Youtuber',
        google: 'Senior Developer',
        facebook: 'Developer',
        twitter: 'Junior Software Associate'
    }
}

customer.newProp = 'new property'
console.log(`=======customer object=======`, customer);
//newProp: 'new property' will be printed

const freezedObj = Object.freeze(customer)
freezedObj.newProperty = 'new property on freezed obj'
console.log(`=======freezedObj object=======`, freezedObj);
//newProperty = 'new property on freezed obj' NOT added NOT printed
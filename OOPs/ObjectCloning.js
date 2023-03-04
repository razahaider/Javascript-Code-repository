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

//simple cloning: reference pointing to same object

console.log(`=================Simple COPY====================`);
const customerSimpleClone = customer
customerSimpleClone.name = 'Simple Harry' ////will reflect
customerSimpleClone.experience.hobby = 'No Longer youtuber'
console.log(customerSimpleClone); //will reflect
console.log(customer); // will reflect

console.log(`=================Simple COPY END====================`);
//SHALLOW COPY - SpreadOP, Object.assign
//1st level props change reflect in both original/clone
//2nd level props change do not reflect
console.log(`=================SHALLOW COPY====================`);

console.log(`Original>>Customer Object==============`, customer)
const cloneCustomer = {...customer } //2. Object.assign({}, customer) 
console.log(`Clone>>CloneCustomer Object=========`, cloneCustomer);
customer.name = 'Barry' //will not reflect in clone
customer.experience.google = 'Google Dev changed from Original' //reflect in both

cloneCustomer.experience.facebook = 'Facebook Dev changed from Clone' //reflect in both
console.log(`Original>>Customer Object===Changed======customer.name = 'Barry' `);
console.log(`Clone>>CloneCustomer Object=========After Original Changed`, cloneCustomer)

console.log(`Original>>Customer Object==============`, customer)






//DEEP CLONE COPY
//creates separate copies for both original and clone <-> no reflect
console.log(`=================DEEP COPY====================`);
console.log(`Original>>Customer Object==============`, customer)
const cloneCustomer2 = JSON.parse(JSON.stringify(customer))
console.log(`Clone>>CloneCustomer Object=========`, cloneCustomer2);
//customer.name = 'Barry' //will not reflect in clone
customer.experience.google = 'Google Dev changed from Original' //will not reflect in Clone

cloneCustomer2.experience.facebook = 'Facebook Dev changed from Clone' //will not reflect in Original
console.log(`Original>>Customer Object===Changed======customer.name = 'Barry' `);
console.log(`Clone>>CloneCustomer Object=========After Original Changed`, cloneCustomer2)

console.log(`Original>>Customer Object==============`, customer)
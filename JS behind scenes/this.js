'use strict'
/*
1. object
    this --> current object
*/
const fullName = {
    firstName: 'Alex',
    middleName: 'Shawn',
    lastName: 'Riley',

    get getfirstName() {
        return this.firstName //Alex
    }
}

console.log(fullName.getfirstName);
/*
2. function
    this--> undefined
*/
function getMiddleName(fullName) {
    return this //undefined
}
console.log(getMiddleName(fullName));
/*
3. arrow
    this--> outer enclosing function/window object
*/
const getSomeName = () => {
    const lastName = 'some LastName'


    const getLastName = (lasName) => {
        return this //undefined
    }
    getLastName('blah')
    return this //arrow-->window object
}
console.log(getSomeName(fullName));

/*
4. eventListener
    this--> DOM element
*/
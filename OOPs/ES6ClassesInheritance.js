/* Class inheritance using
- extends
- constructor of childClass --> super() first call within constructor
- constructor not needed in child class IF no new child property
- childClass.prototype = Object.create(parentClass.prototype)<-- not needed its automatic set
- can override any parentclass method


*/
class CustomerClass {
    stAmt = 300
    constructor(cName, birthDate) {
        this.cName = cName
        this.birthDate = birthDate
    }

    openSavingsAccount() {
            console.log(`default Saving account opened with ${this.stAmt}$`)
        }
        //automatically added to prototype property of class

    //classes also have getters and setters like  - added to prototype property of class

    get getAge() {
        console.log(`Age of customer is ${2022 - this.birthDate}`)
    }

    //will not be called on new classname creation of object but when we set a property
    set setFullName(cName) {
        console.log(cName)
        if (cName.includes(' ')) {
            this.cName = cName
        } else {
            console.log(`cannot set name as it is missing full name`)
        }
    }
    get getFullName() {
        return this.cName
    }
}
class CorporateCustomer extends CustomerClass {
    constructor(cName, birthDate, designation) {
            super(cName, birthDate)
            this.designation = designation

        }
        //overrides Parent Class's prototype method openSavingsAccount 
    openSavingsAccount(stAmt) {
        this.stAmt = stAmt
        console.log(`default Saving account opened for corporate employee with ${this.stAmt}$`)
    }

    //New method added
    printDetails() {
        console.log(`Corporate ${this.cName} customer with designation ${this.designation} with DOB: ${this.birthDate} is having ${this.stAmt} in his savingsaccount`);
    }

}

const corpEmployee = new CorporateCustomer('Frank', '01-02-1991', 'Senior Engineer')
corpEmployee.openSavingsAccount(10000) //overidden method called - default Saving account opened for corporate employee with 10000$
corpEmployee.printDetails() //Corporate Frank customer with designation Senior Engineer with DOB: 01-02-1991 is having 10000 in his savingsaccount
console.log(corpEmployee.__proto__ == CorporateCustomer.prototype) // true
console.log(corpEmployee.__proto__.__proto__ == CustomerClass.prototype) //true
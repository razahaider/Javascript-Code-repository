// Constructor Function inheritance

//Parent Class
const Customer = function(fullName, email) {
    this.fullName = fullName;
    this.email = email;
};

Customer.prototype.initialiseSavingsAccount = function(amt) {
    this.savingsAccount = 'y'
    if (amt != null) {
        this.savingsAmt = 1000 + amt
    } else { this.savingsAmt = 1000 }
    console.log(`ParentClass========= savings account initialised with ${this.savingsAmt}`)
}

//Child Class
const CorporateEmployee = function(fullName, email, designation, corpAmt) {

    Customer.call(this, fullName, email)
    this.designation = designation
    this.corpAmt = corpAmt
}

//mapping prototype
CorporateEmployee.prototype = Object.create(Customer.prototype)
    // object.__proto-->childclass.prototype --> parentclass.prototype --> Object.prototype

// CorporateEmployee.prototype = Customer.prototype
//This will not create a prototype for child class instead any object created will have __proto__ --> parentclass.prototype-->Object.prototype

//Child Class prototype method accessing all data
CorporateEmployee.prototype.details = function() {
    console.log(`ChildClass============ Name: ${this.fullName}, Email: ${this.email}, designation: ${this.designation}, savingsAmt: ${this.savingsAmt}`);
}

const george = new CorporateEmployee('George Clooney', 'aa@gmail.com', 'Senior Engineer', '13000')

george.initialiseSavingsAccount()
george.details()
console.log(`object-->Child Class proto ======== `, george.__proto__)
console.log(`object-->Child Class proto-->Parent proto ======== `, george.__proto__.__proto__)
console.log(`object-->Child Class proto-->Parent proto--> Object proto ======== `, george.__proto__.__proto__.__proto__)
'use strict'

//Constructor function
const Account = function(userName, accountNumber) {
        this.userName = userName
        this.accountNumber = accountNumber
    }
    // Prototype
Account.prototype.addDefaultFunds = function() {
    console.log('1000$ added by default')
}

// Object instantiation
const savingsAccount = new Account('Harry', '007')


// Prototype access
console.log(savingsAccount.__proto__)
console.log(Account.prototype.isPrototypeOf(savingsAccount)) // true
console.log(savingsAccount.__proto__.isPrototypeOf(Account)) // false

Account.prototype.location = 'India'

console.log(savingsAccount.hasOwnProperty('location')); //false since it comse from Prototype
console.log(savingsAccount.prototype.hasOwnProperty('location')) //true
console.log(Account.prototype.location)
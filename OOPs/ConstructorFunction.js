'use strict'


const Account = function(userName, accountNumber) {
    this.userName = userName
    this.accountNumber = accountNumber
}

//cannot use lambda function to define constructor functions?
const savingsAccount = new Account('Harry', '007')
console.log(savingsAccount)
const currentAccount = new Account('Berry', '123123')
console.log(currentAccount)

//prototype with method
Account.prototype.addDefaultFunds = function() {
    console.log('1000$ added by default')
}

// prototype.method , check prototype content, object.method 

console.log(`Constructor Function- Account prototype:`, Account.prototype)
const savingsAccount2 = new Account('Harry', '007')
console.log(savingsAccount)
savingsAccount.addDefaultFunds()
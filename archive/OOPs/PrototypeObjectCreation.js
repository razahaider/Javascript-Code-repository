'use strict'

const Account = function (userName, accountNumber) {
  this.userName = userName
  this.accountNumber = accountNumber
}
console.log(Account)
console.log(Account.prototype)
Account.prototype.addDefaultFunds = function () {
  console.log('1000$ added by default')
}

console.log(Account.prototype)
const savingsAccount = new Account('Harry', '007')
console.log(savingsAccount)
savingsAccount.addDefaultFunds()

const currentAccount = new Account('Berry', '123123')
console.log(currentAccount)
currentAccount.addDefaultFunds()

console.log(savingsAccount.__proto__)
console.log(Account.prototype.isPrototypeOf(savingsAccount))
console.log(savingsAccount.__proto__.isPrototypeOf(Account))

Account.prototype.location = 'India'

console.log(savingsAccount.location)
console.log(Account.prototype.location)

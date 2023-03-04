//Constructor functions
'use strict'

const Account = function (userName, accountNumber) {
  this.userName = userName
  this.accountNumber = accountNumber
}

//cannot use lambda function to define constructor functions?
const savingsAccount = new Account('Harry', '007')
console.log(savingsAccount)
const currentAccount = new Account('Berry', '123123')
console.log(currentAccount)

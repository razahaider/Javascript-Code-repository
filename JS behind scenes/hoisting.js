 /*example 1. -usage before init
                               Variable
                               -const,let error: Cannot access  before initialization
                               -var no error but undefined
                               */
 /*----------------------------
 const savings = 1000
 if (savings < 10000) {
     // console.log(`If You should have Skills ${skills}`)
     console.log(`try for job in good companies like ${company}`);
     //   console.log(`And Your savings ${savings} are less so Prefer job in field ${goodPayJob}`);
     var skills = ['html', 'css', 'js']
     const goodPayJob = 'Software Engineer'
     let company = 'DBS'

 }
 ---------------------*/
 /*
 example 2. -usage before init
 Functions
 -function: no error
 -var fnName = function() : error fnName is not a function
 -const fnName = function() : error cannot access b4 init
 */

 console.log(getSavingsAmount('Harry', 'Ab1234'));
 console.log(getBranchDetails('moneybank', 'california'));
 //console.log(getAccountDetails('Harry', 'hary123', 'password'));

 function getSavingsAmount(name, accountNumber) {
     if (name.startsWith('H') && accountNumber.endsWith('1234'))
         return 'your Savings Amount is 1234'
 }

 var getAccountDetails = function(name, userName, password) {
     if (name == 'Harry' && userName == 'hary123' && password == 'password') {
         return `username: hary123, accountNumber: Ab1234, bank: MoneyBank`
     }
 }

 const getBranchDetails = function(bankName, location) {
     return `you ${bankName} has branch at ${location} with branchDetails: centerplaza, floor-1, ${location}-2222`
 }
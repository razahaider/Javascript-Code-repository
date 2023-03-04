/*
functions closures
console.dir to see closures
*/


const validateAccountDetails = function(accountDetails) {

    const validName = 'AuthorisedCustomer'
    const validAge = 25
    const validUserName = 'abcd'
    const validPassword =  'password'
    return  validateNameAndAge = function() {
        console.log((accountDetails.name === validName && accountDetails.age === validAge)?' Name Age valid': ' Name Age invalid')
    }

    const validateLoginCredentials = function(){
         return (accountDetails.userName === validUserName && accountDetails.password === validPassword)?' Login Creds valid': 'Login Creds invalid'
   
    }
}
const accountDetails = {
    name: 'AuthorisedCustomer',
    age:25,
    userName:'abcd',
    password: 'password'
}

const validateAccount = validateAccountDetails(accountDetails)
validateAccount(accountDetails);

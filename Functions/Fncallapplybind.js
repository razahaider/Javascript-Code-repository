/*
call method allows to call a method in objA on objB
apply does same thing but takes Array of values as second argument
*/

const citiGroup = {
    name: 'Citi Banking Services',
    bankingId: '123AB',
    accountsDetails: [],
    interestRate: 5,
    openAccount(customerName, customerId, accountType) {
        console.log(`Account opened for - ${customerName} 
        in Bank ${this.name} with customerId - ${customerId}
        with type of account - ${accountType}
        `);
        this.accountsDetails.push({
                customerName: `${customerName}`,
                customerId: `${customerId}`,
                accountType: ` ${accountType}`
            }),
            console.log(`All accounts opened are ====`, this.accountsDetails);

    }
}

const citiIndia = {
    name: 'Citi India bank',
    bankingId: '123INR',
    accountsDetails: [],
    interestRate: 6
}

citiGroup.openAccount('customer1', '123AB', 'savings')
citiGroup.openAccount('customer2', '133fx', 'Forex')
citiGroup.openAccount('customer3', '322cu', 'current')

const openAccount = citiGroup.openAccount
    //since functions are also objects in JS you
    // can return them like this rather than call them to execute

openAccount.call(citiIndia, 'indian customer1', 'cusINR123', 'savings')
    //call() method takes object as first arg, and args to call into that Fn


const customerDetail = ['indian customer2', 'cusINR125', 'Forex']
openAccount.call(citiIndia, ...customerDetail)
    //can spread the args
    //better than apply which takes array as arg
console.log(`Below apply method =================`);
openAccount.apply(citiIndia, customerDetail)

//bind method binds a method to an object

const calcInterestSavings = function(savingsAmount) {
    return savingsAmount * this.interestRate / 100 + savingsAmount
}

const calSavingsIndiaAcc = calcInterestSavings.bind(citiIndia)
console.log(calSavingsIndiaAcc(1000))


const calSavingsIndiaAccInternational = calcInterestSavings.bind(citiGroup)
console.log(calSavingsIndiaAccInternational(1000))
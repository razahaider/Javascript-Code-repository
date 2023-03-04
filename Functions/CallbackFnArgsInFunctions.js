/*
replacing any character within a string

'Hello World This is My First Code'.replace(/o/g)
----/g denotes all occurrence of 'o' character
'Hello World This is My First Code'.replace(/ /g)
---will replace all occurrence of space character
*/

const customerBankAccount = {
    name: "John Doe",
    accountNumber: 1234567890,
    accountType: "savings",
    balance: 1000,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    phone: "555-555-1234",
    accountOpenDate: "2022-01-01",
    isPreferred: true,
    updateSavingsBalance: function(txnAmount) {
        console.log(`Your Savings Account Balance is now: ${this.balance+=txnAmount}`);
    },

    transactMoney: function(txnType, amount, updateSavingsBalance) {
        console.log(`you have ${txnType} ${amount} in your savings account`);
        this.updateSavingsBalance(amount)
    }
}

customerBankAccount.transactMoney('deposit', 100, this.updateSavingsBalance)
    //callback functions pased as args in Fns

customerBankAccount.transactMoney('withdrawal', -60, this.updateSavingsBalance)
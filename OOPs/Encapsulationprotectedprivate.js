//data privacy through private data, methods and protected data/methods
//private data and methods = # prefix
//private variables always need to be declared but not protected
class Account {


    #transactionRecords = []; //private variables always need to be declared but not same with protected
    constructor(name, dob, accountType, pin, currency) {
        this.name = name
        this.dob = dob
        this.accountType = accountType
        this._pin = pin 
        this.currency = currency
            //this.language = navigator.language
        this.#transactionRecords = []
        this.totalAmount = 100;
        console.log(`New Account initialised for customer ${this.name} with DOB ${this.dob} and accounttype ${this.accountType} with currency ${this.currency} and totalamount ${this.totalAmount}`);
    }

    showDetails() {
        console.log(`Your Account Details are :======= customer ${this.name} with DOB ${this.dob}
         and accounttype ${this.accountType} with currency ${this.currency} and totalamount ${this.totalAmount}`);
    }

    deposit(amt) {
        this.totalAmount = this.totalAmount + amt
        this.#transactionRecords.push(amt)
        console.log(`Total Amount ${this.totalAmount} after depositing ${amt}`);
    }
    withdraw(amt) {
        this.deposit(-amt)

        // console.log(`Total Amount ${this.totalAmount} after withdrawing ${amt}`);
    }
    getTransactionHistory() {
        console.log(`Transaction history: ${this.#transactionRecords}`);
    }
    _loanEnabled(value) {
        if (value < 500)
            return true
    }
    requestLoan(loanAmt) {
        if (this._loanEnabled) {
            console.log('Loan is enabled for the amount');
            this.deposit(loanAmt)
        }
    }
}
//to make any data/method protected simply prefix _ to rename it and prevent outside access
//example - _transactionRecords,_pin, _loanEnabled,

const accountDemo = new Account('Harry Potter', '01-03-1995', 'Savings', 4321, 'INR')
accountDemo.deposit(100)
accountDemo.deposit(200)
accountDemo.deposit(500)
accountDemo.withdraw(30)
accountDemo.deposit(90)
accountDemo.getTransactionHistory()
    //console.log(accountDemo.#transactionRecords); private
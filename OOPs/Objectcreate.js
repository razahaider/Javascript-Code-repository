const AccountInfo = {
    defaultAmt: 100,
    showDefaultAmount() {
        console.log(`The default amount in your account is ${this.defaultAmt}`)
    },
    init(accountType, customerName) {
        this.accountType = accountType
        this.customerName = customerName
    },
    showDetails() {
        console.log(
            `Account info is customerName: ${this.customerName} and accountType: ${this.accountType}`
        )
    }
}

const randomObj = Object.create(null)
console.log(`empty Object .create`, randomObj);

const savingsAcc = Object.create(AccountInfo) //creates an object with prototype = (args)
savingsAcc.showDefaultAmount()

console.log(savingsAcc.__proto__ === AccountInfo) //true

savingsAcc.init('current Account', 'Fred Flinstones')
savingsAcc.showDetails()

console.log(savingsAcc.defaultAmt);
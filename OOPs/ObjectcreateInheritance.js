//Inheritance = linking objects via Object.create

//Parent Prototype Object
const AccountInfoProto = {
        defaultAmt: 100,
        showDefaultAmount() {
            console.log(`The default amount in your account is ${this.defaultAmt}`)
        },
        init(birthDate, customerName) {
            this.birthDate = birthDate
            this.customerName = customerName
        },
        showDetails() {
            console.log(
                `Account info is customerName: ${this.customerName} and birthDate: ${this.birthDate}`
            )
        }
    }
    //Child prototype object
const SavingsAccountInfoProto = Object.create(AccountInfoProto) //creates a savingsAccProto object
    //SavingsAccountInfoProto.prototype --> AccountInfoProto.prototype


//init override in child Proto
SavingsAccountInfoProto.init = function(birthDate, customerName, accountType) {
    this.birthDate = birthDate
    this.customerName = customerName
    this.accountType = accountType
}

//showdetails override
SavingsAccountInfoProto.showDetails = function() {
        console.log(
            `Account info is customerName: ${this.customerName} and birthDate: ${this.birthDate} and accountType: ${this.accountType}`
        )
    }
    //linkedobject created from child object as prototype
const savingsAccountObj = Object.create(SavingsAccountInfoProto)

console.log(`linkedobject proto property :`, savingsAccountObj.__proto__);

console.log(`linkedobject proto.proto property :`, savingsAccountObj.__proto__.__proto__);

savingsAccountObj.init('01-01-1991', 'Frankenstein', 'Savings Account') // from child proto overridden
savingsAccountObj.showDetails() // from child proto
savingsAccountObj.showDefaultAmount() // from parent proto
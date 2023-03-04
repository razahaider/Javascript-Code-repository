//need to have constructors always
class CustomerClass {
    stAmt = 300
    constructor(cName, birthDate) {
        this.cName = cName
        this.birthDate = birthDate
    }

    openSavingsAccount() {
            console.log(`default Saving account opened with ${this.stAmt}$`)
        }
        //automatically added to prototype property of class
}


const george = new CustomerClass('George', 1991)

console.log(george)

george.openSavingsAccount()

console.log(george.__proto__ === CustomerClass)

console.log(george.__proto__ === CustomerClass.prototype)

//we can also define prototype properties outside the class manually :=>

CustomerClass.prototype.getAccountInfo = function() {
    console.log(
        `This is your account information    Name: ${this.cName}      birthDate: ${this.birthDate}      savings: ${this.stAmt}$`
    )
}
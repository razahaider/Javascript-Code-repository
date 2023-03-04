class CustomerClass {
    static stAmt = 300
    constructor(cName, birthDate) {
        this.cName = cName
        this.birthDate = birthDate
    }

    static showDefaultAmount() {
        console.log(`default amount from static method is: ${this.stAmt}`)
        console.log(`default amount from static method is: ${this.cName}`)
        console.log(`default amount from static method is: ${this.birthDate}`)
    }
}

const randomCust = new CustomerClass('Randi Zuckerberg', '1992')
console.log(randomCust)

CustomerClass.showDefaultAmount()
const EmployeeClass = class {}

class CustomerClass {
  stAmt = 300
  constructor (cName, birthDate) {
    this.cName = cName
    this.birthDate = birthDate
  }

  openSavingsAccount () {
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

CustomerClass.prototype.getAccountInfo = function () {
  console.log(
    `This is your account information    Name: ${this.cName}      birthDate: ${this.birthDate}      savings: ${this.stAmt}$`
  )
}

/* ----------------setters and getters in Classes --------------- */

class CustomerClass2 {
  stAmt = 300
  constructor (cName, birthDate) {
    this.cName = cName
    this.birthDate = birthDate
  }

  openSavingsAccount () {
    console.log(`default Saving account opened with ${this.stAmt}$`)
  }
  //automatically added to prototype property of class

  //classes also have getters and setters like  - added to prototype property of class

  get getAge () {
    console.log(`Age of customer is ${2022 - this.birthDate}`)
  }

  //will not be called on new classname creation of object but when we set a property
  set setFullName (cName) {
    console.log(cName)
    if (cName.includes(' ')) {
      this.cName = cName
    } else {
      console.log(`cannot set name as it is missing full name`)
    }
  }
  get getFullName () {
    return this.cName
  }
}

const george2 = new CustomerClass2('George', 1991)
//incorrect way to use setter george2.setFullName('abc')
george2.setFullName = 'abc' //correct way to use setter as it is a property
george2.setFullName = 'George Blane'
george2.getAge
console.log(george2.getFullName)
/*
-not hoisted : fns(hoisted) can be used before their declaration but not classes
-1st class citizen : can be passed into fns and returned from functions
- classes are always in strict mode : means variable usage b4 declaration, variable assignment before declaration, functions deletion not allowed
*/

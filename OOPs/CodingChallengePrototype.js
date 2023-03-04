/*
Car --> make, speed
    --> prototype --> accelerate = speed + 10
                  --> brake      = speed - 5
Car 1 : BMW        120 km/h
Car 2 : Mercedes    95 km/h

Car 1 : acc> acc> brake> acc> brake
Car 2: acc> brake> brake> acc> brake
*/

class Car {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed = this.speed + 10
        console.log(`Car: ${this.make} after accelerate speed = ${this.speed} km/hr`)
    }

    brake() {
        this.speed = this.speed - 5
        console.log(`Car: ${this.make} after brake speed = ${this.speed}km/hr`)
    }
}


const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

car1.accelerate()
car1.accelerate()
car1.brake()
car1.accelerate()
car1.brake()


car2.accelerate()
car2.brake()
car2.accelerate()
car2.brake()
car2.brake()
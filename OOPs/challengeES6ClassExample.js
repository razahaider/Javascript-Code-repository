class Car {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }
    get getSpeed() {
        return `${this.speed / 1.6} mi/h is the current speed`
    }
    set setSpeed(speed) {
        this.speed = speed * 1.6
    }
    accelerate() {
        this.speed = this.speed + 10
        console.log(`Car: ${this.make} accelerate speed = ${this.speed} km/hr`)
    }

    brake() {
        this.speed = this.speed - 5
        console.log(`Car: ${this.make} brake speed = ${this.speed}km/hr`)
    }
}

const ford = new Car('Ford', 120)
console.log(ford.getSpeed)
ford.setSpeed = 125 //setter called
console.log(ford.getSpeed)
ford.accelerate()
ford.brake()
ford.accelerate()
ford.accelerate()
console.log(ford.__proto__)
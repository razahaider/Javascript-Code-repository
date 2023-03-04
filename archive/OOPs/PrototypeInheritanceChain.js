const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10
  console.log(`Car: ${this.make} accelerate speed = ${this.speed} km/hr`)
}

Car.prototype.brake = function () {
  this.speed = this.speed - 5
  console.log(`Car: ${this.make} brake speed = ${this.speed}km/hr`)
}

const Car1 = new Car('BMW', 120)
const Car2 = new Car('Mercedes', 95)

Car1.accelerate()
Car2.brake()
Car1.brake()
Car2.accelerate()

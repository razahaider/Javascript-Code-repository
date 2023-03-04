/*
Parent=> Car(make, speed, proto -accelerate[speed+20], brake[-5])

Child --->Electric Car(+charge, proto -chargeBattery(chargeTo)[charge+chargeTo] -override accelerate[speed+20, charge-1%])
    
*/

const Car = function(make, speed) {
    this.make = make
    this.speed = speed

}
Car.prototype.accelerate = function() {
    this.speed = this.speed + 20
    console.log(`${this.make} going at ${this.speed}km/h`)

}
Car.prototype.brake = function() {
    this.speed = this.speed - 5
    console.log(`${this.make} going at ${this.speed}km/h`)

}

const ElectricCar = function(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge

}
ElectricCar.prototype = Object.create(Car.prototype) // without this ElectricCar linkedobject will point to Car class prototype methods

ElectricCar.prototype.chargeBattery = function(chargeTo) {
        this.charge = chargeTo
    }
    //overriding Parent class accelerate
ElectricCar.prototype.accelerate = function() {

    this.speed = this.speed + 20
    this.charge = this.charge - 1
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)

}





const car1 = new ElectricCar('Tesla', 120, 23)
    //car1.chargeBattery(90)

console.log(car1.accelerate())

console.log(car1.brake())

console.log(car1.brake())

console.log(car1.accelerate())

console.log(car1.accelerate())
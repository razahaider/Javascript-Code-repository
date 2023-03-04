

/*
using ES6
Parent class - car - make, speed, accelerate(sp+10), brake (sp-5)
Child Class - ElecCar -charge, accelerate(sp+10, charge-1), chargeBattery(charge+var)

object(Rivian, 120 speed, 23 charge)
do
chaining impl - acc.acc.brake.charge.charge.brake

*/
class Car {
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }
    accelerate() {
        this.speed = this.speed + 10
        console.log(`Car: ${this.make} after accelerate speed = ${this.speed} km/hr`)
        return this
    }

    brake() {
        this.speed = this.speed - 5
        console.log(`Car: ${this.make} after brake speed = ${this.speed}km/hr`)
        return this
    }
}

class ElectricVehicle extends Car{
    #charge;
    constructor(make, speed, charge){
       super(make, speed)
       this.#charge = charge
    }
    accelerate() {
        this.speed +=  10
        this.#charge--
        console.log(`Car: ${this.make} after accelerate speed = ${this.speed} km/hr with current charge ${this.#charge}`)
        return this
    }
    chargeBattery(chargeTo){
       this.#charge = this.#charge + chargeTo
       console.log(`battery discharged with current charge at ${this.#charge}`)
       return this
    }

}

const rivian = new ElectricVehicle('Rivian',120, 23)
rivian.accelerate().chargeBattery(5).chargeBattery(5).chargeBattery(5).brake().brake()
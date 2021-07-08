/*
Every car has name and number, express car price is $1 for each km, special car is $2 for each km.
In each trip, we can see the number and name of the car you ride. And in the end you can see the peice
you need to pay (we  can consider the car we ride was driven for 5 km)
*/
class Car {
    constructor(number, name,price) {
        this.number = number
        this.name = name
    }
    
}
class expressCar extends Car{
    constructor(number, name ) {
        super(number, name)
    }
}
class specialCar extends Car{
    constructor( number, name ) {
        super( number, name )
    }
}
class Trip {
    constructor(car) {
        this.car=car
    }
    start() {
        alert(`This car name: ${this.car.name}, This car number: ${this.car.number}`)
    }
    end() {
        alert(`You need to pay ${this.car.price*5}`)
    }
}

let car1 = new expressCar('1111', 'good')
let trip1 = new Trip(car1)
let car2 = new specialCar('2222', 'bad')
let trip2 = new Trip(car2)
trip1.start()
trip1.end()
trip2.start()
trip2.end()
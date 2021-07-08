class Car {
    constructor(num) {
        this.num=num
    }
}
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}
class Screen {
    show(car, inTime) {
        console.log("number: ", car.num)
        console.log('Time: ', Date.now() -inTime)
    }
}
class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen= new Screen()
        this.carList = {}
    }
    in(car) {
        const info = this.camera.shot(car)
        const i = Math.floor(Math.random() * 100)
        let place = this.floors[0].places[i]
        place.in()
        info.place = place
        this.carList[car.num] = info
    }
    out(car) {
        const info = this.carList[car.num]
        const place = info.place
        place.out()
        this.screen.show(car, info.inTime)
        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} floor has ${floor.emptyPlaceNum()} empty places`
        }).join('\n')
    }
}

class Floor {
    constructor(index, places) {
        this.index = index
        this.places =places || []
    }
    emptyPlaceNum() {
        let rest = 0
        this.places.forEach(p => {
            if (p.empty) {
                rest+=1
            }
        })
        return rest
    }
}

class Place{
    constructor() {
        this.empty=true
    }
    in() {
        this.empty=false
    }
    out() {
        this.empty=true
    }
}


let floors = []
for (let i = 0; i < 3; i++) {
    let places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i+1, places)
}

const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)


console.log('Car 100 in:')
console.log(park.emptyNum())
park.in(car1)
console.log('Car 200 in:')
console.log(park.emptyNum())
park.in(car2)
setTimeout(() => {
    console.log('Car 100 is leave:')
    park.out(car1)
}, 2000)
setTimeout(() => {
    console.log('Car 200 is leave:')
    park.out(car2)
},3000)




setTimeout(() => {
    console.log('Car 300 in:')
    console.log(park.emptyNum())
    park.in(car3)
    console.log('Car 300 is leave:')
    park.out(car3)
},4000)
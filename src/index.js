class Adaptee {
    specificRequest() {
        return '360V plug'
    }
}

class Target {
    constructor() {
        this.Adaptee = new Adaptee()
    }
    request() {
        let info = this.Adaptee.specificRequest()
        return `${info} - adaptee - 220V plug`
    }
}

let target = new Target()
let res = target.request()
console.log(res)
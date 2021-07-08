class JQuery {
    constructor(seletor) {
        //Using slice to make sure the we can make the dom nodes of selector should be a array
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0

        //We put all the node of seletor to this' property
        for (let i = 0; i < len;i++) {
            this[i] = dom[i]
        }
        //Put the amount of seletor node to this' propert call len
        this.length = len

        //Put the seletor node to this' propert call seletor
        this.seletor=seletor || ''
    }
    append(node) {
        
    }
    addClass(name) {
        
    }
    html(data) {
        
    }
}

window.$ = function (selector) {
    //Factory mode
    return new JQuery(selector)
}

let $p=$('p')
console.log($p)
console.log($p.addClass)
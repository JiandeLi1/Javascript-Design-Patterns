function loadImg(src) {
    let promise = new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('Download error!!!')
        }
        img.src=src
    })
    return promise
}

let src = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
let result = loadImg(src)

result.then(img => {
    alert(`width: ${img.width}`)
    return img
}).then(img => {
    alert(`height: ${img.height}`)
}).catch(err => {
    alert(err)
})
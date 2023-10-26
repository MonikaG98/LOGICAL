// 1
let str = "Panache Chinamy"

let revarr = str.split(' ').map((el) => {
    return el.split('').reverse().join('')
})
console.log(revarr.join(' '))


// 2
let cityy = "Panache Chinamy"
let rev = ""
for (let i = 0; i < cityy.length; i++) {
    // console.log(i)
    // console.log(city[i])
    rev = cityy[i] + rev
}
console.log(rev)

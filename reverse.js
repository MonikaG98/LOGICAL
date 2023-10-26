
// reverse string
// logic no 1
let a  = 'monika gosavi'
console.log(a.split('').reverse().join(''))
// console.log(a.split('')) // seperate the elemnt

//  logic no 2
let cityy = "mumbai"
let rev = ""
for (let i = 0; i < cityy.length; i++) {
    // console.log(i)
    // console.log(city[i])
    rev = cityy[i] + rev
}
console.log(rev)



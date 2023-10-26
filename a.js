// let a = 100
// let sum = 0
// for(i = 0 ; i<100 ; i++){
//     if(i%2 == 0){
//         sum = sum +i
//     }
// }
// console.log(sum)



// let a = 100
// let sum = 0
// for(i = 0 ; i<100 ; i++){
//     sum  = sum + i 
// }
// console.log(sum)

// let a = 100
// let sum = 0
// for(i = 0 ;i<100 ; i++){
//     sum = sum + i
// }
// console.log(sum)

// let g = 100
// let sum = 0
// for(i = 0 ; i<100 ; i++){
//     if(i%2 == 0){
//         sum = sum + i
//     }
// }
// console.log(sum)

// let a = 10
// let b = 20
// let c = 30

// console.log('a=10')
// console.log('monika')


// let pro = new Promise(function (resolev, reject) {
//     let a = 30
//     let b = 50
//     if (a > b) {
//         resolev('hii')
//     }
//     else {
//         reject('by')
//     }
// }).then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
//  })
//  .finally(function(){
//     console.log('finally')
// })

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);










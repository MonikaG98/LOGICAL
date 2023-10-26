// function removeDuplicate(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (result.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }

let str = "moniikaa"
let result = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (result.indexOf(char) === -1) {
        result += char;
    }
}
console.log(result);
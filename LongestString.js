let a = ['asds', 'dff', 'dfre', 'jgssdjkgjgdj']
let n = a.length
let str = ''
let len = 0
for (let i = 0; i < n; i++) {
    if (a[i].length > len) {
        len = a[i].length
        str = a[i]
    }
}
console.log(str)










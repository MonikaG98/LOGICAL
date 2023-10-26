function prime(n) {
    let c = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            c = 1
            break
        }
    }
    if (c == 1) {
        // return false
        return false
    }
    else {
        // return true
        return true
    }
}
console.log(prime(3))  



function reverse(a){
    let n = a.length
    for(i = n ;i>n/2 ;i--){
        let temp = a[i]
        a[i]=a[n-i-1]
        a[n-i-1]=temp
    }
    console.log(a)
}
let a1 = [5,4,3,2,1]
reverse(a1)










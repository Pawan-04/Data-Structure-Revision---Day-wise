// 0 1 1 2 3

let fib = (f,s,n) =>{
    if(n == 0){ return;  }
    console.log(f+s)
    fib(s,f+s,n-1)

}
console.log(0)
console.log(1)

fib(0,1,5-2)
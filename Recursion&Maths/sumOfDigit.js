// 123 -> 3+2+1

let print  = (n) =>{
    if(n == 0){ return 0;}

        let sum = n%10 + print(Math.floor(n/10))

        return sum;
}

console.log(    print(123)  )
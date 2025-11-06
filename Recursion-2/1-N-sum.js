// sum from 1 to n

let calc = (n) => {
    if(n==1){ return n; }

    let add = n + calc(n-1)

    return add
}

console.log(calc(5))
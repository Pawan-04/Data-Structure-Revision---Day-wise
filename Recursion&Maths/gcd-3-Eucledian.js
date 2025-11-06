// optimized more

let gcd = (a,b)=>{
    if(b == 0)return a;

    return gcd(b,a%b)

}

console.log( gcd(12,20))

// let recursion = (a,b) =>{
//     if(a % b ==0){
//         return b;
//     }
//     if(a>b){
//         if(a%b == 0){ return b}
//         else{a = a-b}
//     }
//     else{
//         if(b%a == 0){return a}
//         else{b = b-a;}
//     }
//     return recursion(a,b)

// }

// let ans = recursion(8,20)
// console.log(ans)
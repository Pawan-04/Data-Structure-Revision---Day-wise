// 123 -> 321

let reverse = (n,rev) =>{
    if(n===0) {return rev;}

    let digit = n%10;
    rev = rev*10 + digit
    let ans = reverse(Math.floor(n/10),rev)
    
    return ans;
}

console.log(reverse(123,0))
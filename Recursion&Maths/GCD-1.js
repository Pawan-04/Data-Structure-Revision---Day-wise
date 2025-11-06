let a = 16
let b  = 12
for(let x = b; x>=1; x--){

    if(a%x == 0 && b%x == 0){
        console.log(x)
        break;
    }
}
let a = 16
let b = 12

while(a != 1 && b != 1){
    
    if(a == b){
        console.log(a)
        break;
    }

    a>b ? a = a-b : b = b-a;
}

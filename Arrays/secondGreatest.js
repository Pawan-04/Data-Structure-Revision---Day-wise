let arr = [45,500,72,90,95,89,43];
let Fmax= -Infinity;
let Smax = -Infinity
arr.forEach((elem,i)=>{
    if(elem > Fmax){
        Smax = Fmax
        Fmax = elem;
    
    }

    else if((elem > Smax) && (elem != Fmax)){
        Smax = elem;
    }

})
console.log(['Greatest -> ',Fmax,'Second Greatest -> ',Smax])
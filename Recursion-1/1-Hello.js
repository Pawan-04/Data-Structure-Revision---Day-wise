// Print Hello n times
printHello = (n)=>{
    if(n<=0){
        return;
    }
    printHello(n-1)
    console.log("Hello"+n)
}
printHello(3)
let recursion = (a,b) => {
    if(a==b){
        console.log(a)
        return;
    }

    a>b ? recursion(a-b,b) : recursion(a,b-a)
}

recursion(16,12)
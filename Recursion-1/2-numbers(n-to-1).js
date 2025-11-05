// print n to 1
print = (n)=>{

    if(n<=0){ return; }

    process.stdout.write(n+" ")

    print(n-1)
}

print(5)
// print 1 to n
print = (n)=>{
    if(n<=0){return;}

    print(n-1)  // if use (n--), infite runs

    process.stdout.write(n+" ")

}

print(5)
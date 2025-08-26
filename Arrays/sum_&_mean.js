let arr = [1,2,3,4];
let sum = 0;
arr.forEach(function(elem,i){
    sum = sum + elem;
})
let length = arr.length
let mean = sum/length
console.log("sum = ",sum)
console.log("mean = ",mean)
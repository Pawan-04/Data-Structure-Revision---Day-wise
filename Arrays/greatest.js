let arr = [4,87,23,45];
let max = -Infinity
let i = -1
arr.forEach((elem,index)=>{
    if(elem > max){
        max = elem;
        i = index
    }
})
console.log("Max -> ",max)
console.log("Index -> ",i)
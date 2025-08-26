// Array Rotate to left by 1
let arr = [1,2,3,4,5]
let first = arr[0]

for(let i = 0;i<=arr.length-2;i++){ // or use i < arr.length-1
    arr[i] = arr[i+1]
}
arr[arr.length-1] = first

process.stdout.write("After Rotation = ")
console.log(arr)

// way 2 --> withought using extra space 
arr = [1,2,3,4,5]

for(let i=0;i<=arr.length-2; i++){
    arr[i] = arr[i]^arr[i+1]
    arr[i+1] = arr[i]^arr[i+1]
    arr[i] = arr[i]^arr[i+1]
}

console.log(arr)
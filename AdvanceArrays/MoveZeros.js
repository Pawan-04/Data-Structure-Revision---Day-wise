let arr = [0,1,0,1,1]
// let i = 0 ;
// let j= arr.length-1;
// while(i<j){

//     if(arr[i] == 0){
//         if(arr[j] == 1){
//             arr[i] = arr[i]+arr[j]
//             arr[j] = arr[i]-arr[j]
//             arr[i] = arr[i]-arr[j]
//             i++;
//             j--;
//         }
//         else{
//             j--;
//         }
//     }
//     else{
//         if(arr[j]==0){
//             j--;
//         }
//         else{
//         i++
//         }
//     }

// }
// console.log(arr);

// --------------------way 2-----------------------

let j=0;
for(let i = 1;i<arr.length;i++){
    if(arr[i] == 1){
        [arr[i], arr[j]] = [arr[j],arr[i]];
        j++;
    }
}
console.log(arr)
//Question:5-Calculate the sum of numbers within an array.

var sum=0;
var arr = [3,1,9,6,4]

function arraySum(){
    for(let i=0 ; i<arr.length; i++){
        sum = sum+arr[i];
    }
    console.log(sum);
}
arraySum();


/* Question:1-Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by 8.
If the element is odd, multiply the element by 7.
The function must then return the modified array.

Sample Input:-
1 2 3 4 5
Sample Output:-
3 4 9 8 15*/



//using combination of arrow function as well as callback function (just try to solve in ES-6 standard)
const modifiedArray = (nums) => {
    let newnums = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        newnums.push(nums[i] * 8);
      }
      else {
        newnums.push(nums[i] * 7);
      }
    }
    return newnums;
  };
  let arr=[1,2,3,4,5];
  const output = modifiedArray(arr);
  console.log("new modified array using callback function : ", output);


//using map function
const result = arr.map((value) => {
    if (value % 2 === 0) {
        return value * 8;
      }
      else {
        return value * 7;
      }
})
console.log("new modified array using map function:  ",  result);

//using normal function
function modifiedArrayy(nums) {
    let newnums=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 ===0){
            newnums.push(nums[i]*8);
        }
        else{
            newnums.push(nums[i]*7);
        }
    };
    return newnums;
}
let arrr = [1,2,3,4,5];
console.log("new modified array using normal function" + " " + modifiedArrayy(arrr));


 
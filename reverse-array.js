//Question:6-Create a function that reverses an array.

function reverseArray() {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  console.log(newArray);
}
var arr = [1, 2, 3, 7, 5];
reverseArray(arr);



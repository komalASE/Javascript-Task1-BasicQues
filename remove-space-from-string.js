//Question:7-Remove the spaces found in a string.

var string = "Remove space found in a sentences .";
var i=0;
var newString =" ";
while(i<string.length){
    if(string[i]!= " "){
        newString = newString + string[i];
    }
    i++;
}
console.log(string);
console.log(newString);

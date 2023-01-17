//Question:4-Create a length converter function.

//celcius to fahrenheit.
function celToFeh(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var msg = cTemp+'\ degree celcius is ' + cToFahr + ' degrees fahrenheit \.';
    console.log(msg);
} 
celToFeh(10);


//fahrenheit to celcius.
function fahTocel(fahrenheit){
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var msg = fTemp+' degrees fahrenheit' + fToCel + ' degrees celcius';
    console.log(msg);
}
fahTocel(20);

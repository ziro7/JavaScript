
var amountInCelsius;
var amountInFahrenheit;

function TemperaturCalculator() {
    var number = document.getElementById("amount").value;
    var amountInCelsius = parseInt(number);
    console.log(typeof numberConverted);
    amountInFahrenheit = amountInCelsius * 1.8000 - 32; 
    document.getElementById("amountInFahrenheit").innerHTML = "The value in Fahrenheit is : " + amountInFahrenheit;
 }



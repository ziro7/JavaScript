
var amountInDk;
var amountInEuro;
var exchangeRate = 7.45;

console.log(typeof exchangeRate);

function CurrencyCalculator() {
    var number = document.getElementById("amount").value;
    var amountInDk = parseInt(number);
    console.log(typeof numberConverted);
    amountInEuro = amountInDk / exchangeRate; 
    document.getElementById("amountInEuro").innerHTML = "The value in Euro is : " + amountInEuro;
 }

var randomNumber;
DiceRoll();

function DiceRoll(){
    randomNumber = Math.floor((Math.random() * 6)+1);
    
}

console.log(randomNumber);
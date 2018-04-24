var cardsInTotal = 52;
var numberOfSuits = 4;
var cardsInSuit = cardsInTotal / numberOfSuits;
var suit;
var value;
var text;

    function cardName() {
       var inputNumber = document.getElementById("cardNumber").value;
       suit = getSuit(inputNumber);
       value = getValue(inputNumber);
       text = printCard(value);
       document.getElementById("cardNameText").innerHTML = "The card is the: " + text;
    }


    function getSuit(inputNumber) {
        if (inputNumber >= 1 && inputNumber < (cardsInSuit+1)) {
            return "Hearts";
        } else if (inputNumber >= (cardsInSuit+1) && inputNumber < (cardsInSuit*2+1)) {
            return "Spades";
        } else if (inputNumber >= (cardsInSuit*2+1) && inputNumber < (cardsInSuit*3+1)) {
            return "Diamonds";
        } else if (inputNumber >= (cardsInSuit*3+1) && inputNumber <= cardsInTotal) {
            return "Clubs";
        } else
            return "ErrorSuit";
    }

    function getValue(inputNumber) {
        if (inputNumber > 0 && inputNumber < (cardsInSuit+1)) {
            return inputNumber;
        } else if (inputNumber >= (cardsInSuit+1) && inputNumber < (cardsInSuit*2+1)) {
            return inputNumber - cardsInSuit;
        } else if (inputNumber >= (cardsInSuit*2+1) && inputNumber < (cardsInSuit*3+1)) {
            return inputNumber - (cardsInSuit*2);
        } else if (inputNumber >= (cardsInSuit*3+1) && inputNumber <= cardsInTotal) {
            return inputNumber - (cardsInSuit*3);
        } else
            return 0;
    }

    function printCard(value) {
        if (value == 1) {
            return "Ace of " + suit;
        } else if (value > 1 && value < 11) {
            return value + " of " + suit;
        } else if (value == 11) {
            return "Knight of " + suit;
        } else if (value == 12) {
            return "Queen of " + suit;
        } else if (value == 13) {
            return "King of " + suit;
        } else
            return "Type a number between 1 and 52 and try again.";
    }

        


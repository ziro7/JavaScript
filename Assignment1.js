var minHearts = 1;
var minSpades = 14;
var minDiamonds = 27;
var minClubs = 40;
var maxinput = 52
var suit;
var value;
var text;

    function cardName() {
        var inputNumber = document.getElementById("cardNumber").value;
        suit = getSuit(inputNumber);
        value = getValue(inputNumber);
        
        switch (value){

            case 1:
                text = "The card is: Ace of " + suit;
                break;
            case 2, 3, 4, 5, 6, 7, 8, 9, 10:
                text = value + " of " + suit;
                break;
            case 11:
                text = "Knight of " + suit;
                break;
            case 12:
                text = "Queen of " + suit;
                break;
            case 13:
                text = "King of " + suit;
                break;
        }

        document.getElementById("cardNameText").innerHTML = "The card is the: " + text;
    }


    function getSuit(inputNumber) {
        if (inputNumber >= minHearts && inputNumber < minSpades) {
            return "Hearts";
        } else if (inputNumber >= minSpades && inputNumber < minDiamonds) {
            return "Spades";
        } else if (inputNumber >= minDiamonds && inputNumber < minClubs) {
            return "Diamonds";
        } else if (inputNumber >= minClubs && inputNumber <= maxinput) {
            return "Clubs";
        } else
            return "ErrorSuit";
    }

    function getValue(inputNumber) {
        if (inputNumber > 0 && inputNumber < 14) {
            return inputNumber;
        } else if (inputNumber >= 14 && inputNumber < 27) {
            return inputNumber - 13;
        } else if (inputNumber >= 27 && inputNumber < 40) {
            return inputNumber - 26;
        } else if (inputNumber >= 40 && inputNumber < 53) {
            return inputNumber - 39;
        } else
            return 0;
    }

        


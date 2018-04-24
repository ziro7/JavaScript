//Lav et Hang-man spil. Computeren skal tænke på et ord, som brugeren skal prøve at gætte. 

var word = prompt("Enter word to guess");
var wordArray = word.split('');
console.log (wordArray);
var empty = [];

for (i=0; i<wordArray.length; i++){
    if (wordArray[i]!= null){
            empty[i] = "_";
    }
}
console.log(empty);

var tries = 0;
var correct = 0;

function init(){
    
    document.getElementById("panel").innerHTML = "The word is: " + empty;
}

function hangman(){


    var guess = document.getElementById("letter").value;

    for (i=0; i<empty.length;i++){
        if (guess === wordArray[i]){
            empty[i] = guess;
            correct+= 1;
        } 
    }

    if (correct == 0){
        tries += 1;
        correct = 0;
    } else {
        correct = 0;
    }
     
    if (JSON.stringify(wordArray)==JSON.stringify(empty)){
        alert("You Won!")
    }

    if (tries > 6){
        alert("You have failed!");
        gameOver = true;
    }
    
    document.getElementById("panel").innerHTML = "The Number of failed attempts: " + tries + " The word is: " + empty;
    console.log("tries is: " + tries);
    
}

document.addEventListener("DOMContentLoaded",init,false);



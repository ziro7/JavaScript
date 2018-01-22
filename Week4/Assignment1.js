//Lav et Hang-man spil. Computeren skal tænke på et ord, som brugeren skal prøve at gætte. 

//Hver gang brugeren indtaster et bogstav, skal det vises, hvor i ordet, bogstavet findes.

/*
Lav en variable med ordet som string.
Lav en split og og itererer over dem hvor de pushes til en tom array, så array er som string men med et char pr index
Lav en tom array
Iterere over den fyldte array og for hvert index i length sæt et underskår i den tomme array.

Lav en global counter
få et input.
Iterere over fyldte array og hvis input stemmer med en værdi i fyldte så sæt input på index i den tomme array.
Hvis der ikke var en værdi øg counter med 1.
Hvis counter stiger over x taber man
tag imod nyt input
Hvis tomme array er lig med fyldte array har man vundet.


*/
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

document.getElementById("panel").innerHTML = "The word is: " + empty;

function hangman(){

    var guess = document.getElementById("letter").value;

    for (i=0; i<empty.length;i++){
        if (guess === wordArray[i]){
            empty[i] = guess;
            correct+= 1;
            console.log("correct is: " + correct);
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
        console.log("You have failed");
    }
    
    document.getElementById("panel").innerHTML = "The Number of failed attempts: " + tries + " The word is: " + empty;
    console.log("tries is: " + tries);
    
}






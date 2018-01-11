
var randomNumber;
var i = 0;

do {
    randomNumber = Math.floor((Math.random() * 6)+1);
    console.log(randomNumber);
    i++;    
} while (randomNumber != 6);





/* for (i = 0; i<1000; i++) {
    randomNumber = Math.floor((Math.random() * 6)+1);
    console.log(typeof randomNumber);
    console.log(randomNumber);
    if (randomNumber == 6){
        break
    }
}
 */

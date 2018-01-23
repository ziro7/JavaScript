/*
Lav en pinkode-husker. Du kan gøre opgaven mere eller mindre avanceret:

Simpel: 

Lav pinkodhuskeren, så den består af 8 kolonner og 5 rækker med 1 ciffer i hver celle. Sørg for, at der er lige mange af hvert ciffer.

Mindre simpel:

Lad brugeren angive de fire cifre i hans pinkode. Placer dem i de fire celler i øverste venstre hjørne, og sørg for at der fortsat er lige mange af hvert ciffer.

Lidt kompliceret:

Vis pinkodehuskeren som HTML - gerne med farver

Rimelig kompliceret

Lad brugeren indtaste sin pinkode på websiden. Det skal være muligt at indtaste i ethvert af de 40 forskellige felter.
*/

//laver tom array
var numbers = [];

//fylder array med værdierne (0-9)x4
for (i = 0; i<40; i++){
    if(i>29){
        numbers.push(i-30);
    } else if (i>19){
        numbers.push(i-20);
    } else if (i>9){
        numbers.push(i-10);
    } else {
        numbers.push(i);
    }
}

//sorter array i random order (der bruges annoynemous funktion)
numbers.sort(function(a, b){return 0.5 - Math.random()})
//udskriver den for at se den.
console.log(numbers.join(','));

//laver en matrix med 5 rækker og 8 kolloner.
var matrix = [],
    H = 5, // 5 rækker
    W = 8; // 8 kolloner

//laver en ydre for løkke til at loope over kolonner
for ( var i = 0; i < H; i++ ) {
    matrix[ i ] = [];
    //laver indre løkke for at loope over rækker
    for ( var j = 0; j < W; j++ ) {
        //finder sidste element i min random array 
        numberToPutIn = numbers[(39-i*W)-j];//de 39-i*w er for at reducere nummeret med en hel række når vi udfylder række 2.
        console.log(numberToPutIn);
        //popper det element fra numbers array så det fjernes.
        numbers.pop();
        //placer nummeret i matrixen i række I og kollone J 
        matrix[ i ][ j ] = numberToPutIn;
    }
}
console.log( matrix.join('\n') );
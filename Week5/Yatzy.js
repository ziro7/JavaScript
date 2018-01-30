


function topSection(terninger,counter ) {
    var point = 0;
    for (i = 0; i < terninger.length; i++) {
      if (terninger[i] == counter) { 
        point += counter; 
      }
    }
    return point;
}

console.log(topSection([1,2,3,4,5],1));
console.log(topSection([1,2,3,4,5],2));
console.log(topSection([1,2,3,4,5],3));
console.log(topSection([1,2,3,4,5],4));
console.log(topSection([1,2,3,4,5],5));
console.log(topSection([6,6,6,6,6],6));

/*
To par
Tre ens
Fire ens
Lav
Høj
Fuldt hus
Chance
Yatzy
*/

function arrayMedVærdi(terninger, værdi){
    var arrayMedVærdi = [];
    for (i=0; i<terninger.length; i++){
        if (terninger[i]==værdi){
            arrayMedVærdi.push(værdi);
        }
    return arrayMedVærdi;
}


//et par
function etPar (terninger, parIHvad) {
    
    var filteredArray = [];
    var result = 0;

    for (i=0; i<terninger.length; i++){
        if (terninger[i]==parIHvad){
            filteredArray.push(parIHvad);
        }
    }
    console.log(filteredArray);

    if (filteredArray.length>1){
        var result = filteredArray[0] + filteredArray[1];
    }

    return result;
}

//test af et par.
console.log("et par med [1,2,3,4,5] og 3: " + etPar([1,2,3,4,5],3))
console.log("et par med [1,2,3,3,4] og 3: " + etPar([1,2,3,3,4],3))
console.log("et par med [1,2,3,3,3] og 3: " + etPar([1,2,3,3,3],3))
//hvis der er 3 ens vil den kun tage værdi af de først 2.

//to par
function toPar (terninger, parEt, parTo) {
    
    var filteredArray = arrayMedVærdi(terninger,parEt);
    var result = 0;
    
    console.log(filteredArray);

    if (filteredArray.length>1){
        var result = filteredArray[0] + filteredArray[1];
    }

    return result;
}

console.log("et par med [1,2,3,4,5] og 3: " + toPar([1,2,3,4,5],3));
console.log("et par med [1,2,3,3,4] og 3: " + toPar([1,2,3,3,4],3));
console.log("et par med [1,2,3,3,3] og 3: " + toPar([1,2,3,3,3],3));

//hvis der er fuldt hus, vil den kun tage værdi af de to første par..


/*
YATSY

every() metoden er nok bedre til Yatsy - da den false eller true hvis alle værdi matcher.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every



Kan måske give terninger med og se om alle matcher terninger[0];
*/
}
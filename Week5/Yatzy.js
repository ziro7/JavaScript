
//funktion til den øverste del med 1'ere eller 2'ere.
function topSection(terninger,counter ) {
    var point = 0;
    for (i = 0; i < terninger.length; i++) {
        if (terninger[i] == counter) { 
            point += counter; 
        }
    }
    return point;
}

//hjælpe funktion som filtre array til at består af den der kun har "værdi"
function arrayMedVærdi(terninger, værdi){
    var arrayMedVærdi = [];
    for (i=0; i<terninger.length; i++){
        if (terninger[i]==værdi){
            arrayMedVærdi.push(værdi);
        }
    }
    return arrayMedVærdi;
}

//hjælpe funktion tælle en array sammen.
function sum(terninger){
             
    var sum =  0;
    for(var i=0;i<terninger.length;i++){                  
        sum += Number(terninger[i]);
    }
    return sum;
}

//et par
function etPar (terninger, parIHvad) {
    
    var filteredArray = arrayMedVærdi(terninger,parIHvad);
    var result = 0;

    if (filteredArray.length>1){
        var result = filteredArray[0] + filteredArray[1]; //hvis der er 3 ens vil den kun tage værdi af de først 2.
    }

    return result;
}

//to par
function toPar (terninger, parEt, parTo) {
    
    var ArrayOne = arrayMedVærdi(terninger,parEt);
    var ArrayTwo = arrayMedVærdi(terninger,parTo);
    var result = 0;
    
    if (ArrayOne.length>1 && ArrayTwo.length>1 ){
        var result = ArrayOne[0] + ArrayOne[1] + ArrayTwo[0] + ArrayTwo[1];
    }

    return result;
}

//tre, fire og fem ens
function ens (terninger, ensIHvad) {
    
    var filteredArray = arrayMedVærdi(terninger,ensIHvad);
    var result = 0;

    if (filteredArray.length>2){
        var result = sum(filteredArray);
    }

    return result;
}

//Chancen
function Chancen(terninger){
    var result = sum(terninger);
    return result;
}

//Lav
function lav(terninger){
    var result = 0;
    if (JSON.stringify(terninger)==JSON.stringify([1,2,3,4,5])){
        result = 15;
    } 
    return result;
}

//Høj
function høj(terninger){
    var result = 0;
    if (JSON.stringify(terninger)==JSON.stringify([2,3,4,5,6])){
        result = 20;
    } 
    return result;
}

//fuldt hus
function fuldtHus (terninger, par, ensIHvad) {
    
    var ArrayOne = arrayMedVærdi(terninger,par);
    var ArrayTwo = arrayMedVærdi(terninger,ensIHvad);
    var result = 0;

    console.log(ArrayOne + " og nummer " + ArrayTwo);
    
    if (ArrayOne.length>1 && ArrayTwo.length>2 ){
        var result = ArrayOne[0] + ArrayOne[1] + ArrayTwo[0] + ArrayTwo[1] + ArrayTwo[2];
    }

    return result;
}

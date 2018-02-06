
//"Hjælpe"funktion til den øverste del med 1'ere eller 2'ere.
function topSection(terninger,counter ) {
    var point = 0;
    for (i = 0; i < terninger.length; i++) {
        if (terninger[i] == counter) { 
            point += counter; 
        }
    }
    return point;
}

function ettere(terninger){
    let point = topSection(terninger,1);
    return point;
}

function toere(terninger){
    let point = topSection(terninger,2);
    return point;
}

function trere(terninger){
    let point = topSection(terninger,3);
    return point;
}

function firere(terninger){
    let point = topSection(terninger,4);
    return point;
}

function femere(terninger){
    let point = topSection(terninger,5);
    return point;
}

function seksere(terninger){
    let point = topSection(terninger,6);
    return point;
}

//Hjælpe funktion som filtre array til at består af den der kun har "værdi"
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

//Hjælpefunktion til sorteret og reversed
function modsatSorteret(terninger) {
    var sorteretTerninger = terninger.sort();
    var modsatSorteret = sorteretTerninger.reverse();
    return modsatSorteret;
}

//et par //må ikke få et indput fra spilleren
function etPar(terninger) {
    var result = 0;
    var sorteretTerninger = modsatSorteret(terninger);

    //finder det højeste par da den starter med den reverse sorteret array
    for(i=0;i<sorteretTerninger.length;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            result=sorteretTerninger[i]*2;
            break;//hopper ud ved første match så den ikke overskrives med mindre par.
        }
    }
    return result;
}

//to par
function toPar (terninger, parEt, parTo) {

    var parEt;
    var parTo;
    var sorteretTerninger = modsatSorteret(terninger);
    //finder højest par først
    for(i=0;i<sorteretTerninger.length;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            parEt=sorteretTerninger[i];
            break;
        };
    }
    //starter på index 2 da det er det tidligste sted par to kan starte og hvis der er to skal første par senest slutte ved index 2
    for(i=2;i<sorteretTerninger.length;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            parTo=sorteretTerninger[i];
            break;
        };
    }
    
    var ArrayOne = arrayMedVærdi(terninger,parEt);
    var ArrayTwo = arrayMedVærdi(terninger,parTo);
    var result = 0;
    
    if (ArrayOne.length>1 && ArrayTwo.length>1 ){
        var result = ArrayOne[0] + ArrayOne[1] + ArrayTwo[0] + ArrayTwo[1];
    }
    return result;
}

//tre ens
function treEns (terninger) {
    var ensIHvad = 0;

    for(i=0;i<terninger.length;i++){
        if (terninger[i]==terninger[i+1] && terninger[i+1]==terninger[i+2]){
            ensIHvad=terninger[i];
            break;
        }
    }
    return ensIHvad*3;
}

//fire ens
function fireEns (terninger) {
    var ensIHvad = 0;

    for(i=0;i<2;i++){
        if ((terninger[i]==terninger[i+1] && terninger[i+1]==terninger[i+2]) && terninger[i+2]==terninger[i+3]){
            ensIHvad=terninger[i];
            break;
        }
    }
    return ensIHvad*4;
}

//Lav
function lav(terninger){
    var result = 0;
    var sorteretTerninger = terninger.sort();
    if (JSON.stringify(sorteretTerninger)==JSON.stringify([1,2,3,4,5])){
        result = 15;
    } 
    return result;
}

//Høj
function høj(terninger){
    var result = 0;
    var sorteretTerninger = terninger.sort();
    if (JSON.stringify(sorteretTerninger)==JSON.stringify([2,3,4,5,6])){
        result = 20;
    } 
    return result;
}

//Fuldt hus
function fuldtHus (terninger) {
    var par;
    var ensIHvad;
    var sorteretTerninger = terninger.sort();

    //finder de 3 ens først.
    for(i=0;i<3;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1] && sorteretTerninger[i+1]==sorteretTerninger[i+2]){
            ensIHvad=sorteretTerninger[i];
            break;
        }
    }

    //finder paret
    for(i=0;i<sorteretTerninger.length;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            if (sorteretTerninger[i]==ensIHvad && sorteretTerninger[0]==sorteretTerninger[4]){
                par=ensIHvad;
            } else if (sorteretTerninger[i]!=ensIHvad){
                par=sorteretTerninger[i];
            }
        }
    }
    
    var ArrayOne = arrayMedVærdi(terninger,par);
    var ArrayTwo = arrayMedVærdi(terninger,ensIHvad);
    var result = 0;
 
    if (ArrayOne.length>1 && ArrayTwo.length>2 ){
        var result = ArrayOne[0] + ArrayOne[1] + ArrayTwo[0] + ArrayTwo[1] + ArrayTwo[2];
    }
    return result;
}

//Chancen
function chancen(terninger){
    var result = sum(terninger);
    return result;
}

//fem ens (Yatzy)
function yatzy(terninger) {
    var sorteretTerninger = modsatSorteret(terninger);
    if (sorteretTerninger[0] == sorteretTerninger[4]){
        return 50;
    } else{
        return 0;
    }
}

function test (functionCall){
    console.log(functionCall([1,2,3,4,5]));
    console.log(functionCall([3,1,1,1,3]));
    console.log(functionCall([3,3,3,3,3]));
    console.log(functionCall([5,5,4,4,5]));
    console.log(functionCall([2,3,4,5,6]));
}
test(etPar);
test(fuldtHus);
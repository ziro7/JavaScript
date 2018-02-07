
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

function ettere(terninger) {return topSection(terninger,1);}
function toere(terninger)  {return topSection(terninger,2);}
function trere(terninger)  {return topSection(terninger,3);}
function firere(terninger) {return topSection(terninger,4);}
function femere(terninger) {return topSection(terninger,5);}
function seksere(terninger){return topSection(terninger,6);}

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

//et par 
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

    var parEt = 0;
    var parTo = 0;
    var sorteretTerninger = modsatSorteret(terninger);
    //finder højest par først
    for(i=0;i<3;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            parEt=sorteretTerninger[i];
            break;
        }
    }
    //starter på index 2 da det er det tidligste sted par to kan starte og hvis der er to skal første par senest slutte ved index 2
    //tjekker så om paret er lig med par 1 - hvis det er tjekker jeg om der er 4 ens 
    for(i=2;i<sorteretTerninger.length;i++){
        if (sorteretTerninger[i]==sorteretTerninger[i+1]){
            if (sorteretTerninger[i]==parEt && (sorteretTerninger[0]==sorteretTerninger[3] || sorteretTerninger[1]==sorteretTerninger[4])){
                parTo=parEt;
            } else if (sorteretTerninger[i]!=parEt){
                parTo=sorteretTerninger[i];
            }
        }
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
        return sum(terninger)+50;
    } else {
        return 0;
    }
}

function test (functionCall){
    console.log(functionCall([1,2,3,5,5])); //et pa
    console.log(functionCall([1,2,3,4,5])); //lav
    console.log(functionCall([3,1,2,1,3])); //to par
    console.log(functionCall([1,2,2,2,3])); //test på 2 par - tre ens
    console.log(functionCall([3,3,3,3,3])); //fuldt hus, 4 ens mv.
    console.log(functionCall([5,5,4,4,5])); //fuld hus
    console.log(functionCall([2,3,4,5,6])); //høj
    console.log(functionCall([6,6,6,6,6])); //yatzy
}

//test(etPar);
//test(toPar);
//test(treEns);
//test(fireEns);
//test(lav);
//test(høj);
//test(fuldtHus);
//test(chancen);
//test(yatzy);

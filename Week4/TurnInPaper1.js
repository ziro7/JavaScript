/*
Du skal analysere, om en aktie skal købes eller ej. Du har de seneste 5 dages aktiekurser at forholde dig til. Der er tre anbefaling: Køb, Hold og Sælg.

Analysen skal foretages efter følgende regler:

Hvis aktien er steget hver dag i 5 dage, skal den købes
Hvis aktien er faldet hver dag i 5 dage, skal den sælges
Hvis en akties udsving over de 5 dage er mindre end 2% skal den holdes.
Hvis aktien er faldet i de første 2 eller 3 dage, og derefter steget i de resterende skal den købes
Hvis aktien er steget i de 3 eller 4 første dage, og derefter faldet skal den sælges.
Hvis aktien er steget mere end 20% i løbet af de 5 dage, skal den holdes
Hvis aktien er faldet mere end 10% i løbet af de 5 dage, skal den sælges
*/

function giveMeARecommendation () {
    var recommendation = []; //anbefalingsarray da der kan være flere svar.
    var priceDevelopment = []; //bliver en array der viser stigning, ens eller fald indikeret ved henholdsvis på +1, 0, -1;

    var a = parseInt(document.getElementById("number1").value) //parse da jeg havde problemer med at den trode det var en streng
    var b = parseInt(document.getElementById("number2").value)
    var c = parseInt(document.getElementById("number3").value)
    var d = parseInt(document.getElementById("number4").value)
    var e = parseInt(document.getElementById("number5").value)
    var prices = [a, b, c, d ,e ]; //array med de egentligs kurser

    for (i=1; i<prices.length;i++){
        if (prices[i]>prices[i-1]) {
            priceDevelopment.push(1);
        } else if (prices[i]<prices[i-1]) {
            priceDevelopment.push(-1);
        } else {
            priceDevelopment.push(0);
        }
    }

    increaseAllDays = [1,1,1,1]; //Stigning alle dage
    decreaseAllDays = [-1,-1,-1,-1]; //fald alle dage.
    clibm3AndThenDrop = [1,1,1,-1]; //stig->stigning->stigning->fald = sælg.
    clibm2AndThenDrop = [1,1,-1,-1]; //stig->stigning->stigning->fald = sælg.
    dropAndThenClimb = [-1,-1,1,1]; //fald->fald->stig ->stigning =>køb
 
    matrix =        [increaseAllDays, decreaseAllDays, clibm3AndThenDrop, clibm2AndThenDrop, dropAndThenClimb]
    resultIfEqual = ["Buy",           "Sell",          "Sell",            "Sell",            "Buy"]
    
    for (i=0; i<matrix.length;i++ ){
        if (JSON.stringify(matrix[i])==JSON.stringify(priceDevelopment)){
            recommendation.push(resultIfEqual[i]);
        }     
    }

    //Hvis en akties udsving over de 5 dage er mindre end 2% skal den holdes.
    if (Math.abs((e-a)/a) < 0.02) {
        recommendation.push("Hold");
    } 

    //Hvis aktien er steget mere end 20% i løbet af de 5 dage, skal den holdes
    if (((e-a)/a) > 0.20){
        recommendation.push("Hold");
    }

    //Hvis aktien er faldet mere end 10% i løbet af de 5 dage, skal den sælges
    if (((e-a)/a) < -0.10){
        if (recommendation[0] === "Sell" || recommendation[1] === "Sell"){ //sikre lige at jeg ikke skriver sælg to gange.
        } else {
            recommendation.push("Sell"); 
        }
    }

    if (recommendation.length > 1) {
        document.getElementById("panel").innerHTML="The recommendation is not conclusive. Could be the following: "+ recommendation;    
    } else if (recommendation.length == 1) {
        document.getElementById("panel").innerHTML="The recommendation is: "+ recommendation[0];
    } else {
        document.getElementById("panel").innerHTML="No recommendation can be made at present";
    }
}

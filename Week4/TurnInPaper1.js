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
    var recommendation = "Hold";
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;

    var increasedFrom1to2;
    if (b>a) {
        increasedFrom1to2 = true;
    } else {
        increasedFrom1to2 = false;
    }
    var increasedFrom2to3;
    if (c>b) {
        increasedFrom2to3 = true;
    }else {
        increasedFrom2to3 = false;
    }

    var increasedFrom3to4;
    if (d>c) {
        increasedFrom3to4 = true;
    } else {
        increasedFrom3to4 = false;
    }

    var increasedFrom4to5;
    if (e>d) {
        increasedFrom4to5 = true;
    } else {
        increasedFrom4to5 = false;
    }


    //Hvis en akties udsving over de 5 dage er mindre end 2% skal den holdes.
    var volatile = Math.abs((e-a)/a);
    if (volatile < 0.02) {
        recommendation = "Hold";
    } 

    var isIncreasedByMoreThan20 =  ((e-a)/a) > 0.20;
    if (isIncreasedByMoreThan20){
        recommendation = "Hold";
    }

    var isDecreasedBy10OrMore =  ((e-a)/a) < -0.10;
    if (isDecreasedBy10OrMore){
        recommendation = "Sell";
    }


    //Hvis aktien er steget mere end 20% i løbet af de 5 dage, skal den holdes
    //Hvis aktien er faldet mere end 10% i løbet af de 5 dage, skal den sælges


    if (increasedFrom1to2 == true && increasedFrom2to3 == true){
        if (increasedFrom3to4 == true){
            if (increasedFrom4to5 == true){
                recommendation = "buy" //Stigning alle dage
            } else {
                recommendation = "sell" //stig->stigning->stigning->fald = sælg.
            }
        } else if (increasedFrom4to5 == false){
            recommendation = "sell" //stig->stigning->fald->fald = sælg.
        } 
    }

    if (increasedFrom1to2 == false && increasedFrom2to3 == false){
        if (increasedFrom3to4 == false) {
            if(increasedFrom4to5 == false){
                recommendation = "sell" //fald alle dage.
            } 

        } else if (increasedFrom4to5 == true){
            recommendation = "buy" //fald->fald->stig ->stigning =>køb
        }
    } 

    document.getElementById("panel").innerHTML=recommendation;
    console.log(recommendation);
}

function init (){
    var knap=document.getElementById("knap");
    knap.onclick=giveMeARecommendation();
}

document.addEventListener("DOMContentLoaded", init, false);
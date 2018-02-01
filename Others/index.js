function init() {
    alert("Velkommen til Streaming calutoration")

}

//beregn knappen
function beregn() {

    //Indtasting af brugeren værdi tildelt i en variable
    var bandwitch = document.getElementById("kvalitet").value;
    var kunder = document.getElementById("kunder").value;
    var time = document.getElementById("time").value;
    var betaling = document.getElementById("betaling").value;
    var indtjening = document.getElementById("indtægtinput").value;
    var omkostinger = document.getElementById("omkostningerinput").value;
    var totaltpris = document.getElementById("totaltpris").value;
    //Variabler til omkostinger/indtægt
    var indtægt;
    var omkost;
    var result;
    //Variabler til beregne bandwitch
    var sekunt;
    var minute;
    var hourly;
    var error;
    var seer;
    //Variabler til priserne
    var prisPerS; //Pris per sekunt
    var prisPerM; //Pris per minute
    var prisPerT; // Pris per time
    var perMedS; // Pris med X antal seer
    var timerOmdagen; //Timer om dagen
    var konvert; //Konvertere til megabit
    //afregning af totalt pris variable
    var totaltP;

    //Switch tager bandwitch variable
    //og uddeler den i 4 case / 4 valg muligheder
    //Case "et valg":
    //Kode her
    //break;
    switch (bandwitch) {
        case "480":
            //streaming input
            sekunt = (bandwitch / 8) * kunder + " kbps"
            minute = (bandwitch / 8) * 60 * kunder + " kbps"
            hourly = (bandwitch / 8) * kunder * 60 * 60 * kunder + " kbps"
            konvert = (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " GB"
            //Pris input
            prisPerS = (bandwitch / 8 * kunder) / 1024 / betaling + " DKK,-"
            prisPerM = (bandwitch / 8 * 60 * kunder) / 1024 / betaling + " DKK,-";
            prisPerT = (bandwitch / 8 * 60 * 60 * kunder) / 1024 / betaling + " DKK,-";
            //Indtægt/omkost input
            indtægt = indtjening + " DKK,-";
            omkost = omkostinger + " DKK,-";
            result = indtjening - omkostinger + " DKK,-"
            //totaltp = (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + omkostinger - indtjening;
            totaltp = indtjening - omkostinger * (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " DKK,-";
            break;

        case "720":
            //streaming input
            sekunt = (bandwitch / 8) * kunder + " kbps"
            minute = (bandwitch / 8) * 60 * kunder + " kbps"
            hourly = (bandwitch / 8) * kunder * 60 * 60 * kunder + " kbps"
            konvert = (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " GB"
            //Pris input
            prisPerS = (bandwitch / 8 * kunder) / 1024 / betaling + " DKK,-"
            prisPerM = (bandwitch / 8 * 60 * kunder) / 1024 / betaling + " DKK,-";
            prisPerT = (bandwitch / 8 * 60 * 60 * kunder) / 1024 / betaling + " DKK,-";
            //Indtægt input
            indtægt = indtjening + " DKK,-";
            omkost = omkostinger + " DKK,-";
            result = indtjening - omkostinger + " DKK,-"
            totaltp = indtjening - omkostinger * (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " DKK,-";
            break;

        case "1020":
            //streaming input
            sekunt = (bandwitch / 8) * kunder + " kbps"
            minute = (bandwitch / 8) * 60 * kunder + " kbps"
            hourly = (bandwitch / 8) * kunder * 60 * 60 * kunder + " kbps"
            konvert = (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " GB"
            //Pris input
            prisPerS = (bandwitch / 8 * kunder) / 1024 / betaling + " DKK,-"
            prisPerM = (bandwitch / 8 * 60 * kunder) / 1024 / betaling + " DKK,-";
            prisPerT = (bandwitch / 8 * 60 * 60 * kunder) / 1024 / betaling + " DKK,-";
            //Indtægt input
            indtægt = indtjening + " DKK,-";
            omkost = omkostinger + " DKK,-";
            result = indtjening - omkostinger + " DKK,-"
            totaltp = indtjening - omkostinger * (bandwitch / 8) * kunder * 60 * 60 * kunder / 1024 / 100 + " DKK,-";
            break;

        default:
            alert("Ugyldig tal. Prøv igen")
            //resetter værdi i table content
            sekunt = "";
            minute = "";
            hourly = "";
            konvert = "";
            prisPerM = "";
            prisPerS = "";
            prisPerT = "";
            indtægt = "";
            omkost = "";
            result = "";

    }
    //Validere om brugeren kan streame eller ej
    if (result > indtægt) {
        document.getElementById("error").innerHTML = "Du har overskud. Og kan derfor godt streame. Totalt pris er " + totaltp;
        document.getElementById("error").style.backgroundColor = '#66ff66';

    } else if (indtægt < omkost) {
        document.getElementById("error").innerHTML = "Du har underskud. Og har derfor svært ved at streame. Da du alt i alt skal betale " + totaltp;
        document.getElementById("error").style.backgroundColor = '#ff0000';
    } else if (indtægt == omkost) {
        document.getElementById("error").innerHTML = "Prøv igen. Din balance går i 0";
        document.getElementById("error").style.backgroundColor = '#ff0000';
    } else {
        Document.getElementById("error").innerHTML = "Der sket en fejl. Prøv igen"
    }
    //Validere om input fields er tomme eller ej


    //Data/output til klient
    document.getElementById("Sekundtext").innerHTML = sekunt;
    document.getElementById("minutetext").innerHTML = minute;
    document.getElementById("hourlytext").innerHTML = hourly;
    document.getElementById("kundertext").innerHTML = kunder;
    document.getElementById("timetext").innerHTML = time;
    document.getElementById("conventer").innerHTML = konvert;


    // Priser/output til klient
    document.getElementById("ppstext").innerHTML = prisPerS;
    document.getElementById("ppmtext").innerHTML = prisPerM;
    document.getElementById("ppttext").innerHTML = prisPerT;


    //Pris/output til omkostinger/indtægt
    document.getElementById("indtægtfield").innerHTML = indtægt;
    document.getElementById("omkostningerfield").innerHTML = omkost;
    document.getElementById("resultat").innerHTML = result;
    //Totaltpris output
    document.getElementById("totaltpris").innerHTML = totaltp;


    function ad() { //Hvis kunden har trykker på "advanced detailers" vises boksen

        var click = document.getElementById("advance");
        var pop = document.getElementById("åbne");

        if (click.style.display == "none" || pop.value == "åbne tap detailer") {
            click.style.display = "block";

            pop.value = "luk tap detailer"
        } else {

            click.style.display = "none";
            pop.value = "åben tap detailer"

        }


    } //Function Beregn slut
}
document.addEventListener("DOMContentLoaded", init, false);
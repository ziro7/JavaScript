/*
                    => Intro <=
Følgende regler bruges til at beregne hvilken anbefaling der
gives til brugeren.
Følgedne anbefaling gives.. SELL, BUY, HOLD

                    => Regler <=
Hvis aktien er steget hver dag i 5 dage, skal den købes 
Hvis aktien er faldet hver dag i 5 dage, skal den sælges
Hvis en akties udsving over de 5 dage er mindre end 2% skal den holdes
Hvis aktien er faldet i de første 2 eller 3 dage, og derefter steget i de resterende skal den købes
Hvis aktien er steget i de 3 eller 4 første dage, og derefter faldet skal den sælges
Hvis aktien er steget mere end 20% i løbet af de 5 dage, skal den holdes
Hvis aktien er faldet mere end 10% i løbet af de 5 dage, skal den sælges
*/

    function evaluate() {
        
    // Her defineres alle variabler mm.
    var stockQuot = [0, 0, 0, 0, 0, 0]; // Aktie pris de sidste 6 dage
    var upGoing = true; // Aktie pris er steget
    var downGoiong = true; // Aktie pris er faldet
    var lessThan2ProcentChange = false; // Prisudsvinget er mindre end 2%
    var upGoing20Procent = false; // Prisudsvinget er steget med 20 eller flere %
    var downGoing10Procent = false; // Prisudsvinget er faldet med 10 eller flere %
    var downThenUp = [false, false]; // Prisen er faldet 3 eller 4 dage i træk, og siden steget
    var upThenDown = [false, false]; // Prisen er steget 3 eller 4 dage i træk, og siden faldet
    var minQuot = stockQuot[0]; // Mindste aktie pris
    var maxQuot = stockQuot[0]; // Højese aktie pris
    var procentUp = [0, 0]; // til beregning af procent stigning
    var procentDown = [0, 0]; // til beregning af procent fald
    var recommendation = ["BUY", "SELL", "HOLD"]

        
    // Dette for loop modtager aktie kurs for 6 dage fra brugeren
    for (let index = 0; index < 6; index++) {
        stockQuot[index] = parseInt(prompt("Indtast kurs"));
    }

    // Dette for loop er for at se om kursen er steget 5 dage i træk
    for (let index = 0; index < stockQuot.length -1; index++) {
        if (stockQuot[index + 1] < stockQuot[index]) {
            upGoing = false;
        } ;
    }

    // Dette for loop er for at se om kursen er faldet 5 dage i træk
    for (let index = 0; index < stockQuot.length -1; index++) {
        if (stockQuot[index + 1] > stockQuot[index]) {
            downGoiong = false;
        } ;
    }

    // Disse loops finder mindste og højeste pris
    for (let index = 0; index < stockQuot.length; index++) {
        if (minQuot > stockQuot[index]) {
            minQuot = stockQuot[index];
        }   
    }

    for (let index = 0; index < stockQuot.length; index++) {
        if (maxQuot < stockQuot[index]) {
            maxQuot = stockQuot[index];
        }   
    }
    // Dette if statement ser om prisudsvinget er på 2% eller mindre
    if ((maxQuot - minQuot) / stockQuot[0] <= 2) {
        lessThan2ProcentChange = true;
    }

    // Dette if statment ser om prisen er steget med 20% eller mere

    procentUp[0] = stockQuot[5] - stockQuot[0]
    procentUp[1] = ((procentUp[0] / stockQuot[0]) * 100);
    if (procentUp[1] >= 20) {
        upGoing20Procent = true;
    }

    // Dette if statement ser om prisen er faldet med 10% eller mere
    procentDown[0] = stockQuot[0] - stockQuot[5];
    procentDown[1] = ((procentDown[0] / stockQuot[0]) * 100);
    if (procentDown[1] >= 10) {
        downGoing10Procent = true;
    }

    // Denne kode ser om aktieprisen er faldet de første 3 dage og siden steget
    for (let index = 1; index < stockQuot[3]; index++) {
        if (stockQuot[index - 1] > stockQuot[index]) {
            downThenUp[0] = true;
        }
    }
    for (let index = 3; index < stockQuot[5 +1]; index++) {
        if (stockQuot[index] > stockQuot[index - 1]) {
                downThenUp[1] = true;
        }
    }
    // Denne kode ser om aktieprisen er steget de første 3 dage og siden faldet
    for (let index = 1; index < stockQuot[3]; index++) {
        if (stockQuot[index - 1] < stockQuot[index]) {
            upThenDown[0] = true;
        }
    }
    for (let index = 3; index < stockQuot[5 +1]; index++) {
        if (stockQuot[index] < stockQuot[index - 1]) {
                upThenDown[1] = true;
        }
    }

    // Her evalueres hvad der skal ske med aktierne

    if (upGoing == true || downThenUp == true) {
        document.getElementById("userOutput").innerHTML = recommendation[0];
    }
    else if (downGoiong == true || upThenDown == true || downGoing10Procent == true) {
        document.getElementById("userOutput").innerHTML = recommendation[1];
    }
    else if (lessThan2ProcentChange == true || upGoing20Procent == true) {
        document.getElementById("userOutput").innerHTML = recommendation[2];
    }
}

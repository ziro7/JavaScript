// Lektion 4 Opg. 2 - pinkode-husker af Christian Kirk-Thomsen
function udfyldTabel(skema){
    var farve=["yellow","brown","blue","red","white","green","orange","purple"];
    var j,indeks=0;
    for (i=0;i<skema.length;i++){
        j=i+indeks+1;
        while (document.getElementById("elem"+j).value){
            document.getElementById("elem"+j).style.backgroundColor=farve[Math.floor(Math.random()*farve.length)];
            indeks++;
            j=i+indeks+1;
        }
        document.getElementById("elem"+j).value=skema[i];
        document.getElementById("elem"+j).style.backgroundColor=farve[Math.floor(Math.random()*farve.length)];
    }
}

function udfyld(pin){
    var skema=[];
    var i=0;
    while (i<40){
        skema[i]=Math.floor(i/4);   // Lægger 4 af hvert tal i array
        i++;
    }
    for (i=0;i<pin.length;i++){ // Fjerner pin-tal fra array for at fastholde 4 af hvert tal 0-9
        j=0;
        do{
            if (pin[i]==skema[j]){
                skema.splice(j,1);
                break;
            }
        }while (++j<40);
    }
    return skema;
}

function bland(){
    var pin=[];
    var indeks=0;
    for (i=1;i<41;i++){
        if (document.getElementById("elem"+i).value&&document.getElementById("elem"+i).value!==""&&document.getElementById("elem"+i).value<10&&indeks<4)
            // Accepterer kun 0-9 samt max 4 tal
            pin[indeks++]=document.getElementById("elem"+i).value;
        else
            document.getElementById("elem"+i).value=null;
    }
    var skema=udfyld(pin);
    for (i=0;i<skema.length;i++){   // Tallene (ex pin) blandes
        var randomIndeks=Math.floor(Math.random()*36);
        var temp=skema[i];
        skema[i]=skema[randomIndeks];
        skema[randomIndeks]=temp;
    }
    udfyldTabel(skema);
}

function init(){
    var panel=document.getElementById('panel');
    var tabelstr="<table>";
    for (i=0;i<5;i++){
        tabelstr+="<tr>";
        for (j=0;j<8;j++){
            tabelstr+="<td><input id='elem"+(j+8*i+1)+"'/></td>";
        }
        tabelstr+="</tr>";
    }
    tabelstr+="</table><br><br><button id='start'>Dan husker</button>";
    panel.innerHTML=tabelstr;
    document.getElementById("start").onclick=bland;
}
document.addEventListener('DOMContentLoaded',init,false);
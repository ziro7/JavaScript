var kurs = [70,99,98,99,70];

function CheckKurser()
{
    var anbefaling = "Ingenting";
    if(kurs[0]<kurs[1] && kurs[1]<kurs[2] && kurs[2]<kurs[3] && kurs[3]<kurs[4])
    { //check om kursen er steget hver dag
        anbefaling = "Køb"
    }
    if(kurs[0]>kurs[1] && kurs[1]>kurs[2] && kurs[2]>kurs[3] && kurs[3]>kurs[4])
    { //check om kursen er faldet hver dag
        anbefaling = "Sælg"
    }

    //Hvis en akties udsving over de 5 dage er mindre end 2% skal den holdes.
    var avr = 0;
    var under2procent = false;
    var over2procent = false;
    for(i=0;i<kurs.length;++i){ 
        avr = avr+kurs[i];
    }
    
    avr = avr/kurs.length; //først udregnes gennemsnitskursen
    
    for(i=0;i<kurs.length;++i)
    { 
       if ((avr/kurs[i])<1.02) //derefter checkes de enkelte kurser med gennemsnittet
       {
            under2procent = true;
       }else {over2procent = true}
    }
    if (under2procent && !over2procent) 
    {
        anbefaling = "Hold";
    }
    
   
    if(kurs[0]>kurs[1] && kurs[1]>kurs[2] && kurs[2]<kurs[3] && kurs[3]<kurs[4])
    { //check om kursen er faldet og derefter steget
        anbefaling = "Køb";
    }

    if(kurs[0]<kurs[1] && kurs[1]<kurs[2] && kurs[2]<kurs[3] && kurs[3]>kurs[4])
    { //check om kursen er steget og derefter faldet
        anbefaling = "Sælg";
    }

    if (((kurs[4]-kurs[0])/kurs[0])>0.2)
    {//hvis steget mere end 20%
        anbefaling = "Hold";
    }

    if (((kurs[4]-kurs[0])/kurs[0])<0.1)
    {//hvis flted mere end 10%
        anbefaling = "Sælg";
    }
    
    return anbefaling;

}



function UdskrivKurser()//udskriv kursen for de enkelte dage
{
    for(i=0;i<kurs.length;++i) 
    {
        document.write("Kurs dag "+(i+1)+" : "+kurs[i]+" <br>");
    }
}


function init()
{
    UdskrivKurser();
    document.write("Anbefaling: "+CheckKurser()+" <br>");
}



document.addEventListener("DOMContentLoaded",init,false);
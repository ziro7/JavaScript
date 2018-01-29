


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
Et par
To par
Tre ens
Fire ens
Lav
Høj
Fuldt hus
Chance
Yatzy
*/
//Lav et program som viser "Den lille tabel" (altså tallene fra 1 til 10 ganget med hinanden).
function table() { 
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var row4 = [];
    var row5 = [];
    var row6 = [];
    var row7 = [];
    var row8 = [];
    var row9 = [];
    var row10 = [];
    var matrix = [];
    
    function PopulatedRow(table){
        var rowLocal = [] 
        for(i=table;i<(10*table+1);i){
             rowLocal.push(i);
             i = i+table;
        }
        return rowLocal;
    }

    //first row
    row1 = PopulatedRow(1);
    row2 = PopulatedRow(2);
    row3 = PopulatedRow(3);
    row4 = PopulatedRow(4);
    row5 = PopulatedRow(5);
    row6 = PopulatedRow(6);
    row7 = PopulatedRow(7);
    row8 = PopulatedRow(8);
    row9 = PopulatedRow(9);
    row10 = PopulatedRow(10);
    matrix = [row1, row2, row3, row4, row5, row6,row7,row8,row9,row10];

    return matrix;

    //for (i=1; i < (10+1); i++) {
    //    matrix.push(row1); 
    //}
    //return matrix;
}

table = table();
console.log(table);

//Lav et program, som udskriver tallene fra 1 - 20. Efter hvert tal skal der enten skrives Lige eller Ulige altefter om tallet er lige eller ej.

function displayNumbers(a){
    for (i=1;i<(a+1);i++){
        (i%2>0) ? console.log(i + " is an odd number") : console.log(i + " is a equal number");    
    }
  
   
}
displayNumbers(20);

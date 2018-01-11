
function table() { 
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var matrix = [];
    
    //first row
    for (i=1; i < (10+1); i++) {
        row1.push(i); 
    }

    //second
    for (i=2; i < (20+1); i+2) {
        row2.push(i);
     }

    //second
    for (i=3; i < (30+1); i+3) {
        row3.push(i);
     }

    for (i=1; i < (10+1); i++) {
        matrix.push(row1); 
    }
    return matrix;
}

table = table();
console.log(table);

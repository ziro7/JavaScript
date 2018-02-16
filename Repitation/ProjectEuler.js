
var array=[];

for (i=1; i<1000;i++){
    if (i%3 == 0){
        array.push(i);
    } 
}

for (i=1; i<1000;i++){
    if (i%5 == 0){
        if(i%3 !=0){
            array.push(i);
        }
    } 
}
//console.log(array);
var sum=0;
for (i=0; i<array.length;i++){
    sum += Number(array[i]);
}

//console.log(sum);

var fibonacci = [1,2];
var i = 0;
do {
    fibonacci.push(fibonacci[i]+fibonacci[i+1]);
    i++;
    console.log("i " + i + "ny: " + fibonacci[i])
} while ((fibonacci[i+1]) < 4000000);

fibonacci.pop();


//for (i=2;i<32;i++){
//    fibonacci.push(fibonacci[i-2]+fibonacci[i-1])
//}
console.log(fibonacci);

var sumFib = 0;
for (i=0;i<fibonacci.length;i++){
    if (fibonacci[i]%2 == 0){
        sumFib += fibonacci[i];
    }
}
console.log(sumFib);


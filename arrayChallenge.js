//Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
console.log("Always Hungry -----------------------------------")
function selectHungry(arry){
    for(var i=0;i<arry.length;i++){
        if(arry[i] === "food"){
            console.log("yummy");
        }else{
            console.log("I`am hungry")
        }
    }
}
selectHungry(["food",44,"no","food"]);

//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
console.log("High Pass Filter -----------------------------------")
function highPass(arry,high){
    var newPass = [];
    for(var i=0; i<arry.length ; i++){
        if(arry[i]>high){
            newPass.push(arry[i]);
        }
    }
    return newPass;
}
 var pass = highPass([5,6,7,8,45,67,89,30,12],50);
 console.log(pass);
 
 //Given an array of numbers return a count of how many of the numbers are larger than the average.
 console.log("Better than average -----------------------------------")
 function betterThanAverage(arry){
    var sum=0;
    var average=0;
    var count=0;
    for(var i=0;i<arry.length;i++){
        sum+= arry[i];
    }
    average = sum/arry.length;
    for(var i=0;i<arry.length;i++){
        if(arry[i]>average){
            count++;
        }
    }
    return count;
 }
 var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
 console.log(result);

 //Write a function that will reverse the values an array and return them.
 console.log("Array Reverse -----------------------------------")
function reverse(arry){
    arry.reverse();
    return arry;
}
var result= reverse(["e","m","o", "c", "l", "e", "W"]);
console.log(result);

//Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.
console.log("Fibonacci Array -----------------------------------")
function fibonacciArray(n){
    var firbArr= [0,1];

    for(var i= 2;i<10;i++){
        firbArr[i] = firbArr[i-1]+firbArr[i-2];
    }
    return firbArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


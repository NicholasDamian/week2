//Nicholas Hall, Eagle , 09/16/2016

//Problem 1 & 2 

// var numArray = [18,24,57,98,45,27,3,456,3,35,85];
// // console.log(numArray.indexOf(27));
// var total = 0;
// for (var count = 0 ; count < numArray.length; count++ ){
//     total = total + numArray[count];
// } console.log(total);

//Problem 3 

// var newArray = [];
// newArray.push(1,2,3,4,5,6,7,8,9,10);
// newArray.pop();
// console.log(newArray);

//Problem 4

// function theParty(a,b){
//    var sum =( a + b );
//    console.log(sum);
//    console.log( sum <= 25);
// }
//     theParty(5,5);

//Problem 5

// function longString(string1,string2){
//     var isItLong = (string1 + string2);
//     if(isItLong.length >= 12){
//         console.log("Error, string is too long.")
//     } else{
//         console.log(isItLong);
//     }
// }
// longString("yell","ow")

//Problem 6
var num = 0;
while(num <= 20){
     num++; 
    if (num <= 5){
        console.log("Very Low Number");
    } else if ( num <= 10){
        console.log("Low Number");
    } else if ( num <= 15){
        console.log("High Number");
    } else {
        console.log("Very High Number");
    }
}
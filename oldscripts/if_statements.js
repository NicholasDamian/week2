// if(5 != 5){
    // console.log("wrong");
// } else {
    // console.log("your right");
// }
// || is called a pipe means ( or) if only 1 of the statements are true it runs true 
// && is and both have to be true for true to run 

//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.
var bankAccount = 1;
var debt = 0;
var difference = bankAccount - debt;

if(difference > 0 ){
    console.log("You have " + difference + "$ " + "you can spend!!!"); // ! means not//
} else{
    console.log("You have to sit out on " + difference + "$ " + "worth of coffee untill you get this paid off!");
}

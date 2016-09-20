// var myGrade = Math.random() * 100; //needs to be capitalized//

// if ( myGrade >= 90 ){
//     console.log("congradulations! you've gotten an A");
// } else if( myGrade >= 80){
//     console.log("Sweet keep it up! You have gotten a B!");
// } else if( myGrade >= 70){
//     console.log("Nice you've got a C");
// } else if ( myGrade >= 60){
//     console.log("You need to try harder");
// }
// else { 
//     console.log("You really need to study and put more effort in")
// }


/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. You should
 also deal with the off chance that we don't play at all(i.e., a lockout)
 
 */


var timesWeBeatPatriotsLastSeason = 1;
var timesTheyBeatUs = 2;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.");
}
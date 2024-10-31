const ps = require ("prompt-sync");
const prompt = ps();

//variable that holding my favorite number
const favNum = 14;
let guess = 0;

//using while loop
while ( guess !== favNum){
    guess = parseInt(prompt("Enter your guess: "));

    //guess whether the guess was too high, too low or correct
    if (guess < favNum){
        console.log("Too Low");
    }else if (guess > favNum){
            console.log("Too High");
        }else{
            console.log("Correct");
        }
    }
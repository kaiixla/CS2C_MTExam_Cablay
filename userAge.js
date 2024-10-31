//Coding Problem 3: User Age Categorization
const ps = require ("prompt-sync");
const prompt = ps();

//using prompt for able the user to input its age
let age = prompt("Enter you age: ");
if (age < 5){
    console.log("Toddler");
    }else if (age >= 5 && age <= 12){
        console.log("Child");
    }else if (age >= 13 && age <= 19){
        console.log("Teenager");
    }else if (age >= 20 && age <= 35){
        console.log("Young Adult");
    }else if (age >= 36 && age <= 60){
        console.log("Middle Aged");
    }else{
        console.log("Senior");
    }
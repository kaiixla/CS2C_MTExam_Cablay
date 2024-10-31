//Coding Problem 5: Color Preferences
const ps = require ("prompt-sync");
const prompt = ps ();

//array for the colors to be stored
let favColor = [];

//using for loop
for (let i = 0; i < 2; i++) {
    let color = prompt("Enter three colors you like: ")
    
    //push to add new color to the array
    if(color !== null){
        favColor.push(color);
        console.log("Color Updated:", favColor) //the updated list of array
    }
}
//displaying the final colors
console.log("Final Colors:", favColor) 
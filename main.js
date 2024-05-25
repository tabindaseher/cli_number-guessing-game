#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user will give input for number guessing
// compare user input and computer generated number then show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 - 7 :",
    }]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Hurrah! you guessed right number.");
}
else {
    console.log("Oops! you guessed wrong number.");
}
;

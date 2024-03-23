#! /usr/bin/env node

import inquirer from "inquirer";

//computer will genrate a random number
//2) user will input for a guessing a number
//3) give me a result if its right or wrong ....


const randomnumber = Math.floor(Math.random() * 8 + 1);
console.log(randomnumber);

const answer = await inquirer.prompt([

{
    name: "UserGuessNumber",
type: "number",
message:"Please Guess a Number Between 1-8"




}

])

if(answer.UserGuessNumber === randomnumber){


    console.log("Congrats You Guess Right Number");

} else { console.log("You Guess Wrong Number")



}




#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt({
    message: "Enter Your age:", type: "number", name: "age"
});
 
console.log("InshaAllah! in \t"  + (70 - answers.age) + " years you will be 70 years old.");
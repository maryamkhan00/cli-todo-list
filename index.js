#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let condition = true;
while (condition) {
    let taskList = await inquirer.prompt([
        {
            name: "toDoList",
            type: "input",
            message: "add tasks to your to do list",
        },
        {
            name: "confirmation",
            type: "confirm",
            message: "do you want to add more tasks?",
            default: "false",
        },
    ]);
    tasks.push(taskList.toDoList);
    condition = taskList.confirmation;
}
;
let removeTask = await inquirer.prompt([
    {
        name: "removeTasks",
        type: "confirm",
        message: "do you want to remove the last task?",
        default: "false",
    }
]);
if (removeTask.removeTasks == true) {
    tasks.pop();
    console.log("this is your schedule for today: " + tasks);
}
else {
    console.log("this is your schedule for today: " + tasks);
}
/*understanding Arrays:
let icecreamFlavors = ["chocolate", "cheesecake", "coffee", "cookies n cream"]; //making an array
console.log (icecreamFlavors);
icecreamFlavors.push("vanilla"); //adding elements to array using .push()
console.log (icecreamFlavors);
icecreamFlavors.pop(); //removing last element of array using .pop()
console.log (icecreamFlavors);
icecreamFlavors = icecreamFlavors.concat(["butter pecan", "caramel"]); //concatinating multiple elements to array
console.log (icecreamFlavors); */
/*understanding while loop:
general structure = while(condition){code to be executed} "the code is executed until the condition is true"
let i = 0
while(i <= 10){
    i++;
    console.log(i);
}; */

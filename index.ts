#! /usr/bin/env node

import inquirer from "inquirer";
let tasks = [];
let firstCondition = true;
let condition = true;

while (firstCondition) {
  let userChoice = await inquirer.prompt([
    {
      name: "choices",
      type: "list",
      message: "select an option",
      choices: ["add task", "delete task", "update task", "view task", "exit"],
    },
  ]);

  if (userChoice.choices === "add task") {
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
      condition = taskList.confirmation;

      if (taskList.toDoList === "") {
        console.log("added tasks cannot be left empty!");
      } else {
        tasks.push(taskList.toDoList);
      }
    }
  } else if (userChoice.choices === "delete task") {
    console.log(tasks);
    let removeTask = await inquirer.prompt([
      {
        name: "indexNumber",
        type: "number",
        message: "enter index of task that you want to remove: ",
      },
    ]);
    let removedTask = tasks.splice(removeTask.indexNumber, 1);
    console.log("following task has been deleted: " + removedTask);
  } else if (userChoice.choices === "update task") {
    console.log(tasks);
    let changeTask = await inquirer.prompt([
      {
        name: "indexNumber",
        type: "number",
        message: "enter index of task that you want to update: ",
      },
      {
        name: "newTask",
        type: "input",
        message: "enter a new task to be replaced by the selected task",
      },
    ]);
    tasks[changeTask.indexNumber] = changeTask.newTask;
    console.log(
      "task at index " +
        changeTask.indexNumber +
        " is successfuly updated to " +
        changeTask.newTask
    );
  } else if (userChoice.choices === "view task") {
    console.log("your todos for the day include: " + tasks);
  } else if (userChoice.choices === "exit") {
    firstCondition = false;
  }
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

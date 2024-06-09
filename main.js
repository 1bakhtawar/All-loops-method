import chalk from "chalk";
import inquirer from "inquirer";
//for loop
// let array : string[]= ["apple", "mango", "banana", "orange", "grapes"]
// for(let i = 0; i<array.length; i++){
//     console.log(array[i])
// }
// // for loop
// for(let i = 10; i>0; i--){
//     console.log(i);
// }
//for while
let input1 = await inquirer.prompt([
    {
        name: "answer",
        type: "confirm",
        message: chalk.red("Do you want to continue the loop:?")
    }
]);
while (input1.answer) {
    //body
    console.log(chalk.green("hello there, code with me"));
    let input2 = await inquirer.prompt([
        {
            name: "answer",
            type: "confirm",
            message: chalk.red("Do you want to continue the loop:?")
        }
    ]);
    if (input2.answer == false) {
        input1.answer = false;
    }
}
let i = 11;
do {
    console.log(i + ": Hello there, code with me.");
    i++;
} //agr hm chahty hain k false condition me bhi ak bar kam zror hojay to do while loop use krty hain 
 while (i < 10);

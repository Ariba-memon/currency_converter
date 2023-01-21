#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.karaoke(" Welcome to Currency Converter How can i help you");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
function ready() {
    console.log(' ');
}
ready();
let convertions = {
    "PKR": {
        "USD": 260,
        "DHARAM": 280,
        "PKR": 1,
    },
    "USD": {
        "DHARAM": 280,
        "PKR": 10,
        "USD": 1,
    },
    "DHARAM": {
        "PKR": 70,
        "USD": 10,
        "DHARAM": 1,
    },
};
let answers = await inquirer.prompt([{
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "DHARAM"],
        message: "Currency you have:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "DHARAM"],
        message: "Currency you Want:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount You want:"
    }
]);
const { from, to, amount } = answers;
// let answer = answers.amount = Math.floor(2)
if (answers.from && answers.to && answers.amount) {
    let convertedvalue = convertions[from][to] * amount;
    console.log(`your's curency value is${from}to${to} is ${convertedvalue}`);
}
else {
    "Do not any amount";
}

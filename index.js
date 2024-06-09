import chalk from "chalk";
import inquirer from "inquirer";
// clases player and opponent
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class oppenent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
let Player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    }]);
let Opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        messege: "Please select your Oppenent ",
        choices: ["Skelton", "Alien", "Zombie"]
    }]);
//gather data
let p1 = new player(Player.name);
let o1 = new oppenent(Opponent.select);
do {
    if (Opponent.select == "Skelton") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                choices: ["Attack", "Drink portion", "Run for life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(`${p1.name}:fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}: fuel is ${o1.fuel}`)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.yellow.red("you Loose,Better Then luck Next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(`${o1.name}:fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name}: fuel is ${p1.fuel}`)}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you Winner congratulation  !"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fueldecrease();
            console.log(chalk.bold.green(`you Drink health portion your life is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life..") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Then Next time"));
            process.exit();
        }
    }
    // Alien
    if (Opponent.select == "Alien") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                choices: ["Attack", "Drink portion", "Run for life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(`${p1.name}:fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}: fuel is ${o1.fuel}`)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.yellow.red("you Loose,Better Then luck Next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(`${o1.name}:fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name}: fuel is ${p1.fuel}`)}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you Winner congratulation  !"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fueldecrease();
            console.log(chalk.bold.green(`you Drink health portion your life is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life..") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Then Next time"));
            process.exit();
        }
    }
    // Zombie
    if (Opponent.select == "Zombie") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                choices: ["Attack", "Drink portion", "Run for life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(`${p1.name}:fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}: fuel is ${o1.fuel}`)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.yellow.red("you Loose,Better Then luck Next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(`${o1.name}:fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name}: fuel is ${p1.fuel}`)}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you Winner congratulation  !"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fueldecrease();
            console.log(chalk.bold.green(`you Drink health portion your life is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life..") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Then Next time"));
            process.exit();
        }
    }
} while (true);

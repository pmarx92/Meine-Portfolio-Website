let maximum = parseInt(prompt("Enter the maximum Number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid Number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
    } else {
        console.log("You stopped the Game!");
    }
}

if (guess === "q") {
    console.log("Ok, you Quit")
} else {
    console.log("You got it");
    console.log(`It took you ${attempts} attempts.`);
}

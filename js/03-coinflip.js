let randomNum = Math.round(Math.random());

// Prompt the user to select "Heads" or "Tails"
let choice = prompt("Choose Heads or Tails:");

// Check the result of the coin flip and user's choice
if (randomNum === 0) { 
    if (choice === "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else if (choice === "Tails") {
        alert("The flip was heads but you chose tails...you lose!");
    } else {
        alert("Invalid choice. Please choose 'heads' or 'tails'.");
    }
} else { 
    if (choice === "Heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else if (choice === "Tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else {
        alert("Invalid choice. Please choose 'heads' or 'tails'.");
    }
}

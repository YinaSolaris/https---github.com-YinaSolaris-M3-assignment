let userInput = parseInt(prompt("Enter a number between 1 and 100:"));

if (userInput >= 1 && userInput <= 100) {
    // Check the score and display the corresponding grade
    if (userInput >= 90 && userInput <= 100) {
        console.log("You received an A");
    } else if (userInput >= 80 && userInput <= 89) {
        console.log("You received a B");
    } else if (userInput >= 70 && userInput <= 79) {
        console.log("You received a C");
    } else if (userInput >= 60 && userInput <= 69) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
} else {
    console.log("Only numbers between 1 and 100 are accepted.");
}

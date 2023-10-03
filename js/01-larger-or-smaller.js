let firstInteger = parseInt(prompt("Enter the first integer:"));
let secondInteger = parseInt(prompt("Enter the second integer:"));

// Check which integer is larger and display it
if (firstInteger > secondInteger) {
    document.write("The larger integer is: " + firstInteger);
} else if (secondInteger > firstInteger) {
    document.write("The larger integer is: " + secondInteger);
} else {
    document.write("Both integers are equal.");
}

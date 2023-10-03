let languageCode = prompt("Enter a language code (es, de, en, or fr):");

// Define a variable to store the translated message
let translatedMessage;

switch (languageCode) {
    case "es":
        translatedMessage = "Hola Mundo";
        break;
    case "de":
        translatedMessage = "Hallo Welt";
        break;
    case "en":
        translatedMessage = "Hello World";
        break;
    case "fr":
        translatedMessage = "Bonjour le monde";
        break;
    default:
        translatedMessage = "Hello World";
}

console.log("Hello World translated in " + languageCode + " is: " + translatedMessage);

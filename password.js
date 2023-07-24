function obfuscate(userInput) {
  let output = "";

  for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];

    // Replace specific characters with their corresponding obfuscated characters
    if (char === "a") {
      output += "4";
    } else if (char === "e") {
      output += "3";
    } else if (char === "o") {
      output += "0";
    } else if (char === "l") {
      output += "1";
    } else {
      output += char;
    }
  }

  return output;
}

// Check if there's a command-line argument provided and pass it to the obfuscate function
if (process.argv.length >= 3) {
  const userInput = process.argv[2];
  console.log(obfuscate(userInput));
} else {
  console.log("Please provide a string to obfuscate as a command-line argument.");
}

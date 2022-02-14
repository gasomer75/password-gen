// Assignment code here

// VARIABLES FOR AVAILABLE CHARACTERS
var low = "abcdefghijklmnopqrstuvwxyz";
var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()/\*_";
var chosen = "";

// START HERE WITH PAGE INTRO
// window.alert("Press 'Generate Password' to get started.");

// FUNCTION TO START PROMPTS AND GENERATE PASSWORD
function generatePassword() {
  
  // SET PASSWORD LENGTH WITH VARIABLE AND WINDOW PROMPT
  var lengthText = window.prompt("Choose a password length from 8 to 128 characters.");
  var passwordLength = parseInt(lengthText);

    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert("You have chosen a password length of " + passwordLength + " characters.");
    } else {
      window.alert("You must choose a password length from 8 to 128 characters. Try again");
      return generatePassword();
    }

  // VARIABLES TO DETERMINE PASSWORD CHARACTER CRITERIA
  function charOptions() {
    chosen = "";

    var lowercase = window.confirm("To include lower case letters in your password click 'OK', otherwise click 'CANCEL'.");
      if (!lowercase) {
        window.alert("You WILL NOT have lower case letters in your password");
      } else if (lowercase) {
        window.alert("You WILL have lower case letters in your password.");
        chosen = chosen + low;
      }
    
    var uppercase = window.confirm("To include UPPER case letters in your password click 'OK', otherwise click 'CANCEL'.");
      if (!uppercase) {
        window.alert("You WILL NOT have UPPER case letters in your password");
      } else if(uppercase) {
        window.alert("You WILL have UPPER case letters in your password.");
        chosen = chosen + upp;
      }

    var numbers = window.confirm("To include numbers in your password click 'OK', otherwise click 'CANCEL'.");
      if (!numbers) {
        window.alert("You WILL NOT have numbers in your password");
      } else if(numbers) {
        window.alert("You WILL have numbers in your password.");
        chosen = chosen + num;
      }

    var symbols = window.confirm("To include special symbols in your password click 'OK', otherwise click 'CANCEL'.");
      if (!symbols) {
        window.alert("You WILL NOT have special symbols in your password");
      } else if (symbols) {
        window.alert("You WILL have special symbols in your password."); 
        chosen = chosen + sym;
      }

      if (chosen === null || chosen === "") {
        window.alert("You must choose at least one character type to proceed. Try again.")
        return charOptions();
      }
  };

  charOptions();

  // FUNCTION TO GENERATE NEW PASSWORD BASED ON SELECTED CRITERIA
  var newPass = "";
    for (let i = 0; i < passwordLength; i++) {
        var randomNum = Math.floor(Math.random() * chosen.length);
        newPass += chosen.substring(randomNum, randomNum + 1);
    }
    return newPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment code here
var randomNumber = function(min, max) {
  var character = Math.floor(Math.random() * (max - min + 1) + min);

  return character;
};

// START HERE WITH PAGE INTRO
window.alert("Press 'Generate Password' to get started.");

// FUNCTION TO START PROMPTS AND GENERATE PASSWORD
function generatePassword() {
  
  // PASSWORD LENGTH FUNCTION
  var lengthText = window.prompt("Choose a password length from 8 to 128 characters.");
  var passwordLength = parseInt(lengthText);

    if  (lengthText === "" || lengthText === null || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a valid response. Try again");
      generatePassword();
    } else {
      window.alert("You have chosen a password length of " + passwordLength + " characters.");
    }
  console.log(passwordLength);

  // FUNCTIONS TO DETERMINE PASSWORD CHARACTER CRITERIA
  var characterChoices = function() {
    var lowercase = window.confirm("To include lower case letters in your password click 'OK', otherwise click 'CANCEL'.");
      if (!lowercase) {
        window.alert("You WILL NOT have lower case letters in your password");
      } else {
        window.alert("You WILL have lower case letters in your password.");
        
      }
      console.log(lowercase);

      var uppercase = window.confirm("To include UPPER case letters in your password click 'OK', otherwise click 'CANCEL'.");
      if (!uppercase) {
        window.alert("You WILL NOT have UPPER case letters in your password");
      } else {
        window.alert("You WILL have UPPER case letters in your password.");
        
      }
      console.log(uppercase);

      var numbers = window.confirm("To include numbers in your password click 'OK', otherwise click 'CANCEL'.");
      if (!numbers) {
        window.alert("You WILL NOT have numbers in your password");
      } else {
        window.alert("You WILL have numbers in your password.");
        
      }
      console.log(numbers);

      var symbols = window.confirm("To include special symbols in your password click 'OK', otherwise click 'CANCEL'.");
      if (!symbols) {
        window.alert("You WILL NOT have special symbols in your password");
      } else {
        window.alert("You WILL have special symbols in your password.");
        
      }
      console.log(symbols);
  }
  characterChoices();

  // FUNCTION TO GENERATE NEW PASSWORD BASED ON SELECTED CRITERIA
  
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
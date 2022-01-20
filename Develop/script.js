// Assignment code here
function generatePassword() {
  // window.prompt for password length from 8 to 128 characters
   
  // window.prompt for character selections (1 each), lowercase, uppercase, numbers, symbols

  // window.confirm for each character selection

  // use selected criteria to generate password

  // return value for generated password to write into 

}

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
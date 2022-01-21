// Assignment code here
window.alert("Press 'Generate Password' to get started.")

function generatePassword() {
  console.log("You are clicking me.")
  // PASSWORD LENGTH FUNCTION
  var lengthText = window.prompt("Choose a password length from 8 to 128 characters.");
  var passwordLength = parseInt(lengthText);
   
  console.log(lengthText);
  console.log(passwordLength);

    if  (lengthText === "" || lengthText === null || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a valid response. Try again");
      generatePassword();
    } else {
      window.alert("You have chosen a password length of " + passwordLength + " characters.");
    }
        
        // window.prompt for character selections (1 each), lowercase, uppercase, numbers, symbols

        // window.confirm for each character selection

        // use selected criteria to generate password

        // return value for generated password to write into 
      
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
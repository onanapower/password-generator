//Array of special characters to be included in password

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt(
    "Enter a number between 10 and 64 for the length of the password:"
  );
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Function to generate password with user input
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Enter a number between 10 and 64 for the length of the password:")
  );
  if (passwordLength >= 10 && passwordLength <= 64) {
    alert("Input is Correct!");
    var includeSpecialCharacters = confirm(
      "Would you like to include special characters in your password?"
    );
    var includeNumericCharacters = confirm(
      "Would you like to include numeric characters in your password?"
    );
    var includeLowerCasedCharacters = confirm(
      "Would you like to include lowercase characters in your password?"
    );
    var includeUpperCasedCharacters = confirm(
      "Would you like to include uppercase characters in your password?"
    );
  } else {
    alert(
      "Password length must be between 10 and 64 characters. Please try again."
    );
  }
  // if statements to go with user imput
  let randomCharacters = [];
  if (includeSpecialCharacters) {
    randomCharacters = randomCharacters.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
    randomCharacters = randomCharacters.concat(numericCharacters);
  }
  if (includeLowerCasedCharacters) {
    randomCharacters = randomCharacters.concat(lowerCasedCharacters);
  }
  if (includeUpperCasedCharacters) {
    randomCharacters = randomCharacters.concat(upperCasedCharacters);
  }
  console.log(randomCharacters);
  var password = "";
  for (let i = 0; i < passwordLength; i += 1) {
    password += getRandom(randomCharacters);
  }
  return password;
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

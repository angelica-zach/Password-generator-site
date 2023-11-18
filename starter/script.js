// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// setting global for length, and character choices
var password = {
  length:0,
  lowercase:false,
  uppercase:false,
  numerical:false,
  specialChar:false
};

// Function to prompt user for password options
function getPasswordOptions() {
  password.length= prompt("Choose how many characters you want your password to be (must be between 8 and 128)");
  password.lowercase=confirm("Do you want to use lowercase letters?");
  password.uppercase=confirm("Do you want to use uppercase letters?");
  password.numerical=confirm("Do you want to use numericals?");
  password.specialChar=confirm("Do you want to use special characters?");
 
}
getPasswordOptions();
// checking if has all requirements
if (password.length>=8 && password.length<=128){
 if(password.lowercase||password.uppercase||password.numerical||password.specialChar){
  // if yes then writes password
  writePassword();
    }
    else{
      alert("You have not selected atleast one character type , please try again");
      getPasswordOptions();
    }
 }
else{
  alert("Character amount is not within accepted range , please try again");
  getPasswordOptions();
}

// Function for getting a random element from an array
function getRandom(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Function to generate password with user input
function generatePassword() {
  // selecting which arrays are chosen by user
  var selectedArrays = [
    password.lowercase ? lowerCasedCharacters : [],
    password.uppercase ? upperCasedCharacters : [],
    password.numerical ? numericCharacters : [],
    password.specialChar ? specialCharacters : []
  ].filter(array => array.length > 0);
// creating blank for password so can be added in later and doesnt become local
 var generatePassword="";

  for (var i=0; i<password.length;i++)
  // getting random array and character
  {  var randomChar = getRandom(getRandom(selectedArrays));
   
  // Add the generated character to the  password
  generatePassword += randomChar;
  }
return generatePassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);





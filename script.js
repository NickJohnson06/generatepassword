// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password"); 
  var length = 8,
       charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#%^&*()_+";
  var password = "";
  for (var i = 0, i = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * i));
  }
  return password;

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
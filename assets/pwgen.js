// Assignment Code
var generateBtn = document.querySelector("#generate");
//Password Vars
function generatePassword(){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!@#$%^&*()_-=+[]{}\|:;,./?><";
    var numbers = "1234567890";
    var password = "";
    var character = "";

    // Prompt Vars
    var length = prompt("Provde the desired password length *Between 8 & 128 Characters!*")
    var Plower = confirm("Use lower case letters in password?")
    var Pupper = confirm("Use upper case letters in password?")
    var Pspecial = confirm("Use special characters in password?")
    var Pnumbers = confirm("Use numbers in password?")

    //If/Else Statements for Prompts
    if (length >= 8 && length <= 128){
        console.log(length)
    }
    else {
        alert("Password must be between 8 & 128 characters!")
        return '';
    }
    if (Plower){
        character += lower
    }
    if (Pupper){
        character += upper
    }
    if (Pspecial){
        character += special
    }
    if (Pnumbers){
        character += numbers
    }

    //If statement for no criteria selected
    if (!Pnumbers && !Pupper && !Plower && !Pspecial){
        return alert("Must select one password criteria!")
    }

    //Random characters to meet pw length out of selected criteria
    for (let i = 0; length: i++){
        password += character[Math.floor(Math.random () * character.length)];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


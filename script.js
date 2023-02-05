// Returns the value of the password length
function getVal() {
    const val=document.querySelector('input').value;
    return val;
    console.log(val);
}

function isChecked() {
    const checkBox = document.getElementById('check1').checked;
    if (checkBox === true) {
      console.log(true);
      } else {
        console.log(false);
    }
}


function setcharset() {
    let usercharset = "";
    var uppercasecheck = document.getElementById("uppercase"),
        lowercasecheck = document.getElementById("lowercase"),
          numberscheck = document.getElementById("numbers"),
          symbolscheck = document.getElementById("symbols");
    for (let i = 1; i < 5; i++) {
        if (uppercasecheck.checked == true){
            usercharset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } if (lowercasecheck.checked == true){
            usercharset += "abcdefghijklmnopqrstuvwxyz";
        } if (numberscheck.checked == true){
            usercharset += "0123456789";
        } if (symbolscheck.checked == true){
            usercharset += "~!@#$%^&*()_+`-=[]\{}|;':";
        } else {
            alert("Not a valid customization!")
        }
    }
    return usercharset;
}


//Generates the password
function generatePassword() {
    var length = getVal(),
    //charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    charset = setcharset(),
    retVal = "";

    // Generates the password provided the password length
    for(var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    // Displays the password to the webpage
    document.getElementById("password").innerHTML = retVal;
}


/*
// What happens when the button is clicked
document.getElementById("generate").onclick = function(){

    for(let i = 0; i < pwsize; i++) {

    }
    // Generates a random number between 0 and 9
    let pw = Math.floor(Math.random() * 10);

    // Passes the generated password to the HTML label id
    document.getElementById("password").innerHTML = pw;

}


// Generates a random number
function randomNumber() {

    // Generates a random number between 0 and 9
    let pw = Math.floor(Math.random() * 10);

}

// Generates a random lower case letter
function randomLowerCaseLetter() {

    // Initializes a constant with every letter in the alphabet
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"

    // Uses random to choose a random letter in the alphabet
    return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)]
}

// console.log(randomLowerCaseLetter())

// Generates a random upper case letter
function randomUpperCaseLetter() {

    // Initializes a constant with every letter in the alphabet
    const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Uses random to choose a random letter in the alphabet
    return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)]
}

// console.log(randomUpperCaseLetter())

// Generates a random symbol
function randomSymbol() {

    // Initializes a constant with every letter in the alphabet
    const upperCaseAlphabet = "~!@#$%^&*()_+`-=[]\{}|;':"

    // Uses random to choose a random letter in the alphabet
    return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)]
}

// console.log(randomSymbol())
*/

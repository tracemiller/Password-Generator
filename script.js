// Updates the password length that the user's inputs
var pwsize;
// Runs setsize function when a change to password length is made
document.getElementById("characters").addEventListener("change", setsize);
function setsize() {
    pwsize = document.getElementById("characters");
    // alert(pwsize.value)
}

// What happens when the button is clicked
document.getElementById("generate").onclick = function(){

    // Generates a random number between 0 and 9
    let pw = Math.floor(Math.random() * 10);

    // Passes the generated password to the HTML label id
    document.getElementById("password").innerHTML = pw;

}

function randomNumber() {

    // Generates a random number between 0 and 9
    let pw = Math.floor(Math.random() * 10);

}

function randomLowerCaseLetter() {

    // Initializes a constant with every letter in the alphabet
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"

    // Uses random to choose a random letter in the alphabet
    return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)]
}

console.log(randomLowerCaseLetter())

function randomUpperCaseLetter() {

    // Initializes a constant with every letter in the alphabet
    const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Uses random to choose a random letter in the alphabet
    return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)]
}

console.log(randomUpperCaseLetter())

function randomSymbol() {

    // Initializes a constant with every letter in the alphabet
    const upperCaseAlphabet = "~!@#$%^&*()_+`-=[]\{}|;':"

    // Uses random to choose a random letter in the alphabet
    return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)]
}

console.log(randomSymbol())

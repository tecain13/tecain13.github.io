
var yes = "yes"
var no = "no"
//var strongPassword = "" //try inserting the other ones here and see what happens..?
var numeric = ""
var uppercase = ""
var lowercase = ""
var specialchar = ""
var password = ""

var values = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var loweralpha = "abcdefghijklmnopqrstuvwxyz";
var upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numberupper = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberlower = "0123456789abcdefghijklmnopqrstuvwxyz";
var numbersymbol = "0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numberuppersymbol = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numberupperlower = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var numberlowersymbol = "123456789abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var upperlowersymbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var upperlower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var uppersymbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var lowersymbol = "abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~"

//set password length and complexity
var complexity = document.getElementById("slider").value;
console.log(complexity);

//generate rando password
function generate() {

    //start with prompts
    numeric = prompt("Would you like your password to include numbers? Please respond with 'yes' or 'no'.");

    uppercase = prompt("Would you like your password to include uppercase letters? Please respond with 'yes' or 'no'.");

    lowercase = prompt("Would you like your password to include lowercase letters? Please respond with 'yes' or 'no'.");

    specialchar = prompt("Would you like your password to include special symbols? Please respond with 'yes' or 'no'.");

    //capture all possible boolean combinations 
    if (numeric === yes && uppercase === yes && lowercase === yes && specialchar === yes) {
        //call function to generate password
        // with uppercase, lowercase, numeric, and symbols
        generateStrongPassword();
        console.log("strong");


    } else if (numeric === yes && uppercase === no & lowercase === no && specialchar === no) {

        numericonlyPassword();
    }

    else if (numeric === no && uppercase === yes & lowercase === no && specialchar === no) {
        upperonlyPassword();
    }

    else if (numeric === no && uppercase === no & lowercase === yes && specialchar === no) {
        loweronlyPassword();
    }

    else if (numeric === no && uppercase === no & lowercase === no && specialchar === yes) {
        symbolonlyPassword();
    }

    else if (numeric === yes && uppercase === yes & lowercase === no && specialchar === yes) {
        numberupperPassword();
    }

    else if (numeric === yes && uppercase === no & lowercase === yes && specialchar === no) {
        numberlowerPassword();
    }

    else if (numeric === yes && uppercase === no & lowercase === no && specialchar === yes) {
        numbersymbolPassword();
    }

    else if (numeric === yes && uppercase === yes & lowercase === no && specialchar === yes) {
        numberuppersymbolPassword();
    }

    else if (numeric === yes && uppercase === yes & lowercase === yes && specialchar === no) {
        numberupperlowerPassword();
    }

    else if (numeric === yes && uppercase === no & lowercase === yes && specialchar === yes) {
        numberlowersymbolPassword();
    }

    else if (numeric === no && uppercase === yes & lowercase === yes && specialchar === yes) {
        upperlowersymbolPassword();
    }

    else if (numeric === no && uppercase === yes & lowercase === yes && specialchar === no) {
        upperlowerPassword();
    }

    else if (numeric === no && uppercase === yes & lowercase === no && specialchar === yes) {
        uppersymbolPassword();
    }

    else if (numeric === no && uppercase === no & lowercase === yes && specialchar === yes) {
        lowersymbolPassword();
    }

    //final boolean combination if they don't select any
    else {
        alert("Please say yes to at least one category to generate a password.")
    }


    //add password to display area
    document.getElementById("display").value = password;


}

//now define all of the different functions referenced above
function generateStrongPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    console.log(password);
}

function numericonlyPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length - 1)));
    }

}

function upperonlyPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + upperalpha.charAt(Math.floor(Math.random() * Math.floor(upperalpha.length - 1)));
    }

}

function loweronlyPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + loweralpha.charAt(Math.floor(Math.random() * Math.floor(loweralpha.length - 1)));
    }

}

function symbolonlyPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + symbols.charAt(Math.floor(Math.random() * Math.floor(symbols.length - 1)));
    }

}


function numberupperPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numberupper.charAt(Math.floor(Math.random() * Math.floor(numberupper.length - 1)));
    }
}


function numberlowerPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numberlower.charAt(Math.floor(Math.random() * Math.floor(numberlower.length - 1)));
    }

}

function numbersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numbersymbol.charAt(Math.floor(Math.random() * Math.floor(numbersymbol.length - 1)));
    }

}

function numberuppersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numberuppersymbol.charAt(Math.floor(Math.random() * Math.floor(numberuppersymbol.length - 1)));
    }

}

function numberupperlowerPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numberupperlower.charAt(Math.floor(Math.random() * Math.floor(numberupperlower.length - 1)));
    }
}

function numberlowersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + numberlowersymbol.charAt(Math.floor(Math.random() * Math.floor(numberlowersymbol.length - 1)));
    }

}

function upperlowersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + upperlowersymbol.charAt(Math.floor(Math.random() * Math.floor(upperlowersymbol.length - 1)));
    }

}

function upperlowersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + upperlowersymbol.charAt(Math.floor(Math.random() * Math.floor(upperlowersymbol.length - 1)));
    }

}

function upperlowerPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + upperlower.charAt(Math.floor(Math.random() * Math.floor(upperlower.length - 1)));
    }

}

function uppersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + uppersymbol.charAt(Math.floor(Math.random() * Math.floor(uppersymbol.length - 1)));
    }

}

function lowersymbolPassword() {
    password = ""
    for (var i = 0; i <= complexity; i++) {
        password = password + lowersymbol.charAt(Math.floor(Math.random() * Math.floor(lowersymbol.length - 1)));
    }

}


generate()


//set default length of 20
//document.getElementById("length").innerHTML = "Length: 20";

//function to set length based on slider position
document.getElementById("slider").oninput = function () {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}

//function to copy to clipboard
function copyPassword() {
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard.");
}


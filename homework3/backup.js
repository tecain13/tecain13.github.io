
/*
//declaring initial variables
var result = document.getElementById('result');
var length = document.getElementById('length');
var upperalpha = document.getElementById('uppercase');
var numbers = document.getElementById('numbers');
var specialchar = document.getElementById('symbols');
var generate = document.getElementById('generate');
var clipboard = document.getElementById('clipboard');

//selecting random characters and numbers
var randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
*/


//generate rando password
function generate() {

    //set password length and complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

    let password = "";

    //create for loop to choose password characters
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display area
    document.getElementById("display").value = password;

}


//set default length of 20
document.getElementById("length").innerHTML = "Length: 20";

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
//Generate Password

var passQ = confirm("Would you like to create a Password???");
var passAmt = "How many characters would you like your password to be??? Minimum 8, Maximum 128";
var passSpec = "Would you like to add special characters???";
var passNum = "Would you like to add numeric characters???";
var passLow = "Would you like lowercase characters???";
var passUpp = "Would you like uppercase characters???";
var noPass = "I guess this concludes our session...";

var characterAmount;
var specialCharacters;
var numericCharacters;
var lowercaseCharacters;
var uppercaseCharacters;




if (passQ) {
    promptUser(passAmt);
}
else {
    alert(noPass);
}

function promptUser(msg) {
    if (validate(prompt(msg))) {
        if (confirm(passSpec)) {
            console.log("yes special characters");
            specialCharacters = true;

        }
        else {
            console.log("no special characters");
            specialCharacters = false;
        }


        if (confirm(passNum)) {
            console.log("yes numeric characters");
            numericCharacters = true;
        }
        else {
            console.log("no numeric characters");
            numericCharacters = false;
        }


        if (confirm(passLow)) {
            console.log("yes lowercase characters");
            lowercaseCharacters = true;

        }
        else {
            console.log("no lowercase characters");
            lowercaseCharacters = false;
        }


        if (confirm(passUpp)) {
            console.log("yes uppercase characters");
            uppercaseCharacters = true;

        }
        else {
            console.log("no uppercase characters");
            uppercaseCharacters = false;
        }
    }
    else {
        promptUser(msg);

    }
}


function validate(input) {
    var succeed = false
    console.log("my input is: " + input)
    if (input >= 8 && input <= 128) {
        succeed = true;
        characterAmount = input;
        console.log("succeeded");
    } else {
        console.log("failed");
    }
    return succeed;
}


function generate() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var password = '';
    var all;

    if (specialCharacters) {
        all = all + symbols;
    }

    if (uppercaseCharacters) {
        all = all + uppercase;
    }
    if (lowercaseCharacters) {
        all = all + lowercase;
    }
    if (numericCharacters) {
        all = all + numbers;
    }
    for (var index = 0; index < characterAmount; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    console.log(password);
    document.getElementById("passGenerator").innerHTML = password;
}

function copyToClip() {
    var copyText = document.getElementById("passGenerator");
    copyText.select();
    document.execCommand("copy");
    console.log("copy successful")
}


// function generate(length) {
//     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     var numbers = '0123456789';
//     var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
//     var all = uppercase + lowercase + numbers + symbols;
//     var password = '';
//     for (var index = 0; index < length; index++) {
//         var character = Math.floor(Math.random() * all.length);
//         password += all.substring(character, character + 1);
//     }
//     return password;
// }
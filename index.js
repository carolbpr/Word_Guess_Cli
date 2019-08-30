const inquirer = require("inquirer");
const Word = require('./word.js');
const color = require('colors/safe');
var usastates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana",
    "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var wordselected = usastates[Math.floor(Math.random() * usastates.length)];
var WordApp = new Word();
var alredyguessedletter = [];

var turns = 0;
//var keyCode = event.which;
function start() {
    inquirer.prompt([{
        type: "confirm",
        name: "starting",
        message: "STATES OF AMERICA GUESS WORD\n Would you like to play?\n"
    }]).then(response => {
        if (response.starting === true) {
            WordApp.underscoresFunction(wordselected);
            enterAletter();
        } else {
            console.log("Hope to see you soon!\n")
        }
    })
};
start();
function enterAletter() {
    inquirer.prompt([{
        type: "input",
        name: "UserGuess",
        message: "Guess a letter\n",
    }]).then(response => {
        console.log(alredyguessedletter);
        if (alredyguessedletter.includes(response.UserGuess) && WordApp.complete === false) {
            console.log(color.bgRed("Choose another letter, you already guessed this\n"));
            console.log(WordApp.hiddenLetter.join(" "));
            console.log("\n");
            enterAletter();
        }
        //else if ((keyCode < 65 || keyCode > 90) && complete === false) {
        //    console.log("Please choose just letters");
        //}

        //if it is a new letter then these conditions will identify if the letter is part of the word or not
        else if (WordApp.complete === false) {
            alredyguessedletter.push(response.UserGuess);
            WordApp.findtheLetter(response.UserGuess);
            if (WordApp.lostAturn === true) { turns++ };

            console.log(color.america("\nYou have " + (12 - turns) + " turns left\n"));
            if (turns === 12) {
                console.log(color.orange("Sorry! You lost. Try again !\n"));
                start()
            }
            
        }
        if (WordApp.complete === true) {

            console.log(color.blue("\nGreat Job! The Answer was " + WordApp.wordselected))
            console.log(color.green("\nTry next word\n"));
            nextWord();

        }else enterAletter();

    })

};
function nextWord() {
    turns = 0;
    alredyguessedletter = [];
    WordApp.complete = false;
    WordApp.newLetter = [];
    WordApp.hiddenLetter = [];
    wordselected = usastates[Math.floor(Math.random() * usastates.length)];
    WordApp.underscoresFunction(wordselected);
    enterAletter();
}
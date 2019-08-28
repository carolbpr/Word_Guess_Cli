//calling Letter.js
const Letter = require('./letter.js');
const color = require('colors/safe');
function Word() {

    this.newLetter = [];
    this.hiddenLetter = [];
    this.underscoresFunction = (wordselected) => {
        this.wordselected = wordselected;
        for (var i = 0; i < this.wordselected.length; i++) {
            this.newLetter.push(new Letter(wordselected[i]));
            this.hiddenLetter.push(this.newLetter[i].underscore());
        };
        console.log(this.hiddenLetter.join(" "));
        console.log(this.newLetter);

    }
    this.findtheLetter = (guessLetter) => {
        this.lettercount = 0;
        this.lostAturn = false;
        this.guessLetter = guessLetter;
        for (var i = 0; i < this.wordselected.length; i++) {
            if (this.guessLetter.toUpperCase() === this.wordselected[i].toUpperCase()) {
                this.lostAturn = false;
                this.hiddenLetter[i] = this.guessLetter.toUpperCase();

            } else {
            this.lettercount++;
            this.lostAturn = true;
               
            }
        }
        console.log(this.lostAturn);
        if (this.lettercount === this.wordselected.length) {
            this.turn++
            console.log(color.red("INCORRECT!!!\n"));
        } else {
            console.log("%cCORRECT!!!\n","color:green");
            console.log(this.hiddenLetter.join(" "));
            console.log("\n");
        }
    }

}

module.exports = Word;
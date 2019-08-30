//calling Letter.js
const Letter = require('./letter.js');
const color = require('colors/safe');
function Word() {
    this.complete = false;
    this.newLetter = [];
    this.hiddenLetter = [];
    this.underscoresFunction = (wordselected) => {
        this.wordselected = wordselected;
        for (var i = 0; i < this.wordselected.length; i++) {
            this.newLetter.push(new Letter(wordselected[i]));
            this.hiddenLetter.push(this.newLetter[i].underscore());
        };
        console.log(this.hiddenLetter.join(" "));
        console.log("\n");
        //console.log(this.newLetter);

    }
    this.findtheLetter = (guessLetter) => {
        this.lettercount = 0;
        this.lostAturn = false;
        this.guessLetter = guessLetter;
        for (var i = 0; i < this.wordselected.length; i++) {
            
            if (this.guessLetter.toUpperCase() === this.wordselected[i].toUpperCase()) {
                
                this.hiddenLetter[i] = this.guessLetter.toUpperCase();

            } else if (this.guessLetter.toUpperCase() != this.wordselected[i].toUpperCase()){
                this.lettercount++;
                

            }
        }
        
        if (this.lettercount === this.wordselected.length) {
            this.lostAturn = true;
            console.log(color.red("INCORRECT!!!\n"));
            console.log(this.hiddenLetter.join(" "));
            console.log("\n");
        } else {
            if (this.hiddenLetter.join("") === this.wordselected.toUpperCase()) {
                this.complete = true;
            }
            else if (this.hiddenLetter.join("") != this.wordselected.toUpperCase()) {
                this.lostAturn = false;
                console.log(color.green("CORRECT!!!\n"));
                console.log(this.hiddenLetter.join(" "));
                console.log("\n");
            }
        }
    }
}





module.exports = Word;
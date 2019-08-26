//calling Letter.js
const Letter = require('./letter.js');

function Word() {
    
    this.newLetter = [];
    this.hiddenLetter = [];
    this.underscoresFunction = (wordselected) => {
        this.wordselected = wordselected;
        for (var i = 0; i < this.wordselected.length; i++) { 
            this.newLetter.push(new Letter(wordselected[i]));
            this.hiddenLetter.push(this.newLetter[i].underscore());
        };
        console.log(this.newLetter);
        console.log(this.hiddenLetter);
    }
    
}
var test = new Word ();
test.underscoresFunction("testing");
module.exports = Word;
function Letter(character) {
    this.character = character;
    this.guessed = false;
    if (this.character === " ") {
        this.guessed = true;
    };
};
Letter.prototype.underscore = function() {

    if (this.guessed) {
        console.log(this.character)
        return this.character;
    } else {
        console.log("_");
        return "_";
    }
};
Letter.prototype.letterInWord = (letter) => {
    if (this.character.toUpperCase() === letter.toUpperCase()){
        return true;
    }else {
        return false;
    }
};

module.exports = Letter;
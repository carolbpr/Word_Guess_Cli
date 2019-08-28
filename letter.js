function Letter(character) {
    this.character = character;
    this.blank = false;
    if (this.character === " ") {
        this.blank = true;
    };
};
Letter.prototype.underscore = function() {

    if (this.blank) {
        
        return this.character;
    } else {
        
        return "_";
    }
};

module.exports = Letter;
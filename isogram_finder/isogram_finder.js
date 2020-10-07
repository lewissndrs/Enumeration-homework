const IsogramFinder = function (word) {
    this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
    const wordSplit = this.word.split('')
    // checks that every letter matches a critera
    const result = wordSplit.every((letter)=>{
        // critera
        if(wordSplit.indexOf(letter) === wordSplit.lastIndexOf(letter)) {
            return true;
        } else {
            return false;
        }
    })
    return result;
}

module.exports = IsogramFinder;

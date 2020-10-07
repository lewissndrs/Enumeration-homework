const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const uppered = this.words.map((word) => {
        return word.toUpperCase();
    })
    return uppered;
}

module.exports = UpperCaser;

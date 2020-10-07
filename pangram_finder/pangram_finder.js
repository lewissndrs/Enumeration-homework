const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  const phraseSplit = this.phrase.split('');
  
 
  // checks that the array alphabet will return true against the function
        result = this.alphabet.every((letter) => {
          // check that letter exists in phrase array
          let exists = phraseSplit.includes(letter);
          return exists;
        });
  return result;
}

module.exports = PangramFinder;

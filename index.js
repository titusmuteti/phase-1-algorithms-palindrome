function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    const abba = word.length -1

    if (word[i] === word [abba]) {
      return true
    }else {
      return false
    }
  }
}

/* 
  iterate through a word 
  compare the words being iterated over the corresponding letter at the end of the string"
  if letter match return true
*/

/*
  the function iterates from the beginning of the word 
  compare the letter being iterated over the corresponding letter
  if the letter match return true
  if letter do not match return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

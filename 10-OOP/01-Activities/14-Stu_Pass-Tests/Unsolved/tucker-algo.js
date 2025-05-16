function Algo() {}

Algo.prototype.reverse = function (str) {
  // TODO: Your code here
  // Solution 2:
  // turn our string into an array .split()
  return (
    str
      .split("")
      // reverse the array using the .reverse() method
      .reverse()
      // turn our array back into a string .join()
      .join("")
  );
};

Algo.prototype.isPalindrome = function (str) {
  // TODO: Your code here
  // Solution 1:
  // compare our str, to the reversed version of it
  // SIDE NOTE: How can we use our Algo.prototype.reverse() to help us?
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
  // TODO: Your code here
  // "hello world this is the example" -> .split(" ")
  // ["hello", "world", "this", "is", "the", "example"] -> .split(" ")
  // ["Hello", "World", "This", "Is", "The", "Example"] -> .map()
  // "Hello World This Is The Example" -> .join(" ")
  // Solution:
  return (
    str
      // Split our string, using the " " as a seperator
      .split(" ")
      // Map over our new array, capitalizing the first character
      .map(function (word) {
        // Pull off first character -> "hello" - "h";
        const firstChar = word[0];
        // remove first character from string -> "hello" -> "ello";
        const restOfWord = word.substring(1);
        // capitalize the first character and add to rest of word.
        return firstChar.toUpperCase() + restOfWord;
      })
      // Turn array back into " " seperated string
      .join(" ")
  );
};

module.exports = Algo;

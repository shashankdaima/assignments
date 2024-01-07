/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let result = 0;
  for (let iChar of str.toLowerCase()) {
    if (iChar === 'a' ||
      iChar === 'e' ||
      iChar === 'i' ||
      iChar === 'o' ||
      iChar === 'u') {
        result++;
    }
  }
  return result;
}

module.exports = countVowels;
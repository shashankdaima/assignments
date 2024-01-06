/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const hashMap = {};
  for (let iChar of str1.toLowerCase()) {
    // console.log(char);
    if (iChar in hashMap) {
      hashMap[iChar] = hashMap[iChar] + 1;
    } else {
      hashMap[iChar] = 1;
    }
  }
  for (let iChar of str2.toLowerCase()) {
    // console.log(char);
    if (iChar in hashMap) {
      let icount = hashMap[iChar] - 1;
      if (icount < 0) {
        return false;
      }
      else {
        hashMap[iChar] = icount;
      }
    } else {
      return false;
    }
  }
  for (let key in hashMap) {
    if (hashMap.hasOwnProperty(key)) {
      const value = hashMap[key];
      // console.log(value);
      if (value != 0) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isAnagram;

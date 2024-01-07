function isPalindrome(str) {
  let lowerCaseStr = "";
  const regex = /[a-zA-Z0-9]/; //Use ChatGPT to get the regex lol.

  for (let iStrChar of str) {
    if (regex.test(iStrChar)) {
      lowerCaseStr += iStrChar;
    }
  }

  lowerCaseStr = lowerCaseStr.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length / 2; i++) {
    if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let result=Number.MIN_SAFE_INTEGER;
    for(let number of numbers){
        if(number>result){
            result=number;
        }
    }
    if(result===Number.MIN_SAFE_INTEGER){
        return undefined;
    }
    return result;
}

module.exports = findLargestElement;
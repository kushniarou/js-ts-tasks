/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]); // Push the current number to the result array
    if (arr[i] % 2 !== 0) {
      // Check if the number is odd
      result.push(100); // Insert 100 after odd numbers
    }
  }
  return result;
};

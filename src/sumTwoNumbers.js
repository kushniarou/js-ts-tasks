/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let sum = Number(firstNumber.toString().replace(/\s/g, '')) + Number(secondNumber.toString().replace(/\s+/g, ''));
  return sum;
};

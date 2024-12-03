/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxLength = 0; // Длина максимальной подстроки
  let endIndex = 0; // Индекс окончания подстроки в str1
  const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i;
        }
      }
    }
  }
  // Извлекаем максимальную подстроку
  return str1.slice(endIndex - maxLength, endIndex);
};

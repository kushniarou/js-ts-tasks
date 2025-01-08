/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  let j = promisesArray.length;

  return new Promise((resolve, reject) => {
    const results = new Array(j);
    promisesArray.forEach((promise, i) => {
      promise
        .then(res => {
          results[i] = res;
          j -= 1;
          if (j === 0) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};

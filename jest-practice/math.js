const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
function uppercase(str, callback) {
  callback(str.toUpperCase());
}
const lowercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string');
      return;
    }
    resolve(str.toLowerCase());
  });
};

module.exports = { sum, mul, sub, div, uppercase, lowercase };

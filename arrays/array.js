const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 20, 21];

function getMinMax(arr) {
  const newarr = arr.slice().sort((a, b) => a - b);
  return [newarr[0], newarr[newarr.length - 1]];
}

/* Algos */

/* Q1 */
const str = "Successive";

function longestRepetition(s) {
  checker = 1;
  real = 0;
  letter = "";
  if (!s) return ["", 0];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      checker++;
      if (checker > real) {
        real = checker;
        letter = s[i];
      }
    } else {
      if (checker > real) {
        real = checker;
        letter = s[i];
      }
      checker = 1;
    }
  }
  return [letter, real];
}

console.log(letterc(str));

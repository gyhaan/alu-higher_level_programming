const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 20, 21];

function getMinMax(arr) {
  const newarr = arr.slice().sort((a, b) => a - b);
  return [newarr[0], newarr[newarr.length - 1]];
}

/* Algos */
const str = "Successive";

function letterc(str) {
  checker = 1;
  real = 0;
  letter = "";
  if (!str) return ["", 0];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      checker++;
    } else {
      if (checker > real) {
        real = checker;
        letter = str[i];
      }
      checker = 1;
    }
  }
  return [letter, real];
}

console.log(letterc(str));

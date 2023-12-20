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

/* Q2 */
function intersect(arr1, arr2) {
  const union = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !union.includes(arr1[i])) {
        union.push(arr1[i]);
      }
    }
  }
  return union;
}

/* Q3 */
function trial(str) {
  if (str.includes("-")) {
    const arr = str.split("-").map((el, i) => {
      if (i === 0) {
        return el;
      } else {
        return el[0].toUpperCase() + el.slice(1);
      }
    });
    return arr.join("");
  } else if (str.includes("_")) {
    const arr = str.split("_").map((el, i) => {
      if (i === 0) {
        return el;
      } else {
        return el[0].toUpperCase() + el.slice(1);
      }
    });
    return arr.join("");
  } else {
    return str;
  }
}

/* Q4 */
function retDuplicates(arr) {
  const duplicate = [];
  arr.forEach((el) => {
    if (!duplicate.includes(el)) {
      duplicate.push(el);
    }
  });
  return duplicate;
}

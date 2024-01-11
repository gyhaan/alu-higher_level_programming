const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 20, 21];

function getMinMax(arr) {
  const newarr = arr.slice().sort((a, b) => a - b);
  return [newarr[0], newarr[newarr.length - 1]];
}

const array1 = ["one", "two", "three"];

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

/* Q5 */
function returnDuplicates(arr) {
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    const index = arr.indexOf(arr[i]);
    console.log(index);
    if (index !== i) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
}

/* Q4 */
function countLetter(str) {
  const tally = {};
  for (let i = 0; i < str.length; i++) {
    tally[str[i]] = (tally[str[i]] || 0) + 1;
  }
}

/* Q5 */
function factorial(n) {
  return n(n + 1) / 2;
}

/* Q6 */
function findSumPairs(arr, value) {
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        console.log([arr[i], arr[j]]);
        return true;
      }
    }
  }
  return bool;
}

/* Q7 */
function duplicate(arr) {
  const newarr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    console.log(newarr);
    newarr.splice(i, 0, arr[i]);
  }
  console.log(newarr);
  return newarr.sort((a, b) => a - b);
}

/* OR */
function duplicate1(arr) {
  return arr.map((el) => [el, el]).flat();
}

/* Q8 */
function norepeat(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str.split("").indexOf(str[i]) === str.split("").lastIndexOf(str[i]) &&
      str[i].toUpperCase() !== str[i].toLowerCase()
    ) {
      arr.push(str[i]);
    }
  }
  return arr;
}

/* Q9 */
function dominator(arr) {
  const tally = {};
  arr.forEach((el, i) => {
    tally[arr[i]] = (tally[arr[i]] || 0) + 1;
  });
  checker = Object.entries(tally);
  console.log(checker);
  dominate = [[0, 0]];
  checker.forEach((el, i) => {
    if (el[1] > dominate[0][1]) {
      dominate = [el];
    }

    if (el[1] === dominate[0][1] && el[0] !== dominate[0][0]) {
      console.log(el);
      dominate.push(el);
      console.log(dominate);
    }
  });

  if (dominate.length !== 1) {
    return -1;
  } else {
    return dominate[0][0];
  }
}

/* Q10 */
function noRepeat(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      continue;
    } else {
      arr.push(str[i]);
    }
  }
}

/* Q11 */
function validIP(str) {
  const arr = str.split(".");
  if (arr.length !== 4) return "Invalid IPv4 address";
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) >= 0 && Number(arr[i]) <= 255 && arr[i][0] !== "0") {
      continue;
    } else {
      return "Invalid IPv4 address";
    }
  }
  return "Valid IPv4 address";
}

/* Q12 */
function moveZeroes(arr) {
  let zeroarr = [];
  let nonzeroarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroarr.push(0);
    } else {
      nonzeroarr.push(arr[i]);
    }
  }
  arr.length = 0;
  arr.push(...nonzeroarr, ...zeroarr);
  return arr;
}

/* Q14 */
function palindrome(str) {
  const regex = /[^a-zA-Z0-9]+/g;
  const arr = str.split(regex).join("").toLowerCase();
  console.log();
  return arr === arr.split("").reverse().join("");
}

/* Q15 */
function secondSymbol(s, symbol) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== i && s[i] === symbol) {
      return i;
    }
  }
  return -1;
}

/* Q16 */
function smaller(nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        counter++;
      }
    }
    arr.push(counter);
  }
  return arr;
}

/* Q17 */
function rotate(arr, key) {
  if (key < 0 || typeof key === "undefined") return arr;
  if (Math.abs(arr.length - key) > arr.length) return arr.reverse();
  const arr1 = arr.slice(arr.length - key);
  arr.splice(arr.length - key, key);
  arr.splice(0, 0, ...arr1);
  return arr;
}

/* Q18 */
function removeDuplicates(arr) {
  const retarray = [];
  const underscorearr = [];
  let k = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (!retarray.includes(arr[i])) {
      retarray.push(arr[i]);
      k++;
    } else {
      underscorearr.push("_");
    }
  }
  arr.length = 0;
  arr.push(...retarray, ...underscorearr);
  return k;
}

/* Q19 */
function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      let num = arr[i + 1] - arr[i];
      profit += num;
    }
  }
  return profit;
}

/* Q20 */
function twoSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        return [i, j];
      }
    }
  }
}

/* Q21 */
function singleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i && arr.lastIndexOf(arr[i]) === i) {
      return arr[i];
    }
  }
}

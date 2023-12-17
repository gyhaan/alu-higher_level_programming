const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 20, 21];

function getMinMax(arr) {
  const newarr = arr.slice().sort((a, b) => a - b);
  return [newarr[0], newarr[newarr.length - 1]];
}

/* What is a callback function */

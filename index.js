// Edit array here
const arr = [2, 5, 1, 0, 8, 2, 8, 0, 3, 5, 7];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = parseInt(arr.length / 2),
    low = mergeSort(arr.slice(0, mid)),
    high = mergeSort(arr.slice(mid)),
    i = 0,
    j = 0,
    result = [];

  // Merge
  while (i < low.length && j < high.length) {
    if (high[j] > low[i]) {
      result.push(low[i]);
      i++;
    } else {
      result.push(high[j]);
      j++;
    }
  }
  while (i < low.length) {
    result.push(low[i]);
    i++;
  }
  while (j < high.length) {
    result.push(high[j]);
    j++;
  }

  return result;
}

console.log("Array to be sorted: ", arr);
console.log("Sorted array: ", mergeSort(arr));
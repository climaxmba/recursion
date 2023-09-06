function mergeSort(arr = [8, 0, 5, 3, 7, 7, 5, 9, 10]) {
  if (arr.length <= 1) return arr;

  let mid = parseInt(arr.length / 2);
  let low = mergeSort(arr.slice(0, mid));
  let high = mergeSort(arr.slice(mid));
  return merge(low, high);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(mergeSort());
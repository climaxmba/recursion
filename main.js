function mergeSort(arr = [8, 0, 5, 3, 7, 7, 5, 9, 10]) {
  if (arr.length <= 1) return arr;

  let mid = parseInt(arr.length / 2);
  let low = mergeSort(arr.slice(0, mid));
  let high = mergeSort(arr.slice(mid));
  return merge(low, high);
}

console.log(mergeSort());
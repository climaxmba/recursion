function mergeSort(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  const low = 0,
    high = arr.length - 1,
    mid = parseInt(low + high / 2);

  let splitted = []
  if (low + 1 < high) {
    splitted.push(...mergeSort(arr.slice(low, mid)));
    splitted.push(...mergeSort(arr.slice(mid)));
  } else {
    return arr;
  }

  // return merged array
  return splitted;
}

mergeSort();

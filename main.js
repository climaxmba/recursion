function mergeSort(arr = [3, 5, 0, 7, 3, 5, 3, 8, 4, 9]) {
  const low = 0,
    high = arr.length - 1,
    mid = parseInt(low + high / 2);

  if (low < high) {
    mergeSort(JSON.parse(JSON.stringify(arr)).splice(low, mid));
    mergeSort(JSON.parse(JSON.stringify(arr)).splice(mid + 1, high));
  }
}

mergeSort();

function insertionSort(arr) {
  // Loop through each element of the array
  for (let i = 1; i < arr.length; i++) {
    // Set the current element as the key
    let key = arr[i];
    let j = i - 1;
    
    // Move elements of the sorted subarray to the right
    // until we find the correct position for the key
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j - 1;
    }
    arr[j+1] = key;
  }
  
  return arr;
}
console.log(insertionSort([3, 5, 1, 8, 2, 9, 4]))
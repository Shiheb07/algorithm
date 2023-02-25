// // Function to calculate dot product
// function dot_product(v1, v2) {
//     let ps = 0;
//     for (let i = 0; i < v1.length; i++) {
//       ps += v1[i] * v2[i];
//     }
//     return ps;
//   }
  
//   // Function to determine if two vectors are orthogonal
//   function are_orthogonal(v1, v2) {
//     return dot_product(v1, v2) === 0;
//   }
  
//   // Test cases
//   let v1 = [1, 2, 3];
//   let v2 = [4, 5, 6];
//   let v3 = [-1, 2, -1];
//   let v4 = [2, -4, 2];
  
//   console.log(dot_product(v1, v2)); // Output: 32
//   console.log(dot_product(v3, v4)); // Output: 0
  
//   console.log(are_orthogonal(v1, v2)); // Output: false
//   console.log(are_orthogonal(v3, v4)); // Output: true
  

//_______________________________##________________________________//


//Task-2:

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



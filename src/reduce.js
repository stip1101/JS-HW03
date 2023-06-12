'use strict';

function myReduceRight(arr, callback, startValue) {
    let result = startValue !== undefined ? startValue : arr[arr.length - 1];
    
    for (let i = arr.length - 2; i >= 0; i--) {
      result = callback(result, arr[i], i, arr);
    }
    
    return result;
  }
  
  const arrArr2 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
   
  console.log(myReduceRight(arrArr2, (a, b) => a.concat(b))); 
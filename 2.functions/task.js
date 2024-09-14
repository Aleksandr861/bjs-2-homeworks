'use strict'
function getArrayParams(...arr) {
  let min =  Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return {min: min, max: max, avg: avg };
}




function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}




function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if(arr === 0) {
    min = 0;
    max = 0;
  }
  return max - min;
}




function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 1) {
      sumOddElement = sumOddElement + arr[i];
    }else {
      sumEvenElement = sumEvenElement + arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement += 1;
    }else if(arr === 0) {
      min = 0;
      max = 0;
    }
  }
  
  return sumEvenElement / countEvenElement;
}



function makeWork (arrOfArr, ...result) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    const result = arrOfArr[i];
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
makeWork(arrOfArr, ...result);
// makeWork(1, 2, 3, 4, 5, summElementsWorker);
// console.log(makeWork(arr, summElementsWorker));// максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker));
// console.log(makeWork(arr, differenceEvenOddWorker)); 
// console.log(makeWork(arr, averageEvenElementsWorker));


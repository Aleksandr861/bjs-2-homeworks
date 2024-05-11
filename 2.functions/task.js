'use strict'
function getArrayParams(...arr) {
  let min =  Infinity; 
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(...arr);
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
      } else if (arr[i] < min) {
      min = arr[i];
      }  
  }
  avg = Number((sum / arr.length).toFixed(2));
  return {min: min, max: max, avg: avg };
}
getArrayParams();






function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
summElementsWorker();







function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  return max - min;
}
differenceMaxMinWorker();






function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sumOddElement = sumOddElement + arr[i];
    } else if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      }
  }
  return console.log(sumEvenElement - sumOddElement);
}
differenceEvenOddWorker ();


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker();



function makeWork (arrOfArr, func) {
  const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func (arrOfArr[i])
  }
}
makeWork(1, 2, 3, 4, 5, summElementsWorker);
// console.log(makeWork(arr, summElementsWorker));// максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker));
// console.log(makeWork(arr, differenceEvenOddWorker)); 
// console.log(makeWork(arr, averageEvenElementsWorker));
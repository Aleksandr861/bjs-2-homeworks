'use strict';
function solveEquation(a, b, c) {
  const discriminant = (b * b) - (4 * a * c);
  let arr = [];
  if (discriminant === 0) {
    arr = [-b / (2 * a)];
    } else if (discriminant > 0) {
      arr = [(-b + Math.sqrt(discriminant) )/(2 * a), (-b - Math.sqrt(discriminant) )/(2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let P = (percent * 0.01) / 12;
    let S = amount - contribution;
    let n = countMonths;
    let monthly = S * (P + (P / (((1 + P)**n) - 1)));
    let total = monthly * countMonths;
    if (total != 0) {
      return +total.toFixed(2);
    } else {
      total = 0;
      return total;
  }
}
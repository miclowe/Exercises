// Problem 1
// Find the sum of all the multiples of 3 or 5 below 1000.
function multiplesOf3And5() {
  var total = 0;
  for (var i = 3; i < 1000; i += 1) {
    if (i%3 === 0 || i%5 === 0) {
      total += i;
    }
  }
  return total;
}
alert("The sum of all the multiples of 3 or 5 below 1000 is " + multiplesOf3And5() + ".");

// Problem 2
// Find the sum of the even values of the Fibonacci sequence below 4,000,000
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
function sumEvenFibonacci(max) {
  var total = 0;
  var num1 = 1;
  var num2 = 2;

  while (num2 <= max) {
    if (num2 % 2 === 0) {
      total += num2;
    }
    next_num = num1 + num2;
    num1 = num2;
    num2 = next_num;
  }
  return total;
}
alert("The sum of the even values of the Fibonacci sequence below 4,000,000 is " + sumEvenFibonacci(4000000) + ".");


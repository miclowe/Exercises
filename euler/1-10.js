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
alert(multiplesOf3And5());

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
alert(sumEvenFibonacci(4000000));

// # Problem 3
// # The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?

function maxPrimeFactors(num) {
  // First prime number
  var x = 2;
  var primes = [];

  while (num > 1) {
    if (num % x === 0) {
      primes.push(x);
      num = num / x;
    } else {
      x += 1;
    }
  }
  maxPrime = primes[0];
  for (var i = 1; i < primes.length; i += 1) {
    if (primes[i] > maxPrime) {
      maxPrime = primes[i];
    }
  }
  return maxPrime;
}
alert(maxPrimeFactors(600851475143));

// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(num) {
  var n = num.toString();
  return Number(n.split('').reverse().join(''));
}

function maxPalindromeProduct(min,max) {
  var product = 0;
  var lrg_pal = 0;
  for (var i = max; i > min; i -= 1) {
    for (var j = max; j > min-1; j -= 1) {
      product = i * j;
      if ((product > lrg_pal) && (product === checkPalindrome(product))) {
        lrg_pal = product;
      }
    }
  }
  return lrg_pal;
}

alert(maxPalindromeProduct(100,999));

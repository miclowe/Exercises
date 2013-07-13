// Problem 1 - Multiples of 3 and 5
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

// Problem 2 - Even Fibonacci Numbers
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

// Problem 3 - Largest Prime Factor
// The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?

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

// Problem 4 - Largest Palindrome Product
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

// Problem 5 - Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function divisible(product,max) {
  for (var j = 2; j < max; j += 1) {
    if (product % j !== 0) {
      return false;
    }
  }
  return true;
}

function minDivByAll(num) {
  var minDiv = 0;
  var product = 0;
  var n = num;
  while (minDiv === 0) {
    product = num * n;
    if (divisible(product,num)) {
      minDiv = product;
    } else {
      n += 1;
    }
  }
  return minDiv;
}

alert(minDivByAll(10));

// Problem 6 - Sum Square Difference
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function diffSquares(num) {
  var sumNums = 0;
  var sumSq = 0;
  for (var i = 1; i <= num; i += 1) {
    sumNums += i;
    sumSq += i*i;
  }
  return sumNums*sumNums - sumSq;
}

alert(diffSquares(100));

// Problem 7 - 10001st Prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10,001st prime number?

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function prime(num) {
  // First prime number
  var x = 2;
  var primes = [];
  while (primes.length < num) {
    if(isPrime(x)) {
      primes.push(x);
    }
    x += 1;
  }
  return primes[num - 1];
}

alert(prime(10001));

// Problem 8 - Largest Product in a Series
// Find the greatest product of five (5) consecutive digits in the 1000-digit number.

function lrgProduct(digit) {
  var num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  // var num = 731671765313306;
  var num_arr = num.split("");
  var maxProduct = 0;
  for (var i = 0; i < num_arr.length - digit; i += 1) {
    var product = 1;
    for (var j = 0; j < digit; j += 1) {
      product = product * num_arr[i + j];
    }
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

alert(lrgProduct(5));
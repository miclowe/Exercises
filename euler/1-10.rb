# Problem 1 - Multiples of 3 and 5
# Find the sum of all the multiples of 3 or 5 below 1000.

def multiples_of_3_and_5
  total = 0
  (3...1000).each do |x|
    if x % 3 == 0 || x % 5 == 0
      # puts x
      total += x
    end
  end
  total
end
puts multiples_of_3_and_5

# Problem 2 - Even Fibonacci Numbers
# Find the sum of the even values of the Fibonacci sequence below 4,000,000
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

def sum_even_fibonacci(max)
  arr = [1,2]
  while arr[-1] + arr[-2] <= max
    arr << arr[-1] + arr[-2]
  end
  total = 0
  arr.each { |x| total += x if x.even? }
  total
end
puts sum_even_fibonacci(4000000)

# Problem 3 - Largest Prime Factor
# The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

require 'prime'
def max_prime(num)
  Prime.prime_division(num).flatten.uniq.sort.max
end
puts max_prime(600851475143)

# Problem 4 - Largest Palindrome Product
# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

def max_palidrome_product(min, max)
  lrg_pal = 0
  max.downto(min) do |i|
    i.downto(min) do |j|
      product = i * j
      if product > lrg_pal && product.to_s == product.to_s.reverse #it's a palindrome
        # puts "i = #{i}"
        # puts "j = #{j}"
        lrg_pal = product
      end
    end
  end
  lrg_pal
end

puts max_palidrome_product(100,999)

# Problem 5 - Smallest Multiple
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
# Solution: Find least common multiple of numbers

def min_divisible_by_all(num)
  (1..num).inject(:lcm)
end

puts min_divisible_by_all(20)

# Problem 6 - Sum Square Difference
# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def diff_squares(num)
  sum_of_nums = (1..num).inject { |sum, x| sum + x }
  sum_of_sq = (1..num).inject { |sum, x| sum + x**2 }
  sum_of_nums**2 - sum_of_sq
end

puts diff_squares(100)

# Problem 7 - 10001st Prime
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10,001st prime number?

require 'prime'

def prime(num)
  (Prime.first num).last
end

puts prime(10001)

# Problem 8 - Largest Product in a Series
# Find the greatest product of five (5) consecutive digits in the 1000-digit number.

def lrg_product(digits)
  num = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450

  products = []

  # Convert to string then to array and back to integers
  num_str = num.to_s.split("").map {|x| x.to_i}

  num_str.each_cons(digits) do |a|
    products << a.inject(:*)
  end

  products.max
end

puts lrg_product(5)
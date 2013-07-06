# Problem 1
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

# Problem 2
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

# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

require 'prime'
def max_prime(num)
  Prime.prime_division(num).flatten.uniq.sort.max
end
puts max_prime(600851475143)

# Problem 4
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

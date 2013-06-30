# The Cue Programming Challenge
# Level 2
# Find the first prime fibonacci number larger than a given minimum
# For example, the first prime fibonacci number larger than 10 is 13.

# Use your code to compute the smallest prime fibonacci number greater than 227,000.  Call this number X.
# The password for level 3 is the sum of prime divisors of X + 1.

require 'prime'
# http://www.ruby-doc.org/stdlib-1.9.3/libdoc/prime/rdoc/Prime.html

def fibonacci(n)
  if n < 2
    return n
  end
  arr = [0,1]
  n.times do
    b = arr[-1] + arr[-2]
    arr << b
  end
  arr[n-1]
end

def next_fibonacci_prime(num)
  # First prime number of fibonacci is 2 (3rd element)
  x = 3
  while true
    n = fibonacci(x)
    x += 1
    if n > num
      if n.prime?
        return n
      end
    else
      next
    end
  end
end

def sum_prime_divisors(next_fib)
  total = 0
  prime_nums = Prime.prime_division(next_fib).flatten.uniq
  prime_nums.each do |num|
    # Prime.prime_division returns all factors of number including 1
    if Prime.prime?(num)
      total += num
    end
  end
  total
end

x = next_fibonacci_prime(227000) + 1
# puts Prime.prime_division(x)
puts sum_prime_divisors(x)

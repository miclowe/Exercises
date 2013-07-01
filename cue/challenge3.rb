# The Cue Programming Challenge
# Level 3
# For the final task, you must find all subsets of an array where the largest number is the sum of the remaining numbers.
# For example, for an input of: (1, 2, 3, 4, 6) the subsets would be

#   1 + 2 = 3
#   1 + 3 = 4
#   2 + 4 = 6
#   1 + 2 + 3 = 6

# The password is the number of subsets.  In the above case the answer would be 4.

# Powerset of a set is all the possible subsets
# For example, for set (x,y,z), the entire powerset would include: (x),(y),(z),(xy),(xz),(yz),(xyz), plus the empty set ()

# Slow, but it works.

nums = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99]
# nums = [1, 2, 3, 4, 6]

# The Array power set is stolen from http://snippets.dzone.com/posts/show/3524
class Array
  # Returns the "power set" for this Array. This means that an array with all
  # subsets of the array's elements will be returned.
  def power_set
    # the power set line is stolen from http://johncarrino.net/blog/2006/08/11/powerset-in-ruby/
    inject([[]]){|c,y|r=[];c.each{|i|r<<i;r<<i+[y]};r}
  end

  def sum
    self.inject{ |sum, x| sum + x }
  end
end

counts = 0
power = nums.power_set
power.each do | set |
  if set.length > 1
    max = set.max
    if set.sum - max == max
      counts += 1
    end
  end
end
puts counts

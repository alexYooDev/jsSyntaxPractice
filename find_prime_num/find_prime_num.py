from itertools import permutations
import math

def is_prime(n):
  if n == 0 or n == 1:
    return False
  else:
    for i in range(2, int(math.sqrt(n))+1):
      if n%i == 0:
        return False
    return True

def solution(numbers):
  answer = []
  for i in range(1, len(numbers)+1):
    arr = list(permutations(numbers, i))
    for j in range(len(arr)):
      num = int(''.join(arr[j]))
      if is_prime(num):
        answer.append(num)
  return len(set(answer))

print(solution('17'))

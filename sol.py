def solution(answers):
  student = {1: [1,2,3,4,5], 2: [2,1,2,3,2,4,2,5], 3:[3,3,1,1,2,2,4,4,5,5]}
  scores = {1:0 ,2:0 ,3:0};

  for idx, answer in enumerate(answers):
    for key, value in student.items():
      if answer == value[idx % len(value)]:
        scores[key] += 1

  maxVal = max(scores.value())
  result = [key for key, value in scores.items() if value == maxVal]

  return result; 
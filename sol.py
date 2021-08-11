n = int(input())
total = 0
avg = 0
count = 0

while True:
    total = total + n
    count = count + 1
    avg = total/count
    if n == 0:
        print(avg)
        break 
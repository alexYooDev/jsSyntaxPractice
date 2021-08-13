# 비밀번호를 만들어주는 함수 yoonHa()를 만들어봅시다.
survivors = list(range(1, 101))
stick_owner_idx = 0

while len(survivors) > 1:
    loser = (stick_owner_idx + 1) % len(survivors)
    del survivors[loser]
    stick_owner_idx = loser
    print(survivors)
print(survivors[0])
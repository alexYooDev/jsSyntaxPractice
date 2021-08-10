import random

class candy_box:
  def __init__(self, nametag, candy):
    self.nametag = nametag
    self.candy = candy
    if self.nametag == self.candy:
      self.isCorrect = True
    else:
      self.isCorrect = False

  def open_box(self):
    if self.nametag == self.candy:
      self.isCorrect = True
    else:
      self.isCorrect = False
    print('===========================================')
    print('사탕 상자의 이름은', self.nametag)
    print('들어있는 사탕은', self.candy)
    print('사탕 상자의 이름과 사탕의 일치 여부 :', self.isCorrect)
    print('===========================================')

candy_pool = ['호박', '박하', '혼합']
candy_name = []

pick_candy = random.choice(candy_pool)

for i in range(len(candy_pool)):
  while(pick_candy in candy_name) or (pick_candy == candy_pool[i]):
    pick_candy = random.choice(candy_pool)
  candy_name.append(pick_candy)

candy_box1 = candy_box(candy_pool[0], candy_name[0])
candy_box2 = candy_box(candy_pool[1], candy_name[1])
candy_box3 = candy_box(candy_pool[2], candy_name[2])

candy_box3.open_box()
class Rectangle:

  def __init__(self, width, height):
    self.width = width
    self.height = height
        
    '''1. Rectangle 클래스를 완성해봅시다.'''
    
  def area(self):
    area = self.width * self.height
    return area

class Square(Rectangle):
  """2. Square 클래스를 정의하고, 완성해봅시다."""
  def __init__(self, side):
      super().__init__(side,side)
      self.side = side

  def area(self):
    area = self.side**2 
    return area


elice = Rectangle(10, 20)
print(elice.area())

bob = Square(10)
print(bob.area())

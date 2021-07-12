// weakMap 활용

function Area(height, width) {
  this.height = height;
  this.width - width;
}

Area.prototype.getArea() = function(){
  return this.height * this.width;
};

let myArea = new Area(10,20);
console.log(myArea.getArea());

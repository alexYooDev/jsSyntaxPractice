// weakMap 활용

// 전역 참조를 허용하지 않는 private한 변수 만드는 법 , 효율적으로 객체에 대한 추가정보를 저장한다.
const wm = new WeakMap();

function Area(height, width) {
  // this.height = height;
  // this.width = width;
  wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
  return this.height * this.width;
};

let myArea = new Area(10, 20);
console.log(myArea.getArea());
console.log(myArea.height);

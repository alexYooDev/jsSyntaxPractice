class Human {
  //생성자로 인간이 가진 속성을 넘겨 준다
  constructor(name, age) {
    // this.name = 생성자가 속한 Human 클래스 Human.name = name을 저장한다.
    this.name = name;
    // this.age = 생성자가 속한 Human 클래스 Human.age = age를 저장한다.
    this.age = age;
  }

  //Human 클래스가 가진 동작 : 이름 말하기
  sayName() {
    // 자기 자신의 이름을 말한다.
    console.log(this.name);
  }
  // 나이를 말한다.
  sayAge() {
    // 자기 자신의 나이를 말한다.
    console.log(this.age);
  }
}

// 휴먼 클래스에게 상속받아 개발자 클래스를 선언
class Programmer extends Human {
  // 생성자로 개발자가 가진 속성 (휴먼의 이름, 나이, 자기 자신의 언어들) 을 생성
  constructor(name, age, languages) {
    //super로 부모 클래스의 속성 name과 age를 물려 받는다.
    super(name, age);
    // 자기 자신의 언어 속성 = 언어를 저장
    this.languages = languages;
  }

  // 개발자가 가진 동작 : 코드 치기
  writeCode() {
    //소유한 언어를 문자열 '로 코딩하는 남자.' 에 대해서 출력
    console.log(this.languages.join() + "로 코딩하는 남자.");
  }
}

// 개발자 클래스로 생성하여 개발자 변수에 저장
const programmer = new Programmer("Alex", 27, ["html", "css", "js"]);

// 개발자의 코드 치기 함수를 호출한다.
programmer.writeCode();

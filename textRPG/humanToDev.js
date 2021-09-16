class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

class Programmer extends Human {
  constructor(name, age, languages) {
    super(name, age);
    this.languages = languages;
  }
  writeCode() {
    console.log(this.languages.join() + "로 코딩하는 남자.");
  }
}

const programmer = new Programmer("Alex", 27, ["html", "css", "js"]);

programmer.writeCode();

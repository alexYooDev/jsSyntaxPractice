"use strict";

const $startScreen = document.querySelector("#start-screen");
const $heroStat = document.querySelector("#hero-stat");
const $heroName = document.querySelector("#hero-name");
const $heroLevel = document.querySelector("#hero-level");
const $heroHp = document.querySelector("#hero-hp");
const $heroXp = document.querySelector("#hero-xp");
const $heroAtk = document.querySelector("#hero-atk");
const $monsterName = document.querySelector("#monster-name");
const $monsterHp = document.querySelector("#monster-hp");
const $monsterAtk = document.querySelector("#monster-atk");
const $battleMode = document.querySelector("#battle-mode");
const $monsterStat = document.querySelector("#monster-stat");
const $message = document.querySelector("#message");
const $normalMode = document.querySelector("#normal-mode");

// 생성자의 경우 대문자로 시작한다
// 생성자로 새로운 객체를 생성 -> 객체를 찍어내는 틀 (객체 지향형 프로그래밍)
class Game {
  constructor(name) {
    // 게임 클래스 안에 hero와 monster가 들어감
    // 게임을 통해서도 게임의 주인공에 접근할 수 있어야 함
    this.monster = null;
    this.hero = null;
    this.monsterList = [
      { name: "슬라임", hp: 25, atk: 10, xp: 10 },
      { name: "스켈레톤", hp: 50, atk: 15, xp: 20 },
      { name: "마왕", hp: 50, atk: 35, xp: 50 },
    ];
    this.start(name);
  }
  start(name) {
    // this는 그때그때 달라질 수 있다.
    $normalMode.addEventListener("submit", this.onGameMenuInput);
    $battleMode.addEventListener("submit", this.onBattleMenuInput);
    this.changeScreen("game");
    // 히어로 생성
    this.hero = new Hero(this, name);
    // 히어로 생성 시 스탯 또한 업데이트 한다.
    this.updateHeroStat();
  }
  changeScreen(screen) {
    if (screen === "start") {
      $startScreen.style.display = "block";
      $normalMode.style.display = "none";
      $battleMode.style.display = "none";
    } else if (screen === "game") {
      $startScreen.style.display = "none";
      $normalMode.style.display = "block";
      $battleMode.style.display = "none";
    } else if (screen === "battle") {
      $startScreen.style.display = "none";
      $normalMode.style.display = "none";
      $battleMode.style.display = "block";
    }
  }
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["menu-input"].value;
    if (input === "1") {
      // 모험
      this.changeScreen("battle");
      const randomIdx = Math.floor(Math.random() * this.monsterList.length);
      const randomMonster = this.monsterList[randomIdx];
      this.monster = new Monster(
        this,
        randomMonster.name,
        randomMonster.hp,
        randomMonster.atk,
        randomMonster.xp
      );
      this.updateMonsterStat();
      this.showMessage(`${randomMonster.name}(와/과) 마주쳤다!`);
    } else if (input === "2") {
      // 휴식
    } else if (input === "3") {
      // 종료
      this.quit();
    }
  };
  onBattleMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["battle-input"].value;
    if (input === "1") {
      //공격
      const { hero, monster } = this;
      hero.attack(monster);
      monster.attack(hero);

      //영웅의 체력이 0이하로 떨어지는 경우 -> 사망
      if (hero.hp <= 0) {
        this.showMessage(`${hero.lv} 레벨에서 전사. 다음 도전자는?`);
        // 게임 종료
        this.quit();
        // 몬스터의 체력이 0 이하로 떨어질 경우 -> 퇴치
      } else if (monster.hp <= 0) {
        this.showMessage(`몬스터를 잡아 ${monster.xp} 경험치를 얻었다`);
        // 몬스터의 경험치 양 만큼 획득
        hero.getXp(monster.xp);

        // 몬스터 초기화
        this.monster = null;
        // 노멀모드 화면으로 전환
        this.changeScreen("game");
        // 전투 중인 경우
      } else {
        this.showMessage(
          `${hero.atk}의 데미지를 주고, ${monster.atk}의 데미지를 받았다!`
        );
      }
      // 전투시 영웅의 상태와 몬스터의 상태를 확인
      this.updateHeroStat();
      this.updateMonsterStat();
    }
    if (input === "2") {
      // 회복
    } else if (input === "3") {
      // 도주
      this.changeScreen("game");
      $message.textContent = null;
      $monsterName.textContent = null;
      $monsterHp.textContent = null;
      $monsterAtk.textContent = null;
    }
  };
  updateHeroStat() {
    const { hero } = this;

    // 캐릭터 생성 전, 널값
    if (hero === null) {
      $heroName.textContent = "";
      $heroLevel.textContent = "";
      $heroHp.textContent = "";
      $heroXp.textContent = "";
      $heroAtk.textContent = "";
      return;
    }
    // 캐릭터가 생기면 화면을 다시 그린다.
    $heroName.textContent = hero.name;
    $heroLevel.textContent = `${hero.lv} lv.`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${15 * hero.lv}`;
    $heroAtk.textContent = `ATK: ${hero.atk}`;
  }
  updateMonsterStat() {
    // 디스트럭쳐링 : 게임 객체 내 몬스터 객체 저장
    const { monster } = this;

    // 몬스터가 없다면
    if (monster === null) {
      // 몬스터의 이름, HP 상태, 공격력을 초기화 한다.
      $monsterName.textContent = "";
      $monsterHp.textContent = "";
      $monsterAtk.textContent = "";
      return;
    }
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $monsterAtk.textContent = `ATK: ${monster.atk}`;
  }

  showMessage(text) {
    $message.textContent = text;
  }

  quit() {
    // 영웅과 몬스터 초기화
    this.hero = null;
    this.monster = null;
    // 영웅의 상태와 몬스터의 상태 초기화
    this.updateHeroStat();
    this.updateMonsterStat();
    // 노멀 모드와 전투 모드의 이벤트를 삭제
    $normalMode.removeEventListener("submit", this.onGameMenuInput);
    $battleMode.removeEventListener("submit", this.onBattleMenuInput);
    // 시작 화면으로 이동
    this.changeScreen("start");
    // 게임 초기화
    game = null;
  }
}

// 클래스 간의 공통점을 발견하면, 공통적인 것을 모아 공통 클래스를 만들고 클래스 상속을 사용한다.

class Unit {
  constructor(game, name, hp, atk, xp) {
    this.game = game;
    this.name = name;
    this.lv = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.atk = 10;
  }
  attack(target) {
    target.hp -= this.atk;
  }
}
//Unit의 element를 상속받는다 (attack). 상속은 여러 번에 걸쳐서 할 수 있음. 단 JS는 다중상속 지원 안함.
class Hero extends Unit {
  // Hero 클래스 내에도 game이 들아갈 공간이 있음
  // 영웅을 통해서도 현재 플레이되는 게임에 접근할 수 있어야 함
  constructor(game, name) {
    //부모 클래스에 접근(super)하여 생성자 호출 (부모 클래스의 생성자 값을 넣는다)
    super(game, name, 100, 100, 0);
    // 겹치지 않는 것
    this.lv = 1;
  }
  // 생략할 경우 알아서 부모 클래스에 해당 메서드가 있는 지 탐색함.
  attack(target) {
    super.attack(target); // 부모 클래스의 메서드
    console.log("영웅이 공격"); // 그 외 따로 추가할 동작
  }

  heal(monster) {
    this.hp += 20;
    this.hp -= monster.atk;
  }
  getXp(xp) {
    this.xp += xp;
    // 몬스터한테 받은 경험치가 현재 레벨 최대 경험치 양보다 많다면
    if (this.xp >= this.lv * 15) {
      this.xp -= this.lv;
      // 영웅 레벨 1업
      this.lv += 1;
      // 최대 체력 5 증가
      this.maxHp += 5;
      // 공격력 5 증가
      this.atk += 5;
      // 체력 완전 회복
      this.hp = this.maxHp;
      // 현재 레벨 출력
      this.game.showMessage(`레벨 업! 현재 레벨 ${this.lv}`);
    }
  }
}
class Monster extends Unit {
  constructor(game, name, hp, atk, xp) {
    super(game, name);
    this.maxHp = hp;
    this.hp = hp;
    this.xp = xp;
    this.atk = atk;
  }
  attack(target) {
    super.attack(target);
    console.log("몬스터가 공격");
  }
}
let game = null;
$startScreen.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name-input"].value;
  game = new Game(name);
});

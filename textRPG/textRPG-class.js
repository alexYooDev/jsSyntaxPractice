'use strict';

const $startScreen = document.querySelector('#start-screen');
const $heroStat = document.querySelector('#hero-stat');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtk = document.querySelector('#hero-atk');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtk = document.querySelector('#monster-atk');
const $battleMode = document.querySelector('#battle-mode');
const $monsterStat = document.querySelector('#monster-stat');
const $message = document.querySelector('#message');
const $normalMode = document.querySelector('#normal-mode');

// 생성자의 경우 대문자로 시작한다
// 생성자로 새로운 객체를 생성 -> 객체를 찍어내는 틀 (객체 지향형 프로그래밍)
class Game {
  constructor(name) {
    // 게임 클래스 안에 hero와 monster가 들어감
    // 게임을 통해서도 게임의 주인공에 접근할 수 있어야 함
    this.monster = null;
    this.hero = new Hero(this, name);
    this.monsterList = [
      { name: '슬라임', hp: 25, atk: 10, xp: 10 },
      { name: '스켈레톤', hp: 50, atk: 15, xp: 20 },
      { name: '마왕', hp: 50, atk: 35, xp: 50 },
    ];
    this.start();
  }
  start() {
    $normalMode.addEventListener('submit', this.onGameMenuInput);
    $battleMode.addEventListener('submit', this.onBattleMenuInput);
    this.changeScreen('game');
  }
  changeScreen(screen) {
    if (screen === 'start') {
      $startScreen.style.display = 'block';
      $normalMode.style.display = 'none';
      $battleMode.style.display = 'none';
    } else if (screen === 'game') {
      $startScreen.style.display = 'none';
      $normalMode.style.disply = 'block';
      $battleMode.style.display = 'none';
    }
  }
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target['menu-input'].value;
    if (input === '1') {
      // 모험
      this.changeScreen('battle');
    } else if (input === '2') {
      // 휴식
    } else if (input === '3') {
      // 종료
    }
  };
}
class Hero {
  // Hero 클래스 내에도 game이 들아갈 공간이 있음
  // 영웅을 통해서도 현재 플레이되는 게임에 접근할 수 있어야 함
  constructor(game, name) {
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
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.atk;
  }
}
class Monster {
  constructor(game, name, hp, atk, xp) {
    this.game = game;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.xp = xp;
    this.atk = atk;
  }
  attack(target) {
    target.hp -= this.atk;
  }
}

function logOn(event) {
  event.preventDefault();
  const name = event.target['name-input'].value;
  game = new Game(name);
}
function menuSelect(event) {
  event.preventDefault();
  const input = event.target['menu-input'].value;
  if (input === '1') {
    //모험
  } else if (input === '2') {
    //휴식
  } else if (input === '3') {
    //종료
  }

  $battleMode.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target['battle-input'].value;
    if (input === '1') {
      //공격
    } else if (input === '2') {
      //회복
    } else if (input === '3') {
      //도주
    }
  });
}

$normalMode.addEventListener('submit', menuSelect);
$startScreen.addEventListener('submit', logOn);

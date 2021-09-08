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

const hero = {
  name: '',
  lv: 1,
  maxHp: 100,
  hp: 100,
  xp: 0,
  atk: 10,
};

let monster = null;
const monsterList = [
  { name: '슬라임', hp: 25, atk: 10, xp: 10 },
  { name: '스켈레톤', hp: 50, atk: 15, xp: 20 },
  { name: '마왕', hp: 150, atk: 35, xp: 50 },
];

function logOn(event) {
  event.preventDefault();

  // 플레이어 이름 데이터를 입력 받아 게임화면으로 전환한다.
  // event.target(startScreen)의 요소 중 name-input의 값에 접근
  // 이름에 특수문자가 들어가면 dot notation 사용 불가
  const player = event.target['name-input'].value;
  $startScreen.style.display = 'none';
  $normalMode.style.display = 'block';
  $heroName.textContent = player;
  $heroLevel.textContent = `Lv.${hero.lv}`;
  $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
  $heroXp.textContent = `XP: ${hero.xp}/${15 * hero.lv}`;
  $heroAtk.textContent = `ATK: ${hero.atk}`;
  hero.name = player;
}

function menuSelect(event) {
  event.preventDefault();
  const input = event.target['menu-input'].value;
  if (input === '1') {
    $normalMode.style.display = 'none';
    $battleMode.style.display = 'block';
    monster = JSON.parse(
      JSON.stringify(Math.floor(monsterList[Math.random() * monsterList.length)])
    );
    monster.maxHp = monster.hp;
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP:${monster.hp}/${monster.maxHp}`;
    $monsterAtk.textContent = `ATK:${monster.atk}`;
  } else if (input === '2') {

  } else if (input === '3') {
    
  }
}

$normalMode.addEventListener('submit', menuSelect);
$startScreen.addEventListener('submit', logOn);

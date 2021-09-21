// const $wrapper = document.querySelector("#wrapper");

//12개의 카드 2쌍 -> 6가지 색상 배열에 저장(파스텔 톤)
const colors = ["#FF968A", "FFC8A2", "FFFFB5", "#CCE2CB", "#FFFFFF", "FEE1EB"];

// 색카드 2쌍을 합친 배열: colors 뒤에 다시 colors를 붙인 형태. 원본을 수정하지 않고 새로운 배열을 만든다.
let colorCopy = colors.concat(colors);

// 섞은 카드를 저장하는 배열
let shuffled = [];

// 피셔에이츠 셔플
function shuffle() {
  for (let i = 0; colorCopy.lenth > 0; i++) {
    // 카드 개수(12개)의 수 중 랜덤으로 저장.
    const randomIdx = Math.floor(Math.random() * colorCopy.length);
    // 랜덤 인덱스 추출
    //const spliced = colorCopy.splice(randomIdx, 1);
    //shuffled.push(spliced[0]); concat 메서드의 경우, 매개변수 1차원 배열 까지는 flat하여 배열을 만든다.
    shuffled = shuffled.concat(colorCopy.splice(randomIdx, 1));
  }
}

shuffle();

console.log(shuffled);

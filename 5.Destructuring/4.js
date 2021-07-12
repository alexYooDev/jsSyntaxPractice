// Destruncting with function

let news = [
  {
    title: 'sbs',
    imgurl:
      '/main/read.naver?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=016&amp;aid=0001860191',
    newslist: [
      '포천서 의무후송헬기 원인미상 불시착',
      '오늘 윤석열 예비 후보 등록…국민의힘 대선 경선 시작',
      '순창군, 50대 연령층 4500명 모더나 백신접종 사전예약 진행',
      '코로나 집단감염 현대백화점 무역센터점, 내일부터 정상영업',
      '재건축 조합원 2년 의무거주 방안 추진 않기로(종합)',
    ],
  },
  {
    title: 'mbc',
    imgurl:
      '2. /main/read.naver?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=016&amp;aid=0001860191',
    newslist: [
      '2. 포천서 의무후송헬기 원인미상 불시착',
      '2. 오늘 윤석열 예비 후보 등록…국민의힘 대선 경선 시작',
      '2. 순창군, 50대 연령층 4500명 모더나 백신접종 사전예약 진행',
      '2. 코로나 집단감염 현대백화점 무역센터점, 내일부터 정상영업',
      '2. 재건축 조합원 2년 의무거주 방안 추진 않기로(종합)',
    ],
  },
];

function getNewsList([, { newslist }]) {
  console.log(newslist);
}

getNewsList(news);

// src/data.js

export const menuData = {
  set: [
    { id: 101, name: "말말 세트 (아메리카노+베이글)", price: 7000, type: 'HOT', img: '/images/malmalmonring.png' },
    { id: 102, name: "말말 디저트 세트 (라떼+치즈케이크)", price: 11000, type: 'BOTH', img: '/images/malmaldesert.png' },
    { id: 103, name: "말말 시그니처 세트 (아인슈페너+마카롱)", price: 8500, type: 'ICE', img: '/images/malmalsigniture.png' }
  ],
  signature: [
    { id: 201, name: "말말 아인슈페너", price: 6500, type: 'ICE', img: '/images/malmaleinspanner.png' },
    { id: 202, name: "말말 흑임자 샷 라떼", price: 6800, type: 'ICE', img: '/images/malmalblacksesame.png' },
    { id: 203, name: "말말 레드 크림슨 티", price: 6000, type: 'BOTH', img: '/images/malmalred.png' }
  ],
  caffeine: [
    { id: 1, name: "카페 아메리카노", price: 4500, type: 'BOTH', img: '/images/americano.png' },
    { id: 2, name: "카페 라떼", price: 5000, type: 'BOTH', img: '/images/latte.png' },
    { id: 3, name: "바닐라 라떼", price: 5500, type: 'BOTH', img: '/images/vanillalatte.png' },
    { id: 4, name: "카라멜 마끼아또", price: 5900, type: 'BOTH', img: '/images/caramel.png' },
    { id: 5, name: "콜드 브루", price: 4900, type: 'ICE', img: '/images/coldbrew.png' },
    { id: 6, name: "에스프레소", price: 3000, type: 'HOT', img: '/images/espreso.png' }, 
    { id: 7, name: "카푸치노", price: 5000, type: 'HOT', img: '/images/cafucino.png' }, 
    { id: 8, name: "돌체 라떼", price: 5900, type: 'ICE', img: '/images/dolcelatte.png' } 
  ],
  noncoffee: [
    { id: 9, name: "시그니처 초콜릿", price: 5700, type: 'BOTH', img: '/images/signiturechoco.png' },
    { id: 10, name: "제주 유기농 말차 라떼", price: 6100, type: 'BOTH', img: '/images/matchalatte.png' },
    { id: 11, name: "딸기 라떼", price: 6500, type: 'ICE', img: '/images/strawberrylatte.png' },
    { id: 12, name: "고구마 라떼", price: 5500, type: 'HOT', img: '/images/gogumalatte.png' },
    { id: 30, name: "민트 초코 라떼", price: 6200, type: 'BOTH', img: '/images/mint_choco_latte.png' },
    { id: 31, name: "토피넛 라떼", price: 6500, type: 'BOTH', img: '/images/toffee_nut_latte.png' }
  ],
  ade: [
    { id: 13, name: "피치 딸기 에이드", price: 5700, type: 'ICE', img: '/images/peachstrawberrypizio.png' },
    { id: 14, name: "쿨 라임 에이드", price: 5900, type: 'ICE', img: '/images/coollimepizio.png' },
    { id: 15, name: "청포도 에이드", price: 5500, type: 'ICE', img: '/images/grapeade.png' },
    { id: 16, name: "자몽 에이드", price: 5500, type: 'ICE', img: '/images/grapefruitade.png' },
    { id: 32, name: "레몬 에이드", price: 5500, type: 'ICE', img: '/images/lemon_ade.png' },
    { id: 33, name: "블루레몬 에이드", price: 5800, type: 'ICE', img: '/images/blue_lemon_ade.png' }
  ],
  dessert: [
    { id: 17, name: "번트 치즈 케이크", price: 6900, type: 'NONE', img: '/images/buntcheesecake.png' },
    { id: 18, name: "마스카포네 티라미수", price: 7000, type: 'NONE', img: '/images/tiramisu.png' },
    { id: 19, name: "클래식 스콘", price: 3500, type: 'NONE', img: '/images/classicscone.png' },
    { id: 20, name: "블루베리 마카롱", price: 3000, type: 'NONE', img: '/images/blueberrymacaron.png' },
    { id: 21, name: "버터 크루아상", price: 4900, type: 'NONE', img: '/images/buttercroissant.png' },
    { id: 22, name: "어니언 베이글", price: 3500, type: 'NONE', img: '/images/unionbagel.png' },
    { id: 23, name: "에그 샌드위치", price: 5900, type: 'NONE', img: '/images/eggsandwich.png' }, 
    { id: 24, name: "생크림 카스텔라", price: 4500, type: 'NONE', img: '/images/castella.png' },
    { id: 29, name: "두바이 쫀득 쿠키", price: 5000, type: 'NONE', img: '/images/dubai.png' }
  ],
  tea: [
    { id: 25, name: "자몽 허니 블랙 티", price: 5700, type: 'BOTH', img: '/images/grapefruitblacktea.png' },
    { id: 26, name: "유자 민트 티", price: 5900, type: 'BOTH', img: '/images/yujaminttea.png' },
    { id: 27, name: "로얄 밀크티", price: 5500, type: 'BOTH', img: '/images/royalmilktea.png' },
    { id: 28, name: "캐모마일 블렌드 티", price: 4500, type: 'BOTH', img: '/images/chamomiletea.png' },
    { id: 34, name: "얼그레이 티", price: 4800, type: 'BOTH', img: '/images/earl_grey_tea.png' },
    { id: 35, name: "페퍼민트 티", price: 4500, type: 'BOTH', img: '/images/peppermint_tea.png' }
  ]
};

export const numWords = [
  { word: '열', num: 10 }, { word: '아홉', num: 9 }, { word: '여덟', num: 8 }, { word: '일곱', num: 7 }, { word: '여섯', num: 6 }, 
  { word: '다섯', num: 5 }, { word: '네', num: 4 }, { word: '넷', num: 4 }, { word: '세', num: 3 }, { word: '셋', num: 3 }, 
  { word: '두', num: 2 }, { word: '둘', num: 2 }, { word: '한', num: 1 }, { word: '하나', num: 1 }, { word: '1', num: 1 }, 
  { word: '2', num: 2 }, { word: '3', num: 3 }, { word: '4', num: 4 }
];

export const menuAliasesByName = {
  "말말 세트 (아메리카노+베이글)": ["모닝세트", "말말모닝세트", "베이글세트", "아메리카노세트"],
  "말말 디저트 세트 (라떼+치즈케이크)": ["디저트세트", "말말디저트세트", "케이크세트"],
  "말말 시그니처 세트 (아인슈페너+마카롱)": ["시그니처세트", "말말시그니처세트", "마카롱세트"],
  "말말 아인슈페너": ["아인슈페너", "말말아인슈페너"],
  "말말 흑임자 샷 라떼": ["흑임자라떼", "흑임자", "흑임자샷라떼", "말말흑임자"],
  "말말 레드 크림슨 티": ["레드크림슨티", "레드크림슨", "크림슨티", "말말레드"],
  "카페 아메리카노": ["아메리카노", "아아", "뜨아", "아메", "카페아메리카노"],
  "카페 라떼": ["라떼", "카페라테", "카페라떼", "라테"],
  "바닐라 라떼": ["바닐라라떼", "바닐라", "바라", "바닐라라테"],
  "카라멜 마끼아또": ["카라멜마끼아또", "마끼아또", "카라멜", "마키아토", "카라멜마키아토"],
  "콜드 브루": ["콜드브루", "콜드블루", "콜드브르"],
  "에스프레소": ["에스프레소", "에쏘"],
  "카푸치노": ["카푸치노"],
  "돌체 라떼": ["돌체라떼", "연유라떼", "돌체", "돌체라테"],
  "시그니처 초콜릿": ["초코", "초콜릿", "시그니처초콜릿", "아이스초코", "핫초코", "초코라떼"],
  "제주 유기농 말차 라떼": ["말차라떼", "녹차라떼", "말차", "녹차", "말차라테"],
  "딸기 라떼": ["딸기라떼", "딸기우유"],
  "고구마 라떼": ["고구마라떼", "고구마"],
  "피치 딸기 에이드": ["딸기에이드", "피치딸기에이드"],
  "쿨 라임 에이드": ["쿨라임", "라임", "쿨라임에이드", "라임에이드"],
  "청포도 에이드": ["청포도에이드", "청포도", "포도에이드"],
  "자몽 에이드": ["자몽에이드", "자몽주스"],
  "번트 치즈 케이크": ["치즈케이크", "치즈케익", "치케", "번트치즈케이크", "치즈케잌"],
  "마스카포네 티라미수": ["티라미수", "티라미슈", "마스카포네티라미수"],
  "클래식 스콘": ["스콘", "클래식스콘"],
  "블루베리 마카롱": ["마카롱", "블루베리마카롱"],
  "버터 크루아상": ["크루아상", "크로와상", "버터크루아상", "크루와상"],
  "어니언 베이글": ["베이글", "어니언베이글", "양파베이글"],
  "에그 샌드위치": ["샌드위치", "에그샌드위치", "계란샌드위치"],
  "생크림 카스텔라": ["카스테라", "생크림카스테라", "카스텔라"],
  "자몽 허니 블랙 티": ["자몽티", "자허블", "자몽허니블랙티", "자몽차", "자몽블랙티"],
  "유자 민트 티": ["유자티", "유자", "민트티", "유자민트티", "유자차"],
  "로얄 밀크티": ["밀크티", "로얄밀크티"],
  "캐모마일 블렌드 티": ["캐모마일", "캐모마일티", "카모마일"],
  "두바이 쫀득 쿠키": ["두바이초콜릿", "두바이초코", "두바이초콜렛", "두바이", "두쫀쿠"],
  "민트 초코 라떼": ["민트초코라떼", "민트초코", "민초", "민초라떼"],
  "토피넛 라떼": ["토피넛라떼", "토피넛"],
  "레몬 에이드": ["레몬에이드", "레몬주스"],
  "블루레몬 에이드": ["블루레몬에이드", "블루에이드", "블루레몬"],
  "얼그레이 티": ["얼그레이", "얼그레이티"],
  "페퍼민트 티": ["페퍼민트", "페퍼민트티", "민트티"]
};

export const optionOptions = {
  temp: ["HOT", "ICE"],
  ice: ["얼음 조금", "얼음 중간", "얼음 많이", "없음"],
  sweetness: ["30%", "50% (기본)", "70%", "100%"],
  pearl: ["없음", "타피오카 펄 추가", "화이트 펄 추가"],
  shot: ["없음", "에스프레소 샷 추가 (+500원)"]
};
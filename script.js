const questions = [
    {
        question: "연구자가 선호하는 실험체의 성별은 무엇인가요?",
        answers: ["남", "여"],
    },
    {
        question: "연구자가 선호하는 공격 유형은 무엇인가요?",
        answers: ["근거리 딜러", "브루저", "암살자", "원거리 딜러", "서포터", "탱커"],
    },
    {
        question: "연구자가 선호하는 실험체의 난이도는 무엇인가요?",
        answers: ["상", "상중", "중", "중하", "하"],
    },
    {
        question: "연구자는 실험체의 외형을 중요시하나요?",
        answers: ["매우 중요해요", "적당히 중요해요", "중요하지 않아요"],
    },
    {
        question: "연구자는 팀워크와 개인 플레이 중 무엇을 더 선호하나요?",
        answers: ["팀워크", "개인 플레이"],
    },
    {
        question: "연구자의 선호하는 게임 플레이 스타일은 무엇인가요? (최대 2개 선택)",
        answers: ["강력한 피해", "아군 보조", "빠른 속도", "적 제압 기술", "튼튼한 방어력"],
        multiSelect: true,
        maxSelect: 2,
    },
];

const allCharacters = [
    { 
        name: "가넷", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["defense", "control"], 
        difficulty: ["중하"], 
        image: "images/Garnet.png", 
        dialogue: "고통만이 우릴 이어줄 수 있어." 
    },
    { 
        name: "나딘", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중"], 
        image: "images/Nadine.png", 
        dialogue: "활을 잡은 나는 흔들리지 않아." 
    },
    { 
        name: "나타폰", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["상"], 
        image: "images/Nathapon.png", 
        dialogue: "다들 무언가를 위해 여행을 하는거야, 안그래?" 
    },
    { 
        name: "니키", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["control", "speed"], 
        difficulty: ["중하"], 
        image: "images/Nicky.png", 
        dialogue: "귀찮게 하지마!..그래서, 무슨 일인데?" 
    },
    { 
        name: "다니엘", 
        gender: "남", 
        type: "암살자", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중"], 
        image: "images/Daniel.png", 
        dialogue: "나비를 벽에 고정하기 위해서는 날카로운 핀이 필요하지" 
    },
    { 
        name: "다르코", 
        gender: "남", 
        type: "탱커", 
        playstyle: ["control", "defense"], 
        difficulty: ["중하"], 
        image: "images/Darko.png", 
        dialogue: "이제 돈 좀 벌어볼까" 
    },
    { 
        name: "데비 & 마들렌", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["damage", "control"], 
        difficulty: ["상중"], 
        image: "images/Debi & Marlene.png", 
        dialogue: "딱 붙어 있어! 내가 다 해결해 줄테니까. / 퍽이나" 
    },
    { 
        name: "띠아", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["control", "support"], 
        difficulty: ["상"], 
        image: "images/Tia.png", 
        dialogue: "혹시 내가 그려줬으면 하는 게...있을까?" 
    },
    { 
        name: "라우라", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["control", "speed"], 
        difficulty: ["상"], 
        image: "images/Laura.png", 
        dialogue: "그거 가져도 되니? 후후, 농담이야." 
    },
    { 
        name: "레녹스", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["control", "defense"], 
        difficulty: ["중하"], 
        image: "images/Lenox.png", 
        dialogue: "낚시 좋지 않아? 마음이 차분해진다고." 
    },
    { 
        name: "레니", 
        gender: "여", 
        type: "서포터", 
        playstyle: ["support", "control"], 
        difficulty: ["중상"], 
        image: "images/Leni.png", 
        dialogue: "장난감보다 먼저 망가지면 안돼, 알겠지?" 
    },
    { 
        name: "레온", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["control", "damage"], 
        difficulty: ["하"], 
        image: "images/Leon.png", 
        dialogue: "나약한 인간은 뒤쳐지는 법이지." 
    },
    { 
        name: "로지", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상중"], 
        image: "images/Rozzi.png", 
        dialogue: "수고." 
    },
    { 
        name: "루크", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중하"], 
        image: "images/Luke.png", 
        dialogue: "쓱싹쓱싹, 청소 대행업체 더블 엘(L)입니다~" 
    },
    { 
        name: "르노어", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "damage"], 
        difficulty: ["중하"], 
        image: "images/Lenore.png", 
        dialogue: "네 선율을...들려주겠니?" 
    },
    { 
        name: "리 다이린", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["speed", "damage"], 
        difficulty: ["중"], 
        image: "images/Li Dailin.png", 
        dialogue: "내 인생 어떻게 살든 내 마음이지!" 
    },
    { 
        name: "리오", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중하"], 
        image: "images/Rio.png", 
        dialogue: "화살은 그 어떤 거짓도 통하지 않아" 
    },
    { 
        name: "마르티나", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "damage"], 
        difficulty: ["상"], 
        image: "images/Martina.png", 
        dialogue: "절대 타협하지 않아. 기자니까" 
    },
    { 
        name: "마이", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["defense", "control"], 
        difficulty: ["중"], 
        image: "images/Mai.png", 
        dialogue: "하기 싫은데요." 
    },
    { 
        name: "마커스", 
        gender: "남", 
        type: "탱커", 
        playstyle: ["control", "defense"], 
        difficulty: ["중하"], 
        image: "images/Markus.png", 
        dialogue: "싸움은 대등한 자에게 통용되는 말이다." 
    },
    { 
        name: "매그너스", 
        gender: "남", 
        type: "탱커", 
        playstyle: ["defense", "control"], 
        difficulty: ["하"], 
        image: "images/Magnus.png", 
        dialogue: "내가 바로 폭주족의 전설, 매그너스다!" 
    },
    { 
        name: "바냐", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["damage", "defense"], 
        difficulty: ["중하"], 
        image: "images/Vanya.png", 
        dialogue: "이제 자유롭게 날 수 있어요." 
    },
    { 
        name: "바바라", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["중"], 
        image: "images/Barbara.png", 
        dialogue: "너희가 이게 얼마나 대단한 발명인지 알 리가 없지" 
    },
    { 
        name: "버니스", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["control", "damage"], 
        difficulty: ["하"], 
        image: "images/Bernice.png", 
        dialogue: "인간은 쏘지 않아. 짐승을 사냥할 뿐이다." 
    },
    { 
        name: "비앙카", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["control", "damage"], 
        difficulty: ["중하"], 
        image: "images/Bianca.png", 
        dialogue: "그대의 피는 어떤 맛일지 궁금하구나." 
    },
    { 
        name: "샬럿", 
        gender: "여", 
        type: "서포터", 
        playstyle: ["support", "speed"], 
        difficulty: ["하"], 
        image: "images/Charlotte.png", 
        dialogue: "제 빛이..당신의 희망이 될 수 있기를" 
    },
    { 
        name: "셀린", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상"], 
        image: "images/Celine.png", 
        dialogue: "대부분의 문제는, 폭발로 해결돼." 
    },
    { 
        name: "쇼우", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["control", "defense"], 
        difficulty: ["중하"], 
        image: "images/Xiukai.png", 
        dialogue: "뭘 봐, 만두소로 만들어줄까?" 
    },
    { 
        name: "쇼이치", 
        gender: "남", 
        type: "암살자", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상"], 
        image: "images/Shoichi.png", 
        dialogue: "그래서, 돈은 얼마나 주실 건가요?" 
    },
    { 
        name: "수아", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["speed", "support"], 
        difficulty: ["중하"], 
        image: "images/Sua.png", 
        dialogue: "상냥한 동화를 읽어주고 싶어요." 
    },
    { 
        name: "시셀라", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "support"], 
        difficulty: ["중"], 
        image: "images/Sissela.png", 
        dialogue: "삶은 고통이에요. 더 이어가봤자 준비된 아픔들이 나를 기다릴 뿐이죠." 
    },
    { 
        name: "실비아", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["speed", "control"], 
        difficulty: ["상"], 
        image: "images/Silvia.png", 
        dialogue: "와, 그거 재밌어 보이는데?" 
    },
    { 
        name: "아델라", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["상"], 
        image: "images/Adela.png", 
        dialogue: "왜 그렇게 애를 써? 어차피 내가 이길텐데." 
    },
    { 
        name: "아드리아나", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "speed"], 
        difficulty: ["상중"], 
        image: "images/Adriana.png", 
        dialogue: "왠지 추운 것 같아..성냥이 어디있더라?" 
    },
    { 
        name: "아디나", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "support"], 
        difficulty: ["상"], 
        image: "images/Adina.png", 
        dialogue: "운명만큼이나 중요한 건, 우리의 의지죠." 
    },
    { 
        name: "아르다", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["support", "control"], 
        difficulty: ["중하"], 
        image: "images/Arda.png", 
        dialogue: "그럼 조사를 시작하지." 
    },
    { 
        name: "아비게일", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["speed", "damage"], 
        difficulty: ["중"], 
        image: "images/Abigail.png", 
        dialogue: "눈 떼지 마세요. 언제 사라져도 모를 테니" 
    },
    { 
        name: "아야", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["하"], 
        image: "images/Aya.png", 
        dialogue: "나의 빛, 나의 정의를 위해" 
    },
    { 
        name: "아이솔", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["상중"], 
        image: "images/Isol.png", 
        dialogue: "여기서 그만둘 순 없어." 
    },
    { 
        name: "아이작", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["하"], 
        image: "images/Issac.png", 
        dialogue: "누가 이 구역의 왕인지 알려주지." 
    },
    { 
        name: "알렉스", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["damage", "control"], 
        difficulty: ["상"], 
        image: "images/Alex.png", 
        dialogue: "과거를 보면 미래를 예측할 수 있지" 
    },
    { 
        name: "알론소", 
        gender: "남", 
        type: "탱커", 
        playstyle: ["defense", "support"], 
        difficulty: ["하"], 
        image: "images/Alonso.png", 
        dialogue: "온통 폐품투성이구만. 나까지 포함해서!" 
    },
    { 
        name: "얀", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상"], 
        image: "images/Jan.png", 
        dialogue: "제대로 붙어볼까!" 
    },
    { 
        name: "에스텔", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["defense", "support"], 
        difficulty: ["중"], 
        image: "images/Estelle.png", 
        dialogue: "불조심하세요! 나머지는 제가 어떻게든 해보죠" 
    },
    { 
        name: "에이든", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상"], 
        image: "images/Aiden.png", 
        dialogue: "누구나 인생은 꼬이기 마련이지." 
    },
    { 
        name: "에키온", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["speed", "defense"], 
        difficulty: ["상중"], 
        image: "images/Echion.png", 
        dialogue: "싸우는데 이유를 붙일 필요 있나? 멍청이들이나 그러지!" 
    },
    { 
        name: "엘레나", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["control", "defense"], 
        difficulty: ["중"], 
        image: "images/Elena.png", 
        dialogue: "제 차례인가요? 그렇군요." 
    },
    { 
        name: "엠마", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "speed"], 
        difficulty: ["상"], 
        image: "images/Emma.png", 
        dialogue: "완전 새로운 걸 보여줄게!" 
    },
    { 
        name: "요한", 
        gender: "남", 
        type: "서포터", 
        playstyle: ["support", "speed"], 
        difficulty: ["하"], 
        image: "images/Johann.png", 
        dialogue: "이 또한 시련이라면, 받아들이겠습니다." 
    },
    { 
        name: "윌리엄", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상"], 
        image: "images/William.png", 
        dialogue: "더 이상 누구도 봐주지 않는다." 
    },
    { 
        name: "유민", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["control", "damage"], 
        difficulty: ["상중"], 
        image: "images/Yumin.png", 
        dialogue: "바람 따라, 구름 따라. 한번 가볼까!" 
    },
    { 
        name: "유키", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["defense", "speed"], 
        difficulty: ["하"], 
        image: "images/Yuki.png", 
        dialogue: "제가 필요한 일이 있으신가요?"
    },
    { 
        name: "이바", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["하"], 
        image: "images/Eva.png", 
        dialogue: "그냥 평범한 삶을 살고 싶었어, 그게 이렇게 어려운 줄 몰랐는 걸." 
    },
    { 
        name: "이안", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중하"], 
        image: "images/Ly Anh.png", 
        dialogue: "나는 혼자가 아니에요....불행히도" 
    },
    { 
        name: "일레븐", 
        gender: "여", 
        type: "탱커", 
        playstyle: ["defense", "control"], 
        difficulty: ["중하"], 
        image: "images/Eleven.png", 
        dialogue: "맛있게 먹고 나면 기분 좋아지지 않아?" 
    },
    { 
        name: "자히르", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["상"], 
        image: "images/Zahir.png", 
        dialogue: "나의 눈에는 신이 보인다." 
    },
    { 
        name: "재키", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["하"], 
        image: "images/Jackie.png", 
        dialogue: "더..더..더!!!" 
    },
    { 
        name: "제니", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["speed", "damage"], 
        difficulty: ["중"], 
        image: "images/Jenny.png", 
        dialogue: "보석은 가치를 아는 사람의 손에서만 빛나는 법이지" 
    },
    { 
        name: "츠바메", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중"], 
        image: "images/Tsubame.png", 
        dialogue: "그 의뢰, 받아들이죠." 
    },
    { 
        name: "카밀로", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중"], 
        image: "images/Camilo.png", 
        dialogue: "이 아름다운 꽃도 당신에 비할 바는 아니군요." 
    },
    { 
        name: "카티야", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["하"], 
        image: "images/Katia.png", 
        dialogue: "전원 타겟이라고 했지? 알았어." 
    },
    { 
        name: "칼라", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "control"], 
        difficulty: ["상중"], 
        image: "images/Karla.png", 
        dialogue: "꺼져, 너희들 말 들어줄 생각 따윈 없어." 
    },
    { 
        name: "캐시", 
        gender: "여", 
        type: "암살자", 
        playstyle: ["speed", "damage"], 
        difficulty: ["상중"], 
        image: "images/Cathy.png", 
        dialogue: "피와 사체를 보는 건 익숙합니다." 
    },
    { 
        name: "케네스", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["damage", "defense"], 
        difficulty: ["중"], 
        image: "images/Kenneth.png", 
        dialogue: "각오는 이미 오래전부터 했어." 
    },
    { 
        name: "클로에", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "defense"], 
        difficulty: ["상"], 
        image: "images/Chole.png", 
        dialogue: "인형이 움직인 것 같다고? 농담도 참." 
    },
    { 
        name: "키아라", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["defense", "damage"], 
        difficulty: ["중하"], 
        image: "images/Chiara.png", 
        dialogue: "난 더럽혀졌어..구원 받지 못할거야.." 
    },
    { 
        name: "타지아", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상중"], 
        image: "images/Tazia.png", 
        dialogue: "유리는 깨지면 끝이야." 
    },
    { 
        name: "테오도르", 
        gender: "남", 
        type: "원거리 딜러", 
        playstyle: ["support", "damage"], 
        difficulty: ["중하"], 
        image: "images/Theodore.png", 
        dialogue: "뒤는 제가 맡겠습니다." 
    },
    { 
        name: "펠릭스", 
        gender: "남", 
        type: "근거리 딜러", 
        playstyle: ["speed", "damage"], 
        difficulty: ["상중"], 
        image: "images/Felix.png", 
        dialogue: "목표는 높게, 행동은 빠르게! 좋아, 가볼까?" 
    },
    { 
        name: "프리야", 
        gender: "여", 
        type: "서포터", 
        playstyle: ["support", "control"], 
        difficulty: ["중"], 
        image: "images/Priya.png", 
        dialogue: "제 마음이 깃든 연주를 모두에게 들려주고 싶어요." 
    },
    { 
        name: "피오라", 
        gender: "여", 
        type: "근거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상중"], 
        image: "images/Fiora.png", 
        dialogue: "허리! 목! 자세가 엉망이야!" 
    },
    { 
        name: "피올로", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상중"], 
        image: "images/Piolo.png", 
        dialogue: "마음의 틈새를 메꿔야 한다." 
    },
    { 
        name: "하트", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "support"], 
        difficulty: ["상중"], 
        image: "images/Hart.png", 
        dialogue: "러브 앤 피..피스" 
    },
    { 
        name: "헤이즈", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["damage", "speed"], 
        difficulty: ["중"], 
        image: "images/Haze.png", 
        dialogue: "어디까지나 프로답게" 
    },
    { 
        name: "현우", 
        gender: "남", 
        type: "브루저", 
        playstyle: ["defense", "control"], 
        difficulty: ["하"], 
        image: "images/Hyunwoo.png", 
        dialogue: "삶은 고통이에요. 더 이어가봤자 준비된 아픔들이 나를 기다릴 뿐이죠." 
    },
    { 
        name: "혜진", 
        gender: "여", 
        type: "원거리 딜러", 
        playstyle: ["control", "damage"], 
        difficulty: ["중"], 
        image: "images/Hyejin.png", 
        dialogue: "이것도 신의 뜻이겠죠" 
    },
    { 
        name: "히스이", 
        gender: "여", 
        type: "브루저", 
        playstyle: ["damage", "speed"], 
        difficulty: ["상중"], 
        image: "images/Hisui.png", 
        dialogue: "모든 것은 그분의 뜻대로" 
    },

];

let currentQuestion = 0;
let userAnswers = [];
let selectedAnswers = [];

function startQuiz() {
    document.getElementById("welcome-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    currentQuestion = 0; // 초기화
    userAnswers = []; // 사용자 답변 초기화
    showQuestion(currentQuestion); // 첫 번째 질문 표시
}

function showQuestion(index) {
    const questionBox = document.getElementById("question-box");
    const questionData = questions[index];
    document.getElementById("question").textContent = questionData.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = answer;
        button.onclick = () => selectAnswer(answer);
        answersDiv.appendChild(button);
    });
    document.getElementById("next-button").disabled = questionData.multiSelect ? false : true;
}

function selectAnswer(answer) {
    const question = questions[currentQuestion];
    if (question.multiSelect) {
        if (selectedAnswers.includes(answer)) {
            selectedAnswers = selectedAnswers.filter(a => a !== answer);
        } else if (selectedAnswers.length < question.maxSelect) {
            selectedAnswers.push(answer);
        }
        document.querySelectorAll(".answer").forEach(button => {
            button.style.background = selectedAnswers.includes(button.textContent) ? "#0056b3" : "#007BFF";
        });
    } else {
        userAnswers[currentQuestion] = answer;
        document.getElementById("next-button").disabled = false;
    }
}

function nextQuestion() {
    if (questions[currentQuestion].multiSelect) {
        userAnswers[currentQuestion] = [...selectedAnswers];
        selectedAnswers = [];
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    const filteredCharacters = filterByGender(userAnswers);
    const bestCharacter = calculateScores(filteredCharacters, userAnswers);
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>추천 캐릭터: ${bestCharacter.name}</h2>
        <img src="${bestCharacter.image}" alt="${bestCharacter.name}">
        <p>${bestCharacter.dialogue}</p>
    `;
}

function filterByGender(userAnswers) {
    return allCharacters.filter(character => character.gender === userAnswers[0]);
}

function mapAnswersToGroups(userAnswers) {
    const groups = {
        melee: ["근거리 딜러", "브루저", "암살자"],
        ranged: ["원거리 딜러", "서포터"],
        tank: ["탱커"],
        damage: ["강력한 피해", "빠른 속도"],
        support: ["아군 보조"],
        control: ["적 제압 기술"],
        defense: ["튼튼한 방어력"],
    };

    return {
        type: Object.keys(groups).find(key => groups[key].includes(userAnswers[1])),
        playstyle: userAnswers[5].map(answer => Object.keys(groups).find(key => groups[key].includes(answer))),
    };
}

function calculateScores(filteredCharacters, userAnswers) {
    const userGroups = mapAnswersToGroups(userAnswers);
    let bestMatch = null;
    let bestScore = 0;

    for (const character of filteredCharacters) {
        let score = 0;

        if (character.type === userGroups.type) score += 40;
        userGroups.playstyle.forEach(group => {
            if (character.playstyle.includes(group)) score += 30;
        });
        if (character.difficulty.includes(userAnswers[2])) score += 20;

        if (score > bestScore) {
            bestScore = score;
            bestMatch = character;
        }
    }

    return bestMatch;
}
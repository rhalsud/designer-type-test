const RESULTS = {
  minimalist: {
    emoji: "⬜",
    title: "미니멀리스트 디자이너",
    desc: "불필요한 요소를 걷어내고 본질만 남기는 것을 좋아하는 당신. 여백과 절제된 타이포그래피로 메시지를 명확하게 전달하는 데 강점이 있습니다.",
    tags: ["#절제미", "#여백의미학", "#그리드", "#기능주의"],
  },
  artist: {
    emoji: "🎨",
    title: "크리에이티브 아티스트",
    desc: "규칙보다 표현을 우선하는 자유로운 영혼. 새로운 형태와 색을 실험하며 예상치 못한 방식으로 사람들의 시선을 사로잡는 것을 즐깁니다.",
    tags: ["#실험정신", "#컬러감각", "#비주얼임팩트", "#자유로운발상"],
  },
  strategist: {
    emoji: "📊",
    title: "전략가형 디자이너",
    desc: "감보다 데이터와 목표를 기반으로 움직이는 타입. 브랜드의 방향성과 비즈니스 목표를 시각적 결과물로 정확히 번역해내는 데 능숙합니다.",
    tags: ["#브랜드전략", "#데이터기반", "#일관성", "#목표지향"],
  },
  collaborator: {
    emoji: "🤝",
    title: "사용자 중심 콜라보레이터",
    desc: "사용자의 목소리에 귀 기울이고 팀과 함께 만들어가는 것을 중요하게 생각하는 당신. 공감을 바탕으로 실제로 쓰이는 디자인을 만들어냅니다.",
    tags: ["#사용자경험", "#협업", "#공감능력", "#피드백반영"],
  },
};

const QUESTIONS = [
  {
    text: "새 프로젝트를 시작할 때 가장 먼저 하는 일은?",
    options: [
      { label: "레퍼런스보다 먼저 스케치북에 낙서를 시작한다", type: "artist" },
      { label: "타겟 사용자와 목표를 정리한 문서를 만든다", type: "strategist" },
      { label: "팀원들과 브레인스토밍 미팅을 잡는다", type: "collaborator" },
      { label: "군더더기 없는 레이아웃부터 잡는다", type: "minimalist" },
    ],
  },
  {
    text: "작업물에 대한 피드백을 받았을 때 나의 반응은?",
    options: [
      { label: "왜 그렇게 느꼈는지 근거와 데이터를 먼저 묻는다", type: "strategist" },
      { label: "다양한 의견을 모아서 다음 버전에 반영한다", type: "collaborator" },
      { label: "내 직관과 다르면 한 번은 방어적으로 설명한다", type: "artist" },
      { label: "불필요한 요소를 더 걷어낼 수 있는지부터 본다", type: "minimalist" },
    ],
  },
  {
    text: "가장 만족스러웠던 결과물의 특징은?",
    options: [
      { label: "군더더기 없이 깔끔하게 정리된 레이아웃", type: "minimalist" },
      { label: "보는 사람의 감정을 크게 움직인 비주얼", type: "artist" },
      { label: "실제 지표(전환율, 만족도 등)가 좋아진 결과", type: "strategist" },
      { label: "사용자 테스트에서 좋은 반응을 얻은 결과", type: "collaborator" },
    ],
  },
  {
    text: "작업 중 시간 가는 줄 모르는 순간은?",
    options: [
      { label: "색과 형태를 이것저것 실험할 때", type: "artist" },
      { label: "그리드와 여백을 픽셀 단위로 맞출 때", type: "minimalist" },
      { label: "경쟁사와 시장을 분석할 때", type: "strategist" },
      { label: "사용자 인터뷰 내용을 들여다볼 때", type: "collaborator" },
    ],
  },
  {
    text: "동료들이 나에게 자주 하는 말은?",
    options: [
      { label: "\"너무 화려한 거 아니야?\"", type: "artist" },
      { label: "\"이걸 왜 이렇게까지 단순화했어?\"", type: "minimalist" },
      { label: "\"항상 숫자부터 물어보네\"", type: "strategist" },
      { label: "\"의견을 정말 잘 들어줘\"", type: "collaborator" },
    ],
  },
  {
    text: "이상적인 작업 환경은?",
    options: [
      { label: "혼자 몰입해서 아이디어를 자유롭게 펼칠 수 있는 곳", type: "artist" },
      { label: "명확한 목표와 우선순위가 정리된 곳", type: "strategist" },
      { label: "언제든 팀원과 즉시 논의할 수 있는 곳", type: "collaborator" },
      { label: "군더더기 없이 조용하고 정돈된 곳", type: "minimalist" },
    ],
  },
  {
    text: "디자인에서 가장 중요하다고 생각하는 가치는?",
    options: [
      { label: "명확성과 기능", type: "minimalist" },
      { label: "독창성과 표현력", type: "artist" },
      { label: "비즈니스 성과와의 연결", type: "strategist" },
      { label: "사용자에 대한 공감", type: "collaborator" },
    ],
  },
  {
    text: "완성된 결과물을 보여줄 때 가장 기대되는 반응은?",
    options: [
      { label: "\"와, 이런 시도는 처음 봐\"", type: "artist" },
      { label: "\"목표했던 지표가 정확히 개선됐어\"", type: "strategist" },
      { label: "\"쓰기 정말 편해졌어\"", type: "collaborator" },
      { label: "\"깔끔하고 이해하기 쉬워\"", type: "minimalist" },
    ],
  },
];

let currentQuestion = 0;
const scores = { minimalist: 0, artist: 0, strategist: 0, collaborator: 0 };

const screens = {
  intro: document.getElementById("intro-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
};

const progressFill = document.getElementById("progress-fill");
const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function startQuiz() {
  currentQuestion = 0;
  Object.keys(scores).forEach((key) => (scores[key] = 0));
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const progress = (currentQuestion / QUESTIONS.length) * 100;
  progressFill.style.width = `${progress}%`;
  questionCount.textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  questionText.textContent = question.text;

  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.label;
    btn.addEventListener("click", () => selectOption(option.type));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type] += 1;
  currentQuestion += 1;

  if (currentQuestion < QUESTIONS.length) {
    renderQuestion();
  } else {
    progressFill.style.width = "100%";
    showResult();
  }
}

function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );
  const result = RESULTS[winner];

  document.getElementById("result-emoji").textContent = result.emoji;
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-desc").textContent = result.desc;

  const tagsContainer = document.getElementById("result-tags");
  tagsContainer.innerHTML = "";
  result.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  showScreen("result");
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", startQuiz);

import type { Question, ResultType, ResultTypeId } from './types';

export const QUESTIONS: Question[] = [
  {
    text: '새 프로젝트를 시작할 때, 나는',
    options: [
      { label: '레퍼런스와 무드보드부터 모은다', type: 'mood-maker' },
      { label: '목표와 제약 조건부터 정리한다', type: 'problem-solver' },
    ],
  },
  {
    text: '디자인 아이디어가 떠오르면',
    options: [
      { label: '동료들과 먼저 이야기 나누며 다듬는다', type: 'team-player' },
      { label: '일단 혼자 시각화해본다', type: 'mood-maker' },
    ],
  },
  {
    text: '결과물을 평가하는 나만의 기준은',
    options: [
      { label: '사용자가 얼마나 쉽게 쓰는가', type: 'problem-solver' },
      { label: '팀이 얼마나 공감하는가', type: 'team-player' },
    ],
  },
  {
    text: '작업 중 의견 충돌이 생기면',
    options: [
      { label: '내 감각과 확신을 밀어붙인다', type: 'mood-maker' },
      { label: '데이터와 근거로 설득한다', type: 'problem-solver' },
    ],
  },
  {
    text: '작업이 막힐 때 나는',
    options: [
      { label: '다른 사람에게 의견을 구한다', type: 'team-player' },
      { label: '레퍼런스를 보며 영감을 찾는다', type: 'mood-maker' },
    ],
  },
];

export const RESULT_TYPES: Record<ResultTypeId, ResultType> = {
  'mood-maker': {
    id: 'mood-maker',
    name: '무드메이커',
    description:
      '논리보다 감각이 먼저 움직이는 타입. 분위기와 스토리로 사람의 마음을 움직이는 디자인을 만들어요. 레퍼런스와 영감을 통해 자신만의 색을 찾아가는 걸 좋아합니다.',
    tags: ['#감성적직관', '#무드보드', '#스토리텔링'],
  },
  'problem-solver': {
    id: 'problem-solver',
    name: '문제해결러',
    description:
      '감이 아니라 근거로 말하는 타입. 사용자의 문제를 정확히 짚어내고, 명확한 논리로 팀을 설득하는 데 강해요. 효율과 사용성을 최우선으로 생각합니다.',
    tags: ['#논리적사고', '#사용성중심', '#데이터기반'],
  },
  'team-player': {
    id: 'team-player',
    name: '팀플레이어',
    description:
      '혼자보다 함께일 때 더 좋은 결과가 나온다고 믿는 타입. 다양한 의견을 조율하고 합의점을 찾아가며 팀 전체의 시너지를 이끌어내요.',
    tags: ['#협업', '#커뮤니케이션', '#합의도출'],
  },
};

export function calculateResult(answers: ResultTypeId[]): ResultType {
  const scores: Record<ResultTypeId, number> = {
    'mood-maker': 0,
    'problem-solver': 0,
    'team-player': 0,
  };

  answers.forEach((type) => {
    scores[type] += 1;
  });

  const winner = (Object.keys(scores) as ResultTypeId[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b,
  );

  return RESULT_TYPES[winner];
}

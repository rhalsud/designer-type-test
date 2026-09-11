export type ResultTypeId = 'mood-maker' | 'problem-solver' | 'team-player';

export interface AnswerOption {
  label: string;
  type: ResultTypeId;
}

export interface Question {
  text: string;
  options: [AnswerOption, AnswerOption];
}

export interface ResultType {
  id: ResultTypeId;
  name: string;
  description: string;
  tags: string[];
}

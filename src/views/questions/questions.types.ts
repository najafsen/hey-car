export interface Question {
  question: string;
  published_at: string;
  url: string;
  choices: QuestionChoice[];
}

export interface QuestionChoice {
  choice: string;
  url: string;
  votes: number;
}

export type Question = string;
export type Answer = string;

export interface Message {
  questions: Question[];
  answers: Answer[];
  selectedAnswer: Answer | null;
}

export type Conversation = Message[];
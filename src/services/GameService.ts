import { Data, DataItem } from "../data/Data.ts";

type Question = string;
type Answer = string;

interface Message {
  questions: Question[];
  answers: Answer[];
  selectedAnswer: Answer | null;
}

export class GameService {
  public conversation: Message[] = [];

  constructor(private data: Data) {}

  firstMessage(): Message {
    return this.getMessage("Start");
  }

  getMessage(answer: Answer): Message {
    const dataItem = this.data.find((dataItem) => dataItem.name === answer);

    if (!dataItem || !dataItem.source) {
      throw new Error("Data Item doesn't exist");
    }

    const answers = this.generateAnswers(dataItem.source);
    const questions = this.generateQuestions(dataItem.source);
    const selectedAnswer = null;

    const message = { questions, answers, selectedAnswer };

    this.updateConversation(answer, message);

    return message;
  }

  private updateConversation(answer: Answer, message: Message) {
    if (this.conversation.length > 0) {
      this.conversation[this.conversation.length - 1].selectedAnswer = answer;
    }

    this.conversation.push(message);
  }

  private generateAnswers(dataItemSource: DataItem["source"]): Answer[] {
    return (
      dataItemSource
        .match(/\[\[(\w+)\]\]/g)
        ?.map((answer) => answer.replace(/\[|\[|\]|\]/g, "")) || []
    );
  }

  private generateQuestions(dataItemSource: DataItem["source"]): Question[] {
    return dataItemSource
      .split("[")[0]
      .trim()
      .split("\n")
      .filter((question) => question);
  }
}

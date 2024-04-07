import { Data, DataItem } from "../data/Data.ts";

type Question = string;
type Answer = string;

interface Message {
  questions: Question[];
  answers: Answer[];
}

export class GameService {
  public conversation: string[] = [];

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

    return { questions, answers };
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

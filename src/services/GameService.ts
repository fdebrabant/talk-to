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
    const startItem = this.data.find((dataItem) => dataItem.name === "Start");

    if (!startItem || !startItem.source) {
      throw new Error("Start Item doesnt exist");
    }

    const answers = this.generateAnswers(startItem.source);
    const questions = this.generateQuestions(startItem.source);

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

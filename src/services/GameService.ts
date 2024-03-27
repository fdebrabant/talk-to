import {Data} from "../data/Data.ts"

interface Message {
    questions: string[];
    answers: string[]
}

export class GameService {
    public conversation: string[] = [];
    constructor(private data: Data) {
    }

    firstMessage(): Message | undefined {
        const startItem = this.data.find(dataItem => dataItem.name === "Start");

        if (!startItem || !startItem.source) {
            return;
        }

        const answers = startItem.source
            .match(/\[\[(\w+)\]\]/g)
            ?.map(answer => answer.replace(/\[|\[|\]|\]/g, ''))

        const questions = startItem.source
            .split('[')[0]
            .trim()
            .split('\n').filter(question => question);

        return {questions, answers: answers || []};
    }

}
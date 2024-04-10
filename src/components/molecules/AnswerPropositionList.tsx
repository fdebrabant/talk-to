import { Answer } from "models/Conversation.ts";

interface AnswerPropositionListProps {
  answers: Answer[];
}

export default function AnswerPropositionList({ answers }: AnswerPropositionListProps) {
  return (
    <>
      {answers.map((answer, i) => {
        return <p key={i}>{answer}</p>;
      })}
    </>
  );
}

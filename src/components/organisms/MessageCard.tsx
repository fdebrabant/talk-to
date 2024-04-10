import QuestionCard from "components/atoms/QuestionCard";
import SelectedAnswerCard from "components/atoms/SelectedAnswerCard";
import AnswerPropositionList from "components/molecules/AnswerPropositionList";
import { Message } from "models/Conversation.ts";

interface MessageCardProps {
  message: Message;
}

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <div>
      {message.questions.map((question , i) => (
        <QuestionCard question={question} key={i} />
      ))}

      {message.selectedAnswer && (
        <SelectedAnswerCard
          answer={message.selectedAnswer}
        ></SelectedAnswerCard>
      )}

      {message.selectedAnswer === null && (
        <AnswerPropositionList answers={message.answers} />
      )}
    </div>
  );
}

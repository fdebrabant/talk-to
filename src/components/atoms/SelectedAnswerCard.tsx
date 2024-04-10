import { Answer } from "models/Conversation.ts";

interface SelectedAnswerCardProps {
    answer: Answer;
}

export default function SelectedAnswerCard({answer}: SelectedAnswerCardProps) {
    return (<p>
        {answer}
    </p>)
}
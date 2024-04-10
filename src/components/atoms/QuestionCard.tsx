import { Question } from "models/Conversation.ts";

interface QuestionProps {
    question: Question;
}

export default function QuestionCard({question}: QuestionProps) {
    return (<p>
        {question}
    </p>)
}
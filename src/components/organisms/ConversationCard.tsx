import { Conversation } from "models/Conversation.ts";
import MessageCard from "./MessageCard";

interface ConversationProps {
  conversation: Conversation;
}

export default function ConversationCard({
  conversation,
}: ConversationProps) {
  return (
    <>
      {conversation.map((message, i) => (
        <MessageCard message={message} key={i} />
      ))}
    </>
  );
}

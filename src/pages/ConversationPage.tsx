import Profile from "components/molecules/Profile";
import ConversationCard from "components/organisms/ConversationCard";
import { useEffect, useState } from "react";
import { Conversation } from "models/Conversation";
import { gameService } from "AppServices";

export default function ConversationPage() {
  const [conversation, setConversation] = useState<Conversation>([]);

  useEffect(() => {
    const initConversation = async () => {
      try {
        await gameService.firstMessage();
        setConversation(gameService.conversation);
      } catch (error) {
        console.log(error);
      }
    };
    initConversation();
  }, []);

  return (
    <>
      <Profile />
      <ConversationCard conversation={conversation} />
    </>
  );
}

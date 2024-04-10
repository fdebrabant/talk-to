// import Message from "../components/Message.tsx";
// import { useEffect, useState } from "react";
// import messagesData from "../data/data.json";
// import { DataItem } from "../data/Data.ts";
import Profile from "components/molecules/Profile";
import ConversationCard from "components/organisms/ConversationCard";

export default function ConversationPage() {
  return (
    <>
      <Profile />

      <ConversationCard
        conversation={[
          {
            questions: ["What's your favorite color?"],
            answers: ["Purple", "Yellow", "Pink"],
            selectedAnswer: "Purple",
          },
          {
            questions: ["Cool! Whats your favorite purple object?"],
            answers: ["Car", "lavander", "Eggplant"],
            selectedAnswer: null,
          },
        ]}
      />
    </>
  );
}

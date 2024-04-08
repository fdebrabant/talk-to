import Message from "./Message.tsx";
import { useEffect, useState } from "react";
import messagesData from "../../data/data.json";
import { DataItem } from "../../data/Data.ts";

export default function Conversation() {
  // const [messages, setMessages] = useState([]);
  const [initialMessage, setInitialMessage] = useState<DataItem | undefined>(
    undefined
  );
  const [answers, setAnswers] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const startMessage = messagesData.find(
      (message) => message.name === "Start"
    );

    if (startMessage) {
      setInitialMessage(startMessage);
      setAnswers(extractMessageAndAnswers(startMessage.source)?.answers);
    }
  }, []);

  function extractMessageAndAnswers(inputString: string) {
    const startIndex = inputString.indexOf("[[");
    if (startIndex === -1) {
      return null;
    }

    const message = inputString.substring(0, startIndex).trim();

    const answersRegex = /\[\[([^\]]+)\]\]/g;
    let match;
    const answers = [];
    while ((match = answersRegex.exec(inputString)) !== null) {
      answers.push(match[1].trim());
    }

    return { message, answers };
  }

  return (
    <>
      <div>
        <img
          className="rounded-circle"
          src="https://placehold.co/50x50"
          alt="Photo de inconnu.e"
        />
        <p>Inconnu.e</p>
      </div>

      {initialMessage && (
        <Message
          text={extractMessageAndAnswers(initialMessage.source)?.message || ""}
        />
      )}

      {/*{messages.map((message, index)=> (*/}
      {/*    <Message text={message} key={index}/>*/}
      {/*))}*/}

      <form>
        <fieldset>
          <legend>Mon message:</legend>

          {answers &&
            answers.map((answer, index) => (
              <div key={index}>
                <input type="radio" id={answer} name={answer} value={answer} />
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}

          <button type="submit">Envoyer</button>
        </fieldset>
      </form>
    </>
  );
}

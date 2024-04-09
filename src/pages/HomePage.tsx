import { Link } from "react-router-dom";
import Test from "../components/Test.tsx";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-center">bienvenu·e sur Talkto</h1>
      <Test text="OK" />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Link to="/conversation">Conversation</Link>
      </div>
    </>
  );
}

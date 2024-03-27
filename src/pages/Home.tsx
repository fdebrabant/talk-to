import Test from "../components/Test.tsx";
import {useState} from "react";

export default function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1 className="text-center">bienvenu·e sur Talkto</h1><Test text="OK"/>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}
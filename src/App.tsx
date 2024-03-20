import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Test from 'components/Test';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header role="banner">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} alt="React logo"/>
                </a>
            </header>
            <main role="main">
                <h1>Vite + React</h1>
                <Test text="OK"/>
                <div>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </main>
            <footer role="contentinfo"></footer>
        </>
    )
}

export default App

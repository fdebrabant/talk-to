import {useState} from 'react'
import logo from './assets/logo.svg'
import profil from './assets/icons/profil.svg'
import './App.scss'

import Test from 'components/Test';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header role="banner">
                <img src={logo} alt="Talk to"/>
                <a href="/"><img src={profil} alt=""/></a>
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
            <footer role="contentinfo">
                <p>© All Rights Reserved.</p>
                <a href="/">About us</a>
            </footer>
        </>
    )
}

export default App

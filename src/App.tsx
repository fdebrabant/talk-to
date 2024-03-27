
import './App.scss'

// components
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import Conversation from "./pages/Conversation/Conversation.tsx";
// import Home from "./components/pages/Home.tsx";

function App() {


    return (
        <div className="app-content container">
            <Header/>
            <main role="main">
               {/*<Home/>*/}
                <Conversation/>
            </main>
            <Footer/>
        </div>
    )
}

export default App

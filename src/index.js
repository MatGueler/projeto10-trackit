import ReactDOM from "react-dom";




// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";


// Components
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Habits from "./Components/Habits/Habits";
import Today from "./Components/Today/Today";
import Historic from "./Components/Historic/Historic";
import TokenContext from "./Contexts/TokenContext";

// CSS data
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'


function App() {
    const [header, setHeader] = useState('none');
    const [footer, setFooter] = useState('none');
    const [infos, setInfos] = useState([])
    const [token, setToken] = useState('')
    const [percentage, setPercentage] = useState(50)

    return (
        <>
            <TokenContext.Provider value={{ token, setToken, infos, setInfos, percentage, setPercentage }}>
                <BrowserRouter>
                    <Header header={header} />
                    <Footer footer={footer} />
                    <Routes>

                        <Route path="/" element={<Login />} />

                        <Route path="/cadastro" element={<Register />} />

                        <Route path="/habitos" element={<Habits />} />

                        <Route path="/hoje" element={<Today setHeader={setHeader} setFooter={setFooter} />} />

                        <Route path="/historico" element={<Historic />} />
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
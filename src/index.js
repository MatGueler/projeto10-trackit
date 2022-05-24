import ReactDOM from "react-dom";

// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


// Components
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Habits from "./Components/Habits/Habits";
import Historic from "./Components/Historic/Historic";

// CSS data
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'


function App() {
    const [header,setHeader] = useState('none');
    const [footer,setFooter] = useState('none');

    return (
        <>
            <BrowserRouter>
            <Header header={header} setHeader={setHeader}/>
            <Footer footer={header} setFooter={setHeader}/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Register/>}/>
                    <Route path="/habitos" element={<Habits header={header} setHeader={setHeader}/>}/>
                    <Route path="/historico" element={<Historic />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
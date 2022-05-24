import ReactDOM from "react-dom";
import Login from "./Components/Login/Login";
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
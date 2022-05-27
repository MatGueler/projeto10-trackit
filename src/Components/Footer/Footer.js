import styled from 'styled-components'
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import { useContext } from 'react'

// Components
import TokenContext from '../../Contexts/TokenContext';

function Footer({ footer }) {

    const { percentage } = useContext(TokenContext)

    let navigate = useNavigate()

    return (
        <>
            <Bottom footer={footer}>
                <h1 onClick={() => navigate('/habitos')}>Hábitos</h1>
                <Progress onClick={() => navigate('/hoje')}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Progress>
                <h1 onClick={() => navigate('/historico')}>Hisórico</h1>
            </Bottom>
        </>
    )
}

export default Footer;

const Bottom = styled.footer`
height: 70px;
width: 100%;
position:fixed;
bottom: 0;
display: ${props => props.footer};
justify-content: space-around;
align-items: center;
background-color: #FFFFFF;
z-index: 1;

h1{
    font-size: 18px;
    color: #52B6FF;
    cursor: pointer;
}
`

const Progress = styled.div`
width: 100px;
position:absolute;
bottom:20px;
cursor: pointer;
`
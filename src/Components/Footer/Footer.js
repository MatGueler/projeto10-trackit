import styled from 'styled-components'
import "react-circular-progressbar/dist/styles.css";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";

function Footer({footer}) {
    const percentage = 66;
    return (
        <>
            <Bottom footer={footer}>
                <h1>Hábitos</h1>
                <Progress>
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
                <h1>Hisórico</h1>
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

h1{
    font-size: 18px;
    color: #52B6FF;
}
`

const Progress = styled.div`
width: 100px;
position:absolute;
bottom:20px;
`
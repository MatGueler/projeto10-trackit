import TokenContext from "../../Contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from 'dayjs'
import styled from 'styled-components'

function Trocar({ item, habitsToday, finished, setFinished }) {

    const [color, setColor] = useState(false)

    if (color === false) {
        return (
            <TodayHabit color="EBEBEB">
                <Info>
                    <h2>dd</h2>
                    <h3>Sequencia atual: dias</h3>
                    <h3>Seu recorde: dias</h3>
                </Info>
                <ion-icon name="checkbox" onClick={() => {
                    setColor(!color)
                    setFinished([...finished, (item.id)])
                }}></ion-icon>
            </TodayHabit>
        )
    }
    else {
        return (
            <TodayHabit color="8FC549">
                <Info>
                    <h2>igual</h2>
                    <h3>Sequencia atual: dias</h3>
                    <h3>Seu recorde: dias</h3>
                </Info>
                <ion-icon name="checkbox" onClick={() => {
                    setColor(!color)
                    setFinished([...finished, (item.id)])
                }}></ion-icon>
            </TodayHabit>
        )
    }
}

function Today(props) {

    const dayjs = require('dayjs')

    var isoWeek = require('dayjs/plugin/isoWeek')

    dayjs.extend(isoWeek)

    const { token, infos } = useContext(TokenContext)

    const { setHeader, setFooter } = props;

    const [finished, setFinished] = useState([])

    const [habitsToday, setHabitsToday] = useState([])

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    setHeader('flex')
    setFooter('flex')

    useEffect(() => {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config);

        promise.then((response) => {
            setHabitsToday(response.data)
        });
        promise.catch((err) => console.log(err))

    }, []);

    return (
        <>
            <Container>
                <StatusHabits>
                    <h1>{daysOfWeek[dayjs().isoWeekday()]}, {dayjs().format('DD/MM')}</h1>
                    <h2>67% dos hábitos concluídos</h2>
                </StatusHabits>

                {habitsToday.map((item) => <Trocar item={item} habitsToday={habitsToday} finished={finished} setFinished={setFinished} />)}

            </Container>
        </>
    )
}

export default Today;

const Container = styled.div`
margin: 0 20px;
`

const StatusHabits = styled.div`
height: 90px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h1{
    font-size: 23px;
    color: #126BA5;
}

h2{
    font-size: 18px;
    color: #8FC549;
}
`

const TodayHabit = styled.div`
height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
margin-top: 20px;
padding: 0 10px;
box-sizing: border-box;
background-color: #FFFFFF;

h2{
    color: #666666;
    font-size: 20px;
    margin-bottom: 10px;
}

h3{
    color: #666666;
    font-size: 13px;
}

ion-icon{
    font-size: 70px;
    color: #${(props) => props.color};
    cursor: pointer;
}
`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
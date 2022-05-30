import TokenContext from "../../Contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'


function CheckHabit(id, check, token, update, setUpdate) {

    if (check === 'mark') {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, '', config);

        promise.then((response) => { setUpdate(!update) })

        promise.catch((err) => { console.log(err) })

    }
    else {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, '', config);

        promise.then((response) => setUpdate(!update))

        promise.catch((err) => { console.log(err) })
    }


}

function Trocar({ item, habitsToday, finished, setFinished, token, habitsDone, setHabitsDone, percentage, setPercentage, update, setUpdate }) {

    const [color, setColor] = useState(item.done)

    if (color === false) {

        let u = 0;

        habitsToday.map((item) => {
            if (item.done === true) {
                u += 1
                return u;
            }
        })
        setPercentage(Math.ceil((u / habitsToday.length) * 100))


        return (
            <TodayHabit color="EBEBEB" sequence='666666'>
                <Info>
                    <h2>{item.name}</h2>
                    <h3>Sequencia atual: {item.currentSequence} dias</h3>
                    <h3>Seu recorde: {item.highestSequence} dias</h3>
                </Info>
                <ion-icon name="checkbox" onClick={() => {
                    setColor(!color)
                    setFinished([...finished, (item.id)])
                    CheckHabit(item.id, 'mark', token, update, setUpdate)
                }}></ion-icon>
            </TodayHabit>
        )
    }
    else {

        let u = 0;

        habitsToday.map((item) => {
            if (item.done === true) {
                u += 1
                return u;
            }
        })

        setPercentage(Math.ceil((u / habitsToday.length) * 100))

        return (
            <TodayHabit color="8FC549" sequence='8FC549'>
                <Info>
                    <h2>{item.name}</h2>
                    <h3>Sequencia atual: <span>{item.currentSequence} dias</span></h3>
                    <h3>Seu recorde: <span>{item.highestSequence} dias</span></h3>
                </Info>
                <ion-icon name="checkbox" onClick={() => {
                    setColor(!color)
                    setFinished([...finished, (item.id)])
                    CheckHabit(item.id, 'off', token, update, setUpdate)
                }}></ion-icon>
            </TodayHabit>
        )
    }
}

function Today(props) {

    const dayjs = require('dayjs')

    var isoWeek = require('dayjs/plugin/isoWeek')

    dayjs.extend(isoWeek)

    const { token, percentage, setPercentage, habitsToday, setHabitsToday, setMyHabits } = useContext(TokenContext)

    const { setHeader, setFooter } = props;

    const [finished, setFinished] = useState([])

    const [update, setUpdate] = useState(true)

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

        let u = 0;

        habitsToday.map((item, index) => {
            if (item.done === true) {
                u += 1
                return u;
            }
        })

        if (!isNaN(Math.ceil((u / habitsToday.length) * 100))) {
            setPercentage(Math.ceil((u / habitsToday.length) * 100))
        }

    }, [update]);




    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config);

        promise.then((response) => {
            setMyHabits(response.data)
            let u = 0;
            habitsToday.map((item) => {
                if (item.done === true) {
                    u += 1
                    return u;
                }
            })
        });

    }, [update]);



    return (
        <>
            <Container>
                <StatusHabits>
                    <h1>{daysOfWeek[dayjs().isoWeekday()]}, {dayjs().format('DD/MM')}</h1>
                    <h2>{percentage} % dos hábitos concluídos</h2>
                </StatusHabits>

                {habitsToday.map((item, index) => <Trocar key={index} item={item} habitsToday={habitsToday} finished={finished} setFinished={setFinished} token={token} percentage={percentage} setPercentage={setPercentage} update={update} setUpdate={setUpdate} />)}

            </Container>
        </>
    )
}

export default Today;

const Container = styled.div`
margin: 0 20px 150px 20px;
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

span:first-child{
    color: #${(props) => props.sequence};
}

span:nth-child(2){
    color: #${(props) => props.record};
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
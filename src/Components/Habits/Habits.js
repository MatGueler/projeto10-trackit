
import styled from 'styled-components'

function Habits(props) {
    const { header, setHeader, footer, setFooter, infos } = props;
    setHeader('flex')
    setFooter('flex')

    return (
        <>
            <MyHabits>
                <h1>Meus Hábitos</h1>
                <AddHabit>
                    <ion-icon name="add-outline"></ion-icon>
                </AddHabit>
            </MyHabits>
        </>
    )
}


const MyHabits = styled.div`
height:100px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-sizing: border-box;

h1{
    font-size: 23px;
    color: #126BA5;
}
`

const AddHabit = styled.div`
height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: #52B6FF;
border-radius: 5px;
cursor: pointer;

ion-icon{
    color: #FFFFFF;
    font-size: 20px;
}
`

export default Habits;
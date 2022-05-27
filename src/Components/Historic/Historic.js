import styled from 'styled-components'

function Historic() {
    return (
        <>
            <Container>
                <HistoryStatus>
                    <h1>Histórico</h1>
                </HistoryStatus>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
        </>
    )
}

export default Historic;

const Container = styled.div`
margin: 0 20px 150px 20px;

h2{
    font-size: 18px;
    text-align: justify;
    color: #666666;
}
`

const HistoryStatus = styled.div`
height: 90px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h1{
    font-size: 23px;
    color: #126BA5;
}
`
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import logo from '../../Assets/Images/logo.png'
import TokenContext from '../../Contexts/TokenContext';
import { ThreeDots } from 'react-loader-spinner'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disableInput, setDisableInput] = useState(false)
    const [loading, setLoading] = useState(false)
    const { setToken, infos, setInfos } = useContext(TokenContext)

    let navigate = useNavigate()

    function LogInto(event) {

        setDisableInput(true)
        setLoading(true)

        event.preventDefault();

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

        const body = {
            email,
            password
        }

        const promise = axios.post(URL, body)

        promise.then(res => {
            let data = res.data;
            setInfos([data])
            setToken(data.token)
            navigate('../hoje')
        })
        promise.catch(err => {
            setDisableInput(false)
            setLoading(false)
            alert('Preencha os campos corretamente!')
        })
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <Form>
                    <input type="email" placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} disabled={disableInput} />
                    <input type="password" placeholder='senha' value={password} onChange={(event) => setPassword(event.target.value)} disabled={disableInput} />
                    <button onClick={LogInto} disabled={disableInput}>{loading ? <ThreeDots color="#FFFFFF" height={20} width={80} /> : 'Entrar'}</button>
                </Form>
                <h1 onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</h1>
            </Container>
        </>
    )
}

export default Login;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 80px 40px 0 40px;


h1{
    margin-top: 20px;
    font-size: 14px;
    color: #52B6FF;
    font-family: 'Lexend', sans-serif;
    text-decoration: underline;
    cursor: pointer;
}
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;

input{
    height: 45px;
    margin: 10px 0;
    border-radius: 5px;
    border: solid 1px #D4D4D4;
    padding: 0 10px;
    font-family: 'Lexend', sans-serif;
    font-size: 20px;
}

input::placeholder{
    color: #D4D4D4;;
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: 0;
    border-radius: 5px;
}
`

const Logo = styled.div`
width:100%;
display: flex;
justify-content: center;

img{
    width: 180px;
}
`
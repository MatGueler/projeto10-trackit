// HOOKS
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

// STYLED
import styled from 'styled-components';

// COMPONENTS
import logo from '../../Assets/Images/logo.png'
import '../Login/Login'

function Register(props) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    function GoToLogin() {
        navigate('/')
    }

    function RegisterData(event) {

        event.preventDefault();

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'

        const body = {
            email,
            name,
            image,
            password
        }

        const promise = axios.post(URL, body)

        promise.then(res => {
            navigate('../')
        })
        promise.catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <Form>
                    <input type="email" placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder='senha' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <input type="text" placeholder='nome' value={name} onChange={(event) => setName(event.target.value)} />
                    <input type="url" placeholder='foto' value={image} onChange={(event) => setImage(event.target.value)} />
                    <button onClick={RegisterData}>Entrar</button>
                </Form>
                <h1 onClick={GoToLogin}>Já tem uma conta? Faça login!</h1>
            </Container>
        </>
    )
}

// STYLED COMPONENTS
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 80px 40px 0 40px;


h1{
    margin-top: 20px;
    font-size: 14px;
    color: #52B6FF;
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
    margin: 5px 0;
    border-radius: 5px;
    border: solid 1px #D4D4D4;
    padding: 0 10px;
    font-size: 20px;
}

input::placeholder{
    color: #D4D4D4;;
}

button{
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

export default Register;
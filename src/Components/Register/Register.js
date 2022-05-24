import styled from 'styled-components';
import '../Login/Login'
import logo from '../../Assets/Images/logo.png'

function Register(){
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <Form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='senha' />
                    <input type="text" placeholder='nome' />
                    <input type="url" placeholder='foto' />
                    <button type="submit">Entrar</button>
                </Form>
                <h1>Já tem uma conta? Faça login!</h1>
            </Container>
        </>
    )
}

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
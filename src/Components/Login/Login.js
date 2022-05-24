import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'

function Login() {
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <Form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='senha' />
                    <button type="submit">Entrar</button>
                </Form>
                <h1>Não tem uma conta? Cadastre-se!</h1>
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
}
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;

input{
    height: 45px;
    margin: 20px 0;
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
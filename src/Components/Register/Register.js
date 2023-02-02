// HOOKS
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

// STYLED
import styled from 'styled-components';

// COMPONENTS
import logo from '../../Assets/Images/logo.png';
import '../Login/Login';

function Register(props) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [password, setPassword] = useState('');
	const [disableInput, setDisableInput] = useState(false);
	const [loading, setLoading] = useState(false);

	let navigate = useNavigate();

	function GoToLogin() {
		navigate('/');
	}

	function RegisterData(event) {
		setDisableInput(true);
		setLoading(true);

		event.preventDefault();

		const URL = `${process.env.REACT_APP_BACK_END_URL}/auth/sign-up`;

		const body = {
			email,
			name,
			image,
			password,
		};

		const promise = axios.post(URL, body);

		promise.then((res) => {
			navigate('../');
		});
		promise.catch((err) => {
			setDisableInput(false);
			setLoading(false);
			alert('Preencha os campos corretamente!');
		});
	}

	return (
		<>
			<Container>
				<Logo>
					<img src={logo} alt='logo' />
				</Logo>
				<Form>
					<input
						type='email'
						placeholder='email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						disabled={disableInput}
					/>

					<input
						type='password'
						placeholder='senha'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						disabled={disableInput}
					/>

					<input
						type='text'
						placeholder='nome'
						value={name}
						onChange={(event) => setName(event.target.value)}
						disabled={disableInput}
					/>

					<input
						type='url'
						placeholder='foto'
						value={image}
						onChange={(event) => setImage(event.target.value)}
						disabled={disableInput}
					/>

					<button onClick={RegisterData} disabled={disableInput}>
						{loading ? (
							<ThreeDots color='#FFFFFF' height={20} width={80} />
						) : (
							'Cadastrar'
						)}
					</button>
				</Form>
				<h1 onClick={GoToLogin}>Já tem uma conta? Faça login!</h1>
			</Container>
		</>
	);
}

// STYLED COMPONENTS
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 80px 40px 0 40px;

	h1 {
		margin-top: 20px;
		font-size: 14px;
		color: #52b6ff;
		text-decoration: underline;
		cursor: pointer;
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;

	input {
		height: 45px;
		margin: 5px 0;
		border-radius: 5px;
		border: solid 1px #d4d4d4;
		padding: 0 10px;
		font-size: 20px;
	}

	input::placeholder {
		color: #d4d4d4;
	}

	button {
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #52b6ff;
		color: #ffffff;
		border: 0;
		border-radius: 5px;
	}
`;

const Logo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		width: 180px;
	}
`;

export default Register;

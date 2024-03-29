import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

// Componentes
import TokenContext from '../../Contexts/TokenContext';

function Atualizar(update, setUpdate) {
	setUpdate(!update);
}

function Habits(props) {
	const { token, habitsToday, myHabits, setMyHabits } =
		useContext(TokenContext);

	let DaysValue = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

	const [criated, setCriated] = useState(false);

	const [update, setUpdate] = useState(true);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const promise = axios.get(
			`${process.env.REACT_APP_BACK_END_URL}/habits`,
			config
		);

		promise.then((response) => {
			setMyHabits(response.data);
			let u = 0;
			habitsToday.map((item) => {
				if (item.done === true) {
					u += 1;
					return u;
				}
			});
		});
	}, [update]);

	function RemoveHabit(id) {
		let text = 'Tem certeza que quer apagar esse hábito?';
		if (window.confirm(text) === true) {
			const URL = `${process.env.REACT_APP_BACK_END_URL}/habits/${id}`;

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const promise = axios.delete(URL, config);

			promise.then((response) => {
				let myNewHabits = myHabits.filter((element) => {
					if (element.id !== id) {
						return true;
					}
				});
				setMyHabits(myNewHabits);
			});

			promise.catch((err) => {
				console.log(err);
			});
		}
	}

	function Habit({ name, id, days }) {
		function ShowDays({ numero, day, days }) {
			let verification = 0;

			for (let cont = 0; cont < days.length; cont++) {
				if (numero === days[cont]) {
					verification = 1;
				}
			}

			if (verification === 0) {
				return (
					<DayMarked back='transparent' color='#DBDBDB'>
						<h3>{day}</h3>
					</DayMarked>
				);
			} else {
				return (
					<DayMarked back='#CFCFCF' color='#FFFFFF'>
						<h3>{day}</h3>
					</DayMarked>
				);
			}
		}

		return (
			<MyHabit>
				<ion-icon
					name='trash-outline'
					onClick={() => RemoveHabit(id)}></ion-icon>
				<h3>{name}</h3>
				<Days>
					{DaysValue.map((day, numero) => (
						<ShowDays key={numero} numero={numero} day={day} days={days} />
					))}
				</Days>
			</MyHabit>
		);
	}

	// FUNÇÃO DE MONTAR O HABITO NOVO
	function AddHabits({ setCriated }) {
		const [selectedDays, setSelectedDays] = useState([]);

		const [name, setName] = useState('');

		const body = {
			name: name,
			days: selectedDays,
		};

		const [disableInput, setDisableInput] = useState(false);

		function PostHabit(update, setUpdate, setLoading) {
			setDisableInput(true);
			setLoading(true);

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const URL = `${process.env.REACT_APP_BACK_END_URL}/habits`;

			const promise = axios.post(URL, body, config);

			promise.then((response) => {
				setName('');
				setSelectedDays([]);
				setCriated(false);
				Atualizar(update, setUpdate);
			});

			promise.catch((err) => {
				setDisableInput(false);
				setLoading(false);
				console.log(err);
			});
		}

		function SelectionDay(indexSelected) {
			let varification = 0;
			let ActualDays = selectedDays.filter((element, index) => {
				if (element === indexSelected) {
					varification = 1;
				} else {
					return true;
				}
			});

			{
				varification === 0
					? setSelectedDays([...selectedDays, indexSelected])
					: setSelectedDays(ActualDays);
			}
		}

		function AddDays({ numero, day }) {
			let verification = 0;

			selectedDays.map((item) => {
				if (numero === item) {
					verification = 1;
					return verification;
				}
			});

			if (verification === 0) {
				return (
					<>
						<Day
							back='transparent'
							color='#DBDBDB'
							onClick={() => SelectionDay(numero)}>
							<h3>{day}</h3>
						</Day>
					</>
				);
			} else {
				return (
					<>
						<Day
							back='#CFCFCF'
							color='#FFFFFF'
							onClick={() => SelectionDay(numero)}>
							<h3>{day}</h3>
						</Day>
					</>
				);
			}
		}

		return (
			<AddHabit>
				<form>
					<input
						type='text'
						placeholder='nome do hábito'
						value={name}
						onChange={(event) => setName(event.target.value)}
						disabled={disableInput}
					/>
				</form>
				<Days>
					{DaysValue.map((day, index) => (
						<AddDays key={index} numero={index} day={day} />
					))}
				</Days>
				<SaveButtons>
					<h3 onClick={() => setCriated(!criated)}>Cancelar</h3>
					<button
						onClick={() => {
							if (name.length > 0 && selectedDays.length > 0) {
								PostHabit(update, setUpdate, setLoading);
							} else {
								alert('Preencha os campos corretamente!');
							}
						}}
						disabled={disableInput}>
						{loading ? (
							<ThreeDots color='#FFFFFF' height={20} width={80} />
						) : (
							'Salvar'
						)}
					</button>
				</SaveButtons>
			</AddHabit>
		);
	}

	return (
		<>
			<Container>
				<MyHabits>
					<h1>Meus Hábitos</h1>
					<ButtonAdd onClick={() => setCriated(!criated)}>
						<ion-icon name='add-outline'></ion-icon>
					</ButtonAdd>
				</MyHabits>

				{criated === false ? (
					''
				) : (
					<AddHabits
						setCriated={setCriated}
						update={update}
						setUpdate={setUpdate}
					/>
				)}

				{myHabits.map((element, index) => (
					<Habit
						key={index}
						name={element.name}
						id={element.id}
						days={element.days}
					/>
				))}

				{myHabits.length === 0 ? (
					<h2>
						Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
						começar a trackear!
					</h2>
				) : (
					''
				)}
			</Container>
		</>
	);
}

const MyHabit = styled.div`
	height: 90px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
	margin-bottom: 20px;
	position: relative;

	h3 {
		color: #666666;
		font-size: 20px;
	}

	ion-icon {
		position: absolute;
		font-size: 20px;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
`;

const SaveButtons = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	margin-top: 20px;

	h3 {
		font-size: 16px;
		color: #52b6ff;
		cursor: pointer;
	}

	& h3:hover {
		text-decoration: underline;
	}

	button {
		height: 40px;
		width: 90px;
		margin-left: 20px;
		background-color: #52b6ff;
		color: #ffffff;
		border: 0;
		border-radius: 5px;
		cursor: pointer;
	}
`;

const Days = styled.div`
	display: flex;
	margin-top: 10px;
`;

const DayMarked = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	border-radius: 5px;
	border: solid 1px #d4d4d4;
	background-color: ${(props) => props.back};
	cursor: pointer;

	h3 {
		color: ${(props) => props.color};
		font-size: 18px;
	}
`;

const Day = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	border-radius: 5px;
	border: solid 1px #d4d4d4;
	background-color: ${(props) => props.back};
	cursor: pointer;

	h3 {
		color: ${(props) => props.color};
		font-size: 18px;
	}
`;

const Container = styled.div`
	margin: 0 20px 150px 20px;

	h2 {
		font-size: 18px;
		text-align: justify;
		color: #666666;
	}
`;

const MyHabits = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;

	h1 {
		font-size: 23px;
		color: #126ba5;
	}
`;

const ButtonAdd = styled.div`
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #52b6ff;
	border-radius: 5px;
	cursor: pointer;

	ion-icon {
		color: #ffffff;
		font-size: 20px;
	}
`;

const AddHabit = styled.div`
	height: 180px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
	margin-bottom: 20px;

	input {
		width: 100%;
		height: 45px;
		border-radius: 5px;
		border: solid 1px #d4d4d4;
		padding: 0 10px;
		font-family: 'Lexend', sans-serif;
		font-size: 20px;
		box-sizing: border-box;
		color: #666666;
	}

	input::placeholder {
		color: #d4d4d4;
	}
`;

export default Habits;

import { useState } from 'react';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultTable from './components/ResultTable/ResultTable';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	const handleUserInputState = (inputIdentifier, newValue) => {
		setUserInput((prevValue) => {
			return { ...prevValue, [inputIdentifier]: +newValue };
		});
	};

	return (
		<>
			<Header />
			<UserInput handleUserInputState={handleUserInputState} UserInputData={userInput} />
			{!inputIsValid && <p className='center'>Please enter a duration greater then zero.</p>}
			{inputIsValid && <ResultTable data={userInput} />}
		</>
	);
}

export default App;

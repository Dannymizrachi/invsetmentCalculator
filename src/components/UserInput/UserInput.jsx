const UserInput = ({ handleUserInputState, UserInputData }) => {
	return (
		<>
			<section id='user-input'>
				<div className='input-group'>
					<p>
						<label>Initial Investment</label>
						<input
							type='number'
							required
							value={UserInputData.initialInvestment}
							onChange={(e) => {
								handleUserInputState('initialInvestment', e.target.value);
							}}
						/>
					</p>
					<p>
						<label>Annual Investment</label>
						<input
							type='number'
							required
							value={UserInputData.annualInvestment}
							onChange={(e) => {
								handleUserInputState('annualInvestment', e.target.value);
							}}
						/>
					</p>
				</div>
				<div className='input-group'>
					<p>
						<label>Expected Return</label>
						<input
							type='number'
							required
							value={UserInputData.expectedReturn}
							onChange={(e) => {
								handleUserInputState('expectedReturn', e.target.value);
							}}
						/>
					</p>
					<p>
						<label>Duration</label>
						<input
							type='number'
							required
							value={UserInputData.duration}
							onChange={(e) => {
								handleUserInputState('duration', e.target.value);
							}}
						/>
					</p>
				</div>
			</section>
		</>
	);
};

export default UserInput;

import { useState } from 'react';
import '../scss/registration.scss'



const ComponentWelcome = () => {

	const [welcomePosition, setWelcomePosition] = useState('signin');
	const isSignIn = welcomePosition === "signin"

	return (
		<div className={`registration--welcome welcome welcome_${welcomePosition}`}>
			<div className="welcome--content">
				<h1 className="welcome--title">{isSignIn ? 'Hello, Welcome!' : "Welcome Back!"}</h1>
				<p className="welcome--text">Don`t have on account?</p>
				<div className="welcome--box-button">
					<button onClick={() => isSignIn ? setWelcomePosition('signup') : setWelcomePosition('signin')} className="welcome--button button">
						{isSignIn ? "Registration" : 'Login'}
					</button>
				</div>
			</div>
		</div>
	)
};

export default ComponentWelcome
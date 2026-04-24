import { useState } from "react";
import ComponentWelcome from "../components/ComponentWelcome";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";


const Registration = () => {
	const [welcomePosition, setWelcomePosition] = useState('signup');
	const isSignIn = welcomePosition === "signin"
	return (
		<div className="registration">
			<div className="registration--container">
				<div className={`registration--body registration--body_${welcomePosition}`}>
					{!isSignIn ? <SingUp/> : null}
					<ComponentWelcome welcomePosition={welcomePosition} setWelcomePosition={setWelcomePosition} isSignIn={isSignIn} />
					{isSignIn ? <SingIn /> : null}
				</div>
			</div>
		</div>
	)
};

export default Registration
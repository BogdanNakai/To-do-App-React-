import { useState } from "react";
import ComponentWelcome from "../components/ComponentWelcome/ComponentWelcome";
import '../scss/registration.scss'
import SingIn from "../components/SingIn/SingIn";
import SingUp from "../components/SingUp/SingUp";


const Registration = () => {
	const welcomePosition = "signin"
	return (
		<div className="registration">
			<div className="registration--container">
				<div className={`registration--body registration--body_${welcomePosition}`}>
					<SingUp />
					<ComponentWelcome welcomePosition={welcomePosition} />
				</div>
			</div>
		</div>
	)
};

export default Registration
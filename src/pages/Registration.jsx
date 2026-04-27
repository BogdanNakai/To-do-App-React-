import { useState } from "react";
import ComponentWelcome from "../components/ComponentWelcome";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";


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
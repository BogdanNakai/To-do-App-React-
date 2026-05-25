import '../scss/registration.scss'

import ComponentWelcome from "../components/ComponentWelcome/ComponentWelcome";

import SingUp from "../components/SingUp/SingUp";


const Registration = () => {
	const welcomePosition = "signin"
	return (
		<div className={`registration registration_${welcomePosition}`}>
			<div className="registration--content">
				<div className="registration--container">
					<div className={`registration--body registration--body_${welcomePosition}`}>
						<SingUp />
					</div>
				</div>
			</div>
			<ComponentWelcome welcomePosition={welcomePosition} />
		</div>
	)
};

export default Registration
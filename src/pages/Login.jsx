import ComponentWelcome from "../components/ComponentWelcome/ComponentWelcome";
import SingIn from "../components/SingIn/SingIn";
import '../scss/registration.scss'

const Login = () => {
	const welcomePosition = "signup"
	return (
		<>
			<div className={`registration registration_${welcomePosition}`}>
				<div className="registration--content">
					<div className="registration--container">
						<div className={`registration--body registration--body_${welcomePosition}`}>
							<SingIn />
						</div>
					</div>
				</div>
				<ComponentWelcome welcomePosition={welcomePosition} />
			</div>
		</>
	)
};

export default Login
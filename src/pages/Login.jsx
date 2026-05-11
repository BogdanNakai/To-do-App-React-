import ComponentWelcome from "../components/ComponentWelcome/ComponentWelcome";
import SingIn from "../components/SingIn/SingIn";
import '../scss/registration.scss'

const Login = () => {

	const welcomePosition = "signup"

	return (
		<>
			<div className="registration">
				<div className="registration--container">
					<div className={`registration--body registration--body_${welcomePosition}`}>
						<ComponentWelcome welcomePosition={welcomePosition} />
						<SingIn />
					</div>
				</div>
			</div>
		</>
	)
};

export default Login
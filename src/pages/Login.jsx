import ComponentWelcome from "../components/ComponentWelcome";
import SingIn from "../components/SingIn";

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
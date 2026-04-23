import ComponentWelcome from "../components/ComponentWelcome";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";

const Registration = () => {
	return (
		<div className="registration">
			<div className="registration--container">
				<div className="registration--body">
					<SingUp />
					<ComponentWelcome />
					<SingIn />
				</div>
			</div>
		</div>
	)
};

export default Registration
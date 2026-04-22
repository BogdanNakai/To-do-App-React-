import ComponentWelcome from "../components/ComponentWelcome";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";

const Registration = () => {
	return (
		<section className="c">
			<div className="registration--container">
				<div className="registration--body">
					<SingIn />
					<ComponentWelcome />
					<SingUp />
				</div>
			</div>
		</section>
	)
};

export default Registration
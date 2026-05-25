import { Link } from 'react-router-dom';
import './ComponentWelcome.scss'


const ComponentWelcome = ({ welcomePosition }) => {
	return (
		<div className={`registration--welcome welcome welcome_${welcomePosition}`}>
			<div className="welcome--content">
				<h1 className="welcome--title">{welcomePosition === 'signin' ? 'Hello, Welcome!' : "Welcome Back!"}</h1>
				<p className="welcome--text">Don`t have on account?</p>
				<div className="welcome--box-button">
					{welcomePosition === 'signup' ?
						<Link to='/registration' className="welcome--button button">Registration</Link> :
						<Link to='/login' className="welcome--button button">Login</Link>}
				</div>
			</div>
		</div>
	)
};

export default ComponentWelcome
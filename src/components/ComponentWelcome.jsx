import '../scss/registration.scss'

const ComponentWelcome = () => {
	return (
		<div className="registration--welcome welcome welcome_right">
			<div className="welcome--content">
				<h1 className="welcome--title">Hello, Welcome!</h1>
				<h1 className="welcome--title">Welcome Back!</h1>
				<p className="welcome--text">Don’t have on account</p>
				<div className="welcome--box-button">
					<button className="welcome--button button">
						Registration
					</button>
					<button className="welcome--button button">
						Login
					</button>
				</div>
			</div>
		</div>
	)
};

export default ComponentWelcome
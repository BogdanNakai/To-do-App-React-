import ButtonForm from "./ButtonForm";
import Social from "./Social";
import user from '../assets/icon_user.svg'
import security from '../assets/icon_security.svg'
import email from '../assets/icon_email.svg'
import '../scss/forms.scss'
import InputForm from "./InputForm";

const SingUp = () => {
	return (
		<>
			<div className="registration--form form">
				<form action="" className="form--signin">
					<h2 className="form--title">Registration</h2>
					<div className="form--info-input">
						<InputForm type='text' name='user' id='user' icon={user} placeholder={'Username'} />
						<InputForm type='email' name='email' id='email' icon={email} placeholder={'Email'} />
						<InputForm type='password' name='password' id='password' icon={security} placeholder={'Password'} />
					</div>
					<div className="form--footer">
						<ButtonForm textButton='Registration' />
						<Social />
					</div>
				</form>
			</div>
		</>
	)
};

export default SingUp 
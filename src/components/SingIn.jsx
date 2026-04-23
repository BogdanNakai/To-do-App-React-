import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";
import Social from "./Social";
import user from '../assets/icon_user.svg'
import security from '../assets/icon_security.svg'
import '../scss/forms.scss'

const SingIn = () => { 
	return (
		<div className="registration--form form">
			<form action="" className="form--signin">
				<h2 className="form--title">Login</h2>
				<div className="form--info-input">
					<InputForm type='text' name='user' id='user' icon={user} placeholder={'Username'} />
					<InputForm type='password' name='password' id='password' icon={security} placeholder={'Password'} />
				</div>
				<div className="form--footer">
					<ButtonForm textButton='Login' />
					<Social />
				</div>
			</form>
		</div>
	)
};

export default SingIn
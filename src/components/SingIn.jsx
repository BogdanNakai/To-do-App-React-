import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";
import Social from "./Social";
import user from '../assets/icon_user.svg'
import security from '../assets/icon_security.svg'
import '../scss/forms.scss'
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SingIn = () => {

	const navigate = useNavigate()

	const {
		control,
		handleSubmit,
		message,
		setError,
		formState: { errors },
	} = useForm()

	/* 	console.log(errors); */

	const onSubmit = (data) => {
		const users = JSON.parse(localStorage.getItem('users')) || [];

		const isUserUsed = users.find(user => user.user === data.user);
		const isPassWordUsed = users.find(user => user.passwordSingUp === data.password);

		if (!isUserUsed && !isPassWordUsed) {
			setError('user', {
				type: 'manual',
				message: 'A user with this email address already exists'
			})
			return
		}

		navigate(`/todolist/${isUserUsed.id}`)
	}

	return (
		<div className="registration--form form">
			<form noValidate required action="" onSubmit={handleSubmit(onSubmit)} className="form--signin">
				<h2 className="form--title">Login</h2>
				<div className="form--info-input">
					<Controller
						control={control}
						name='user'
						rules={
							{
								required: 'Enter your Name',
							}
						}
						render={({ field: { onChange, onBlur, name } }) => <InputForm type='text'
							name={name}
							id='user'
							icon={user}
							placeholder={'Username'}
							onChangeText={onChange}
							errors={errors}
						/>}

					/>
					<Controller
						control={control}
						name='password'
						rules={
							{
								required: 'Enter your password',
								minLength: {
									value: 6,
									message: 'The password must contain a minimum of 6 characters'
								}
							}
						}
						render={({ field: { onChange, onBlur, value, name } }) => <InputForm type='password'
							name={name}
							id='password'
							icon={security}
							placeholder={'Password'}
							onChangeText={onChange}
							errors={errors}
						/>} />
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
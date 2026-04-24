import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";
import Social from "./Social";
import user from '../assets/icon_user.svg'
import security from '../assets/icon_security.svg'
import '../scss/forms.scss'
import { Controller, useForm } from "react-hook-form";

const SingIn = () => {

	const {
		control,
		handleSubmit,
		message,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => console.log(data)

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
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import ButtonForm from "../ButtonForm/ButtonForm";
import Social from "../Social/Social";
import InputForm from "../InputForm/InputForm";

import './SingUp.scss'

import user from '../../assets/icon_user.svg'
import security from '../../assets/icon_security.svg'
import email from '../../assets/icon_email.svg'
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const SingUp = () => {
	const navigate = useNavigate()

	const { users, setUsers ,setCurrentUserId } = useContext(TasksContext)

	const {
		control,
		handleSubmit,
		message,
		setError,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {

		const isEmailUsed = users.find(user => user.email === data.email);

		if (isEmailUsed) {
			setError('email', {
				type: 'manual',
				message: 'A user with this email address already exists'
			})
			return
		}

		const dataUser = {
			...data, id: crypto.randomUUID(), tasks: [{
				id: crypto.randomUUID(),
				title: "Lorem 1",
				done: false
			}]
		}

		users.push(dataUser);
		localStorage.setItem('currentUserId', dataUser.id)
		localStorage.setItem(`users`, JSON.stringify(users));
		setCurrentUserId(dataUser.id)
		navigate(`/`)
		
	}

	return (
		<>
			<div className="registration--form form">
				<form noValidate required action="" onSubmit={handleSubmit(onSubmit)} className="form--signin">
					<h2 className="form--title">Registration</h2>
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
							name='email'
							rules={
								{
									required: 'Enter your email',
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: 'Incorrect e-mail address. Try again.'
									}
								}
							}
							render={({ field: { onChange, onBlur, name } }) => <InputForm type='email'
								name={name}
								id='email'
								icon={email}
								placeholder={'Email'}
								onChangeText={onChange}
								errors={errors}
							/>}
						/>
						<Controller
							control={control}
							name='passwordSingUp'
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
								id='passwordSingUp'
								icon={security}
								placeholder={'Password'}
								onChangeText={onChange}
								errors={errors}
							/>}

						/>
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
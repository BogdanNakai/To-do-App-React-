


const InputForm = ({ type, name, id, icon, placeholder, onChangeText, errors}) => {

	return (
		<div className="form--box-input">
			<div className="form--content-input">
				<input type={type} name={name} id={id} placeholder={placeholder} onChange={onChangeText} className="form--input" />
				<div className="form--input-icon">
					<img src={icon} alt={icon} />
				</div>
				{errors[name] ? <span className='form--error-message'> {errors[name].message}</span> : null}
			</div>
			{name === 'passwordSingIn' && <a href="" className="form--forgot-password">Forgot Password!</a>}
		</div>
	)
};

export default InputForm
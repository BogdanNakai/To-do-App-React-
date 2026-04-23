

const InputForm = ({ type, name, id, icon, placeholder }) => {
	return (
		<div className="form--box-input">
			<div className="form--content-input">
				<input type={type} name={name} id={id} placeholder={placeholder} className="form--input"/>
				<div className="form--input-icon">
					<img src={icon} alt={icon} />
				</div>
			</div>
			{type === 'password' && <a href="" className="form--forgot-password">Forgot Password!</a>}
		</div>
	)
};

export default InputForm
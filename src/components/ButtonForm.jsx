const ButtonForm = ({textButton}) => {
	return (
		<div className="form--box-button">
			<button type="submit" className="form--button">
				{textButton }
			</button>
		</div>
	)
};

export default ButtonForm
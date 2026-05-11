import moon from "../../assets/icon_moon.svg";
import './ButtonThems.scss'

const ButtonThems = () => { 
	return (
		<div className="todo--button-them">
			<button className="todo--button">
				<img src={moon} alt='button-theme'/>
			</button>
		</div>
	)
};

export default ButtonThems
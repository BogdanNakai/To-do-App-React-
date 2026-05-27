import { useContext } from "react";
import moon from "../../assets/icon_moon.svg";
import sun from "../../assets/icon_sun.svg";
import useThem from "../../hooks/useThem";
import './ButtonThems.scss'
import { ThemeContext } from "../../context/ThemContext";

const ButtonThems = () => {

	const { them, handleThem } = useContext(ThemeContext)

	return (
		<div className="todo--button-them">
			<button onClick={() => handleThem()} className="todo--button">
				{them === 'light' ? <img src={moon} alt='button-theme' /> : <img src={sun} alt='button-theme' />}
			</button>
		</div>
	)
};

export default ButtonThems
import { useContext } from 'react';
import './ButtonAddTask.scss'
import { PopapContext } from '../../context/PopapContext';

const ButtonAddTask = () => {

	const { setActivePopup, setNewTaskTitle } = useContext(PopapContext)

	return (
		<div className="todo--addTask">
			<button onClick={() => {
				setNewTaskTitle('');
				setActivePopup(true)
			}} className="todo--button-addTask">
			</button>
		</div>
	)
};

export default ButtonAddTask
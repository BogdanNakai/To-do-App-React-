import { useContext } from 'react';
import './ButtonAddTask.scss'
import { TasksContext } from '../../context/TasksContext';

const ButtonAddTask = () => {

	const { setactivePopup, setNewTaskTitle } = useContext(TasksContext)

	return (
		<div className="todo--addTask">
			<button onClick={() => {
				setNewTaskTitle('');
				setactivePopup('active')
			}} className="todo--button-addTask">
			</button>
		</div>
	)
};

export default ButtonAddTask
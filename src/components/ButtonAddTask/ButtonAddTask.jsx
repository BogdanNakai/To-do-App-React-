import './ButtonAddTask.scss'

const ButtonAddTask = ({ setactivePopup, setNewTaskTitle }) => {
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
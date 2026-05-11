import './ButtonAddTask.scss'

const ButtonAddTask = ({ setActivePopap, setNewTaskTitle }) => {
	return (
		<div className="todo--addTask">
			<button onClick={() => {
				setNewTaskTitle('');
				setActivePopap('active')
			}} className="todo--button-addTask">
			</button>
		</div>
	)
};

export default ButtonAddTask
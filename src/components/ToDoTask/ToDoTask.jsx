import './ToDoTask.scss'
import ItemListTask from "../ItemListTask/ItemListTask";

const ToDoTask = ({ users, filteredTasks, filteredByDone, toggleCheckBox, deleteTask, getEditControls }) => {
	const arrTasks = filteredTasks ?? filteredByDone ?? users;

	return (
		<ul className="todo--list">
			<ItemListTask arrTasks={arrTasks} toggleCheckBox={toggleCheckBox} deleteTask={deleteTask} getEditControls={getEditControls} />
		</ul>
	)
};

export default ToDoTask
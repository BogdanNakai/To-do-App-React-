import './ToDoTask.scss'
import ItemListTask from "../ItemListTask/ItemListTask";


const ToDoTask = () => {

	return (
		<ul className="todo--list">
			<ItemListTask />
		</ul>
	)
};

export default ToDoTask
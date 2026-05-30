import Input from "../Input/Input";
import { Link } from "react-router-dom";
import edit from '../../assets/icon_edit.svg'
import remove from '../../assets/icon_remove.svg'
import previewTask from '../../assets/preview_tasks.svg'
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { FilterContext } from "../../context/FilterContext";
import { useSelector } from "react-redux";
import { PopapContext } from "../../context/PopapContext";

const ItemListTask = () => {

	const currentUser = useSelector(state => state.users.currentUser);

	const {
		actionsUsers
	} = useContext(TasksContext)

	const {
		actionPopap
	} = useContext(PopapContext)

	const {
		toggleCheckBox,
		deleteTask,
	} = actionsUsers;

	const {
		getEditControls
	} = actionPopap;

	const {
		filteredTasks,
		filteredByDone
	} = useContext(FilterContext)

	const arrTasks = filteredTasks ?? filteredByDone ?? currentUser.tasks;

	return (
		<>
			{arrTasks?.length ? (arrTasks)?.map((item) => {
				return (<li key={item.id} className={`todo--item ${item.done ? "todo--item_complit" : ''}`} >
					<Input toggleCheckBox={toggleCheckBox} item={item} />
					<Link to={`todo/${item.id}`} className="todo--info">
						{item.title}
					</Link>
					<div className="todo--item-btns">
						<button onClick={() => getEditControls(item.title, item.id)} className="todo-item-action">
							<img src={edit} alt="edit" />
						</button>
						<button onClick={() => deleteTask(item.id)} className="todo-item-action">
							<img src={remove} alt="remove" />
						</button>
					</div>
				</li>)
			}) : <li className="todo--item-preview"><img src={previewTask} alt="Image" />
				Empty...
			</li>}
		</>
	)
};

export default ItemListTask
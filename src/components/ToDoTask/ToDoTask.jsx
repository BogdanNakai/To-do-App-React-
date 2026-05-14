import { Link } from "react-router-dom";
import './ToDoTask.scss'
import edit from '../../assets/icon_edit.svg'
import remove from '../../assets/icon_remove.svg'
import previewTask from '../../assets/preview_tasks.svg'

const ToDoTask = ({ task, filteredTasks, filteredByDone, toggleCheckBox, deleteTask, getEditControls }) => {
	const arrTasks = filteredTasks ?? filteredByDone ?? task

	return (
		<ul className="todo--list">
			{arrTasks?.length ? (arrTasks)?.map((item) => {
				return (<li key={item.id} className="todo--item">
					<input type="checkbox" onChange={() => toggleCheckBox(item.id)} className="todo--item-done" name="todoCheckedTask" id="todoCheckedTask" defaultChecked={item.done} />
					<Link to={`task/${item.id}`} className="todo--info">
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
		</ul>
	)
};

export default ToDoTask
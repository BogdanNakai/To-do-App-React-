import { Link } from "react-router-dom";
import './ToDoTask.scss'
import edit from '../../assets/icon_edit.svg'
import remove from '../../assets/icon_remove.svg'

const ToDoTask = ({ task, filteredTasks, filteredByDone, toggleCheckBox, deleteTask, getEditControls }) => {
	
	return (
		<ul className="todo--list">
			{(filteredTasks ?? filteredByDone ?? task)?.map((item) => { 
				return( <li key={item.id} className="todo--item">
					<input type="checkbox" onChange={() => toggleCheckBox(item.id)} className="todo--item-done" name="todoCheckedTask" id="todoCheckedTask" defaultChecked={item.done} />
					<Link to={`taslk/${item.id}`} className="todo--info">
						{item.title}
					</Link>
					<div className="todo--item-btns">
						<button onClick={() => getEditControls(item.id)} className="todo-item-action">
							<img src={edit} alt="edit" />
						</button>
						<button onClick={() => deleteTask(item.id)} className="todo-item-action">
							<img src={remove} alt="remove" />
						</button>
					</div>
				</li>)
			})}
		</ul>
	)
};

export default ToDoTask
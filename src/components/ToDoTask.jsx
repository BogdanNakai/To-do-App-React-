import { Link } from "react-router-dom";
import edit from '../assets/icon_edit.svg'
import remove from '../assets/icon_remove.svg'

const ToDoTask = ({ taskItem }) => {
	return (
		<ul className="todo--list">
			{taskItem.map((item) => { 
				return( <li key={item.id} className="todo--item">
					<input type="checkbox" className="todo--item-done" name="todoCheckedTask" id="todoCheckedTask" defaultChecked={item.done} />
					<Link to={`taslk/${item.id}`} className="todo--info">
						{item.title}
					</Link>
					<div className="todo--item-btns">
						<button className="todo-item-action">
							<img src={edit} alt="edit" />
						</button>
						<button className="todo-item-action">
							<img src={remove} alt="remove" />
						</button>
					</div>
				</li>)
			})}
		</ul>
	)
};

export default ToDoTask
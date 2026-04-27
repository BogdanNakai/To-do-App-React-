import '../scss/todo.scss'
import ButtonThems from "../components/ButtonThems";
import SearchTask from "../components/SearchTask";
import SelectTypetask from "../components/SelectTypeTask";
import ToDoTask from '../components/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask';
import PopapAddtask from '../components/PopapAddTask';
import PopapAddTask from '../components/PopapAddTask';

const ToDoList = () => {

	const taskItem = [
		{
			id: crypto.randomUUID(),
			title: 'Lorem 1',
			done: true
		},
		{
			id: crypto.randomUUID(),
			title: 'Lorem 2',
			done: false
		},
		{
			id: crypto.randomUUID(),
			title: 'Lorem 3',
			done: true
		},
	]

	return (
		<div className="todo">
			<div className="todo--container">
				<div className="todo--body">
					<h2 className="todo--title">
						TODO LIST
					</h2>
					<div className="todo--content">
						<div className="todo--header">
							<SearchTask />
							<SelectTypetask />
							<ButtonThems />
						</div>
					</div>
					<div className="todo--list-task">
						<ToDoTask taskItem={taskItem} />
					</div>
					<PopapAddTask/>
				</div>
				<ButtonAddTask />
			</div>
		</div>
	)
};

export default ToDoList
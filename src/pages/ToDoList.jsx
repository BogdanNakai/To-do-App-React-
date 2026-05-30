import '../scss/todo.scss'

import ButtonThems from "../components/ButtonThems/ButtonThems";
import SearchTask from "../components/SearchTask/SearchTask";
import SelectTypeTask from "../components/SelectTypeTask/SelectTypeTask";
import ToDoTask from '../components/ToDoTask/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask/ButtonAddTask';;
import PopapAddTask from '../components/PopapAddTask/PopapAddTask';
import NotFound from './NotFound';
import useTasks from '../hooks/useTasks';



const ToDoList = () => {

	const { currentUser, activePopup } = useTasks();

	if (!currentUser) {
		return <NotFound />;
	}

	return (
		<div className={`todo ${activePopup}`}>
			<div className="todo--container">
				<div className="todo--body">
					<h2 className="todo--title">
						TODO LIST
					</h2>
					<div className="todo--content">
						<div className="todo--header">
							<SearchTask />
							<SelectTypeTask />
							<ButtonThems />
						</div>
					</div>
					<div className="todo--list-task">
						<ToDoTask />
					</div>
					<PopapAddTask />
				</div>
				<ButtonAddTask />
			</div>
		</div>
	)
};

export default ToDoList
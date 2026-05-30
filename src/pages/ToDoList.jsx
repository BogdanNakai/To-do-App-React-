import '../scss/todo.scss'

import ButtonThems from "../components/ButtonThems/ButtonThems";
import SearchTask from "../components/SearchTask/SearchTask";
import SelectTypeTask from "../components/SelectTypeTask/SelectTypeTask";
import ToDoTask from '../components/ToDoTask/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask/ButtonAddTask';;
import PopapAddTask from '../components/PopapAddTask/PopapAddTask';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { PopapContext } from '../context/PopapContext';


const ToDoList = () => {

	const { actionPopap } = useContext(PopapContext);
	const { activePopup } = actionPopap

	const currentUser = useSelector(state => state.users.currentUser);

	if (!currentUser) {
		return <NotFound />;
	}

	return (
		<div className={`todo ${activePopup ? 'active' : ''}`}>
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
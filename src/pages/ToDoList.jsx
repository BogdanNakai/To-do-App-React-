

import '../scss/todo.scss'

import ButtonThems from "../components/ButtonThems/ButtonThems";
import SearchTask from "../components/SearchTask/SearchTask";
import SelectTypeTask from "../components/SelectTypeTask/SelectTypeTask";
import ToDoTask from '../components/ToDoTask/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask/ButtonAddTask';;
import PopapAddTask from '../components/PopapAddTask/PopapAddTask';
import NotFound from './NotFound';
import useTasks from '../hooks/useTasks';
import useSelect from '../hooks/useSelect';
import useFilter from '../hooks/useFilter';


const ToDoList = () => {


	const select = useSelect();

	const {
		idUsers,
		userTasks,
		toggleCheckBox,
		deleteTask,
		getEditControls,
		activePopup,
		newTaskTitle,
		addTask,
		isRenameMode,
		setisRenameMode,
		isRenameModeTask,
		setactivePopup,
		setNewTaskTitle,
	} = useTasks()

	const {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks, 
	} = useFilter(select.filterIsDone, userTasks)

	if (!idUsers) {
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
							<SearchTask
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery} />
							<SelectTypeTask
								select={select}
							/>
							<ButtonThems />
						</div>
					</div>
					<div className="todo--list-task">
						<ToDoTask
							users={userTasks}
							filteredTasks={filteredTasks}
							filteredByDone={filteredByDone}
							toggleCheckBox={toggleCheckBox}
							deleteTask={deleteTask}
							getEditControls={getEditControls} />
					</div>
					<PopapAddTask
						active={activePopup}
						setactivePopup={setactivePopup}
						newTaskTitle={newTaskTitle}
						setNewTaskTitle={setNewTaskTitle}
						addTask={addTask}
						isRenameMode={isRenameMode}
						setisRenameMode={setisRenameMode}
						isRenameModeTask={isRenameModeTask} />
				</div>
				<ButtonAddTask
					setactivePopup={setactivePopup}
					setNewTaskTitle={setNewTaskTitle} />
			</div>
		</div>
	)
};

export default ToDoList
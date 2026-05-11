import { useEffect, useState } from 'react';

import '../scss/todo.scss'

import ButtonThems from "../components/ButtonThems/ButtonThems";
import SearchTask from "../components/SearchTask/SearchTask";
import SelectTypetask from "../components/SelectTypeTask/SelectTypeTask";
import ToDoTask from '../components/ToDoTask/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask/ButtonAddTask';;
import PopapAddTask from '../components/PopapAddTask/PopapAddTask';
import { useParams } from 'react-router-dom';

const ToDoList = () => {
	const [activePopap, setActivePopap] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [searchQwery, setSearchQwery] = useState('')
	const [filterIsDone, setFilterIsDone] = useState('')
	const [rename, setRename] = useState(false)
	const { id } = useParams();

	const [task, setTask] = useState(() => {
		const saveData = JSON.parse(localStorage.getItem('users'))

		if (saveData) {
			return saveData;
		}
	})

	const userTasks = task.find((e) => e.id === id)?.tasks;

	const addTask = () => {
		if (newTaskTitle.trim().length > 0) {
			const newUsersTask = task.map((e) => {
				console.log(id);
				if (e.id === id) {
					
					e.tasks.push(
						{
							id: crypto.randomUUID(),
							title: newTaskTitle,
							done: false
						});
				}
				return e
			})
			setTask(newUsersTask)
			setNewTaskTitle('')
			setActivePopap('')
		}
	};

	const deleteTask = (idTask) => {
		const userIdPage = task.map((e) => {
			if (e.id === id) {
				e.tasks.filter((e) => e.id !== idTask);
			}
			return e
		});
		console.log(userIdPage);

		setTask([userIdPage])
	}

	const toggleCheckBox = (id) => {

	}

	const getEditControls = (id) => {

	}

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(task))
	}, [task])


	const filteredByDone = filterIsDone === 'done' ? userTasks.filter(({ done }) => done) : filterIsDone === 'not-done' ? userTasks.filter(({ done }) => !done) : userTasks
	const clearSearchQwery = searchQwery.trim().toLocaleLowerCase()
	const filteredTasks = clearSearchQwery.length > 0 ? filteredByDone.filter(({ title }) => title.toLocaleLowerCase().includes(searchQwery)) : null;

	return (
		<div className={`todo ${activePopap}`}>
			<div className="todo--container">
				<div className="todo--body">
					<h2 className="todo--title">
						TODO LIST
					</h2>
					<div className="todo--content">
						<div className="todo--header">
							<SearchTask searchQwery={searchQwery} setSearchQwery={setSearchQwery} />
							<SelectTypetask setFilterIsDone={setFilterIsDone} />
							<ButtonThems />
						</div>
					</div>
					<div className="todo--list-task">
						<ToDoTask task={userTasks} filteredTasks={filteredTasks} filteredByDone={filteredByDone} toggleCheckBox={toggleCheckBox} deleteTask={deleteTask} getEditControls={getEditControls} />
					</div>
					<PopapAddTask active={activePopap} setActivePopap={setActivePopap} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addTask={addTask} rename={rename} setRename={setRename} />
				</div>
				<ButtonAddTask setActivePopap={setActivePopap} setNewTaskTitle={setNewTaskTitle} />
			</div>
		</div>
	)
};

export default ToDoList
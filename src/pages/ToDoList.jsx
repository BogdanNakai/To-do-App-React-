import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../scss/todo.scss'

import ButtonThems from "../components/ButtonThems/ButtonThems";
import SearchTask from "../components/SearchTask/SearchTask";
import SelectTypeTask from "../components/SelectTypeTask/SelectTypeTask";
import ToDoTask from '../components/ToDoTask/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask/ButtonAddTask';;
import PopapAddTask from '../components/PopapAddTask/PopapAddTask';
import NotFound from './NotFound';


const ToDoList = () => {
	const [activePopap, setActivePopap] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [searchQwery, setSearchQwery] = useState('')
	const [filterIsDone, setFilterIsDone] = useState('')
	const [idTaskEdit, setIdTaskEdit] = useState('')
	const [rename, setRename] = useState(false)
	const { id } = useParams();

	const [task, setTask] = useState(() => {
		const saveData = JSON.parse(localStorage.getItem('users'))

		if (saveData) {
			return saveData;
		}
	})

	const userTasks = task.find((e) => e.id === id)?.tasks;
	const idUsers = task.find((e) => e.id === id);

	if (!idUsers) {
		return <NotFound />;
	}

	const addTask = () => {
		if (newTaskTitle.trim().length > 0) {
			const newUsersTask = task.map((e) => {
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
		const newUsersTask = task.map((e) => {
			if (e.id === id) {
				return {
					...e,
					tasks: e.tasks.filter((t) => t.id !== idTask)
				};
			}
			return e
		})
		console.log(newUsersTask);
		setTask(newUsersTask)
	}

	const toggleCheckBox = (idTask) => {
		const newUsersTask = task.map((e) => {
			if (e.id === id) {
				return {
					...e,
					tasks: e.tasks.map((t) => {
						if (t.id === idTask) {
							return { ...t, done: !t.done }
						}
						return t
					})
				};
			}
			return e
		})
		setTask(newUsersTask)
	}

	const getEditControls = (titleTask, idTask) => {
		setActivePopap('active')
		setRename(true)
		setNewTaskTitle(titleTask)
		setIdTaskEdit(idTask)
	}

	const renameTask = () => {
		if (idTaskEdit) {
			const newUsersTask = task.map((e) => {
				if (e.id === id) {
					return {
						...e,
						tasks: e.tasks.map((t) => {
							if (t.id === idTaskEdit) {
								return { ...t, title:newTaskTitle }
							}
							return t
						})
					};
				}
				return e
			})
			setTask(newUsersTask)
			setActivePopap('')
		}
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
							<SelectTypeTask setFilterIsDone={setFilterIsDone} />
							<ButtonThems />
						</div>
					</div>
					<div className="todo--list-task">
						<ToDoTask task={userTasks} filteredTasks={filteredTasks} filteredByDone={filteredByDone} toggleCheckBox={toggleCheckBox} deleteTask={deleteTask} getEditControls={getEditControls}  />
					</div>
					<PopapAddTask active={activePopap} setActivePopap={setActivePopap} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addTask={addTask} rename={rename} setRename={setRename} renameTask={renameTask} />
				</div>
				<ButtonAddTask setActivePopap={setActivePopap} setNewTaskTitle={setNewTaskTitle} />
			</div>
		</div>
	)
};

export default ToDoList
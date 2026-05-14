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

	const [users, setUsers] = useState(() =>
		JSON.parse(localStorage.getItem('users')) || []
	)

	const userTasks = users.find((e) => e.id === id)?.tasks || [];
	const idUsers = users.find((e) => e.id === id);

	if (!idUsers) {
		return <NotFound />;
	}

	const addTask = () => {
		if (newTaskTitle.trim().length === 0) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: newTaskTitle,
			done: false
		};

		const newUsersTask = users.map((e) => {
			if (e.id === id) {
				return {
					...e,
					tasks: [...e.tasks, newTask]
				};
			}
			return e;
		});

		setUsers(newUsersTask);
		setNewTaskTitle('');
		setActivePopap('');
	};

	const deleteTask = (idTask) => {
		const newUsersTask = users.map((e) => {
			if (e.id === id) {
				return {
					...e,
					tasks: e.tasks.filter((t) => t.id !== idTask)
				};
			}
			return e
		})
		setUsers(newUsersTask)
	}

	const toggleCheckBox = (idTask) => {
		const newUsersTask = users.map((e) => {
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
		setUsers(newUsersTask)
	}

	const getEditControls = (titleTask, idTask) => {
		setActivePopap('active')
		setRename(true)
		setNewTaskTitle(titleTask)
		setIdTaskEdit(idTask)
	}

	const renameTask = () => {
		if (idTaskEdit) {
			const newUsersTask = users.map((e) => {
				if (e.id === id) {
					return {
						...e,
						tasks: e.tasks.map((t) => {
							if (t.id === idTaskEdit) {
								return { ...t, title: newTaskTitle }
							}
							return t
						})
					};
				}
				return e
			})
			setUsers(newUsersTask)
			setActivePopap('')
		}
	}

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users))
	}, [users])


	const filteredByDone = filterIsDone === 'done' ? userTasks.filter(({ done }) => done) : filterIsDone === 'not-done' ? userTasks.filter(({ done }) => !done) : userTasks
	const clearSearchQwery = searchQwery.trim().toLocaleLowerCase()
	const filteredTasks = clearSearchQwery.length > 0 ? filteredByDone.filter(({ title }) => title.toLocaleLowerCase().includes(clearSearchQwery)) : null;



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
						<ToDoTask users={userTasks} filteredTasks={filteredTasks} filteredByDone={filteredByDone} toggleCheckBox={toggleCheckBox} deleteTask={deleteTask} getEditControls={getEditControls} />
					</div>
					<PopapAddTask active={activePopap} setActivePopap={setActivePopap} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addTask={addTask} rename={rename} setRename={setRename} renameTask={renameTask} />
				</div>
				<ButtonAddTask setActivePopap={setActivePopap} setNewTaskTitle={setNewTaskTitle} />
			</div>
		</div>
	)
};

export default ToDoList
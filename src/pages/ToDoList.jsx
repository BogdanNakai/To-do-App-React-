import '../scss/todo.scss'
import ButtonThems from "../components/ButtonThems";
import SearchTask from "../components/SearchTask";
import SelectTypetask from "../components/SelectTypeTask";
import ToDoTask from '../components/ToDoTask';
import ButtonAddTask from '../components/ButtonAddTask';;
import { useEffect, useState } from 'react';
import PopapAddTask from '../components/PopapAddTask';

const ToDoList = () => {
	const [activePopap, setActivePopap] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [searchQwery, setSearchQwery] = useState('')
	const [filterIsDone, setFilterIsDone] = useState('')
	const [rename, setRename] = useState(false)

	const [task, setTask] = useState(() => {
		const saveTasks = localStorage.getItem('tasks')

		if (saveTasks) {
			return JSON.parse(saveTasks)
		} else {
			return [
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
		}
	})

	const addTask = () => {
		if (newTaskTitle.trim().length > 0) {
			const newTask = {
				id: crypto.randomUUID(),
				title: newTaskTitle,
				done: false
			}
			setTask([...task, newTask])
			setNewTaskTitle('')
			setActivePopap('')
		}
	};

	const toggleCheckBox = (id) => { 
		setTask(task.map(task => 
			task.id === id ? { ...task, done: !task.done } : task
		));
	}

	const deleteTask = (id) => {
		setTask(task.filter(task => task.id !== id));
	}

	const getEditControls = (id) => {
		setRename(true)
		setActivePopap('active');
		task.find(task => {
			task.id === id ? setNewTaskTitle(task.title) : null;
		})
	}



	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(task))
	}, [task])

	const filteredByDone = filterIsDone === 'done' ? task.filter(({ done }) => done)	: filterIsDone === 'not-done' ? task.filter(({done }) => !done): task
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
						<ToDoTask task={task} filteredTasks={filteredTasks} filteredByDone={filteredByDone} toggleCheckBox={toggleCheckBox} deleteTask={deleteTask} getEditControls={getEditControls } />
					</div>
					<PopapAddTask active={activePopap} setActivePopap={setActivePopap} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addTask={addTask} rename={ rename} setRename={setRename} />
				</div>
				<ButtonAddTask setActivePopap={setActivePopap} setNewTaskTitle={setNewTaskTitle} />
			</div>
		</div>
	)
};

export default ToDoList
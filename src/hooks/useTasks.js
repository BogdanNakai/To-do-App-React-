import { useEffect, useState } from 'react';
import { saveUsersToStorage, getUsersFromStorage } from './storage.js'

const useTasks = () => {

	const [activePopup, setactivePopup] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [idTaskEdit, setIdTaskEdit] = useState('')
	const [isRenameMode, setisRenameMode] = useState(false)
	const id = localStorage.getItem('currentUserId');
	const [users, setUsers] = useState(() => getUsersFromStorage()	)

const userTasks = users.find((e) => e.id === id)?.tasks || [];

const idUsers = users.find((e) => e.id === id);

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
	setactivePopup('');
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
	setactivePopup('active')
	setisRenameMode(true)
	setNewTaskTitle(titleTask)
	setIdTaskEdit(idTask)
}

const isRenameModeTask = () => {
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
		setisRenameMode(false)
		setactivePopup('')
	}
}

useEffect(() => {
	saveUsersToStorage(users)
}, [users])

return {
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
}
};

export default useTasks
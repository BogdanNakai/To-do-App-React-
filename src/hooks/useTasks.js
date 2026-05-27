import { useEffect, useMemo, useState } from 'react';
import { getUsersFromStorage, saveUsersToStorage } from './storage.js'


const useTasks = () => {

	const [users, setUsers] = useState(() => getUsersFromStorage())
	const [currentUserId, setCurrentUserId] = useState(
		() => localStorage.getItem('currentUserId')
	)
	const [activePopup, setactivePopup] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [idTaskEdit, setIdTaskEdit] = useState('')
	const [isRenameMode, setisRenameMode] = useState(false)

	const usersTasks = useMemo(() => {
		return users.find(u => u.id === currentUserId)?.tasks || []
	}, [users, currentUserId])

	useEffect(() => {
		saveUsersToStorage(users)
	}, [users])

	useEffect(() => {
		const handler = () => {
			setCurrentUserId(localStorage.getItem('currentUserId'))
		}

		window.addEventListener('storage', handler)
		return () => window.removeEventListener('storage', handler)
	}, [])

	const addTask = () => {
		if (newTaskTitle.trim().length === 0) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: newTaskTitle,
			done: false
		};

		const newUsersTask = users.map((e) => {
			if (e.id === currentUserId) {
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
			if (e.id === currentUserId) {
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
		const newUsersTasks = users.map((e) => {
			if (e.id === currentUserId) {
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
		setUsers(newUsersTasks)
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
				if (e.id === currentUserId) {
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

	return {
		users,
		setUsers,
		currentUserId,
		usersTasks,
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
		setCurrentUserId
	}
};

export default useTasks
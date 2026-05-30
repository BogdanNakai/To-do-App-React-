import { useEffect, useMemo, useState } from 'react';
import { saveUsersToStorage } from './storage.js'
import { useDispatch, useSelector } from 'react-redux';
import { addTaskUser, chengeCurrentUser, deleteTaskUser, isRenameTaskUser, saveUserList, toggleCheckUser } from '../features/tasks/tasksSlice.js';


const useTasks = () => {

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);

	const currentUser = useSelector(state => state.users.currentUser);

	const [activePopup, setactivePopup] = useState('');
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [idTaskEdit, setIdTaskEdit] = useState('')
	const [isRenameMode, setisRenameMode] = useState(false)

	useEffect(() => {
		saveUsersToStorage(users)
	}, [users])

	const addTask = () => {
		if (newTaskTitle.trim().length === 0) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: newTaskTitle,
			done: false
		};

		dispatch(addTaskUser(newTask))
		dispatch(saveUserList())

		setNewTaskTitle('');
		setactivePopup('');
	};

	const deleteTask = (idTask) => {
		dispatch(deleteTaskUser(idTask))
		dispatch(saveUserList())
	}

	const toggleCheckBox = (idTask) => {
		dispatch(toggleCheckUser(idTask))
		dispatch(saveUserList())
	}

	const getEditControls = (titleTask, idTask) => {
		setactivePopup('active')
		setisRenameMode(true)
		setNewTaskTitle(titleTask)
		setIdTaskEdit(idTask)
	}

	const isRenameModeTask = () => {
		dispatch(isRenameTaskUser({ idTaskEdit, newTaskTitle }))
		dispatch(saveUserList())
		

		setisRenameMode(false)
		setactivePopup('')
	}

	return {
		currentUser,
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
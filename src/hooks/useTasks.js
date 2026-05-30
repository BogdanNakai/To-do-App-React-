import { useEffect, useMemo } from 'react';
import { saveUsersToStorage } from './storage.js'
import { useDispatch, useSelector } from 'react-redux';
import { addTaskUser, deleteTaskUser, saveUserList, toggleCheckUser } from '../features/tasks/tasksSlice.js';


const useTasks = () => {

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);
	const currentUser = useSelector(state => state.users.currentUser);

	useEffect(() => {
		saveUsersToStorage(users)
		saveUsersToStorage(currentUser, 'currentUser')
	}, [users, currentUser])

	const addTask = (newTaskTitle) => {
		if (newTaskTitle.trim().length === 0) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: newTaskTitle,
			done: false
		};

		dispatch(addTaskUser(newTask))
		dispatch(saveUserList())		
	};

	const deleteTask = (idTask) => {
		dispatch(deleteTaskUser(idTask))
		dispatch(saveUserList())
	}

	const toggleCheckBox = (idTask) => {
		dispatch(toggleCheckUser(idTask))
		dispatch(saveUserList())
	}

	const actionsUsers = useMemo(() => ({
		deleteTask,
		addTask,
		toggleCheckBox,
	}), [deleteTask, addTask, toggleCheckBox]);

	return {
		actionsUsers,
	}
};

export default useTasks
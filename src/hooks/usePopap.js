import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { isRenameTaskUser, saveUserList } from "../features/tasks/tasksSlice";

const usePopap = () => {

	const dispatch = useDispatch()

	const [activePopup, setActivePopup] = useState(false);
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [idTaskEdit, setIdTaskEdit] = useState('')
	const [isRenameMode, setisRenameMode] = useState(false)

	const getEditControls = (titleTask, idTask) => {
		setActivePopup(true)
		setisRenameMode(true)
		setNewTaskTitle(titleTask)
		setIdTaskEdit(idTask)
	}

	const isRenameModeTask = () => {
		dispatch(isRenameTaskUser({ idTaskEdit, newTaskTitle }))
		dispatch(saveUserList())
	}

	const actionPopap = useMemo(() => ({
		idTaskEdit,
		getEditControls,
		activePopup,
		newTaskTitle,
		isRenameMode,
		isRenameModeTask,
	}), [
		getEditControls,
		activePopup,
		newTaskTitle,
		isRenameMode,
		idTaskEdit,
		isRenameModeTask])

	return (
		{
			actionPopap,
			setActivePopup,
			setisRenameMode,
			setNewTaskTitle,
		}
	)
};

export default usePopap
import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useSelect from "../hooks/useSelect";
import useFilter from "../hooks/useFilter";

export const TasksContext = createContext({})

export const TaskProvider = (props) => {

	const { children } = props;

	const select = useSelect();

	const {
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

	return (
		<TasksContext.Provider value={{
			userTasks,
			filteredTasks,
			filteredByDone,
			toggleCheckBox,
			deleteTask,
			getEditControls,
			activePopup,
			setactivePopup,
			newTaskTitle,
			setNewTaskTitle,
			addTask,
			isRenameMode,
			setisRenameMode,
			isRenameModeTask,
			searchQuery,
			setSearchQuery,
			select
		}}>
			{children}

		</TasksContext.Provider>
	)

}
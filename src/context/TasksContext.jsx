import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useSelect from "../hooks/useSelect";
import useFilter from "../hooks/useFilter";

export const TasksContext = createContext({})

export const TaskProvider = (props) => {

	const { children } = props;

	const {
		filterIsDone,
		currentSelect,
		isActive,
		boxRef,
		handleSelectItem,
		buttonRef,
	} = useSelect();

	const {
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
	} = useTasks()

	const {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	} = useFilter({ filterIsDone, currentUser })

	return (
		<TasksContext.Provider value={{
			currentUser,
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
			currentSelect,
			isActive,
			boxRef,
			buttonRef,
			handleSelectItem
		}}>
			{children}

		</TasksContext.Provider>
	)

}
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
		handleSelectItem
	} = useSelect();

	const {
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
	} = useTasks()

	const {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	} = useFilter({ filterIsDone, usersTasks })


	return (
		<TasksContext.Provider value={{
			users,
			setUsers,
			currentUserId,
			usersTasks,
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
			handleSelectItem,
			setCurrentUserId
		}}>
			{children}

		</TasksContext.Provider>
	)

}
import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useSelect from "../hooks/useSelect";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {

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
		actionsUsers,
	} = useTasks()

	return (
		<TasksContext.Provider value={{
			filterIsDone,
			actionsUsers,
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
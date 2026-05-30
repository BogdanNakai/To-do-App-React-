import { createContext } from "react";
import useFilter from "../hooks/useFilter";


export const FilterContext = createContext();

export const FilterProvider = (props) => {

	const { children } = props;

	const {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	} = useFilter()

	return (
		<FilterContext
			value={{
				searchQuery,
				setSearchQuery,
				filteredByDone,
				filteredTasks,
			}}
		>
			{children}
		</FilterContext>
	)

};
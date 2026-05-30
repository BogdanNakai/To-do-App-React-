import { createContext } from "react"
import usePopap from "../hooks/usePopap";

export const PopapContext = createContext({})

export const PopapProvider = (props) => {
	const { children } = props;

	const {
		actionPopap,
		setActivePopup,
		setisRenameMode,
		setNewTaskTitle,
	} = usePopap()

	return (
		<PopapContext.Provider
			value={{
				actionPopap,
				setisRenameMode,
				setActivePopup,
				setNewTaskTitle,
			}}
		>
			{children}
		</PopapContext.Provider>
	)
}
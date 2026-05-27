import { createContext } from "react";
import useThem from "../hooks/useThem";

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

	const { children } = props;

	const { them, handleThem } = useThem();

	return (
		<ThemeContext.Provider
			value={{
				them,
				handleThem
			}}
		>
			{children}
		</ThemeContext.Provider>
	)

}
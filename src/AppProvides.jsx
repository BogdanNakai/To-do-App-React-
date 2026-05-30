import { FilterProvider } from './context/FilterContext.jsx';
import { PopapProvider } from './context/PopapContext.jsx';
import { TasksProvider } from './context/TasksContext.jsx'
import { ThemeProvider } from './context/ThemContext.jsx'

export const AppProviders = ({ children }) => {
	return (
		<TasksProvider>
			<ThemeProvider>
				<FilterProvider>
					<PopapProvider>
						{children}
					</PopapProvider>
				</FilterProvider>
			</ThemeProvider>
		</TasksProvider>
	);
};
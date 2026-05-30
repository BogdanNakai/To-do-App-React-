import { configureStore } from '@reduxjs/toolkit'
import TasksReducer from '../features/tasks/tasksSlice'

export const store = configureStore({
	reducer: {
		users: TasksReducer,
	},
})

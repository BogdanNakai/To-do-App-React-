import { createSlice} from '@reduxjs/toolkit'
import { getUsersFromStorage} from '../../hooks/storage'

const currentUserFromStorage =
	JSON.parse(localStorage.getItem("currentUser"))


const tasksSlice = createSlice({
	name: 'users',
	initialState: {
		users: getUsersFromStorage(),
		currentUser: currentUserFromStorage,
	},
	reducers: {
		addUsers: (state, action) => {
			state.users.push(action.payload)
		},
		chengeCurrentUser: (state, action) => {
			const user = state.users.find((user) => user.id === action.payload.id)

				state.currentUser = user ?? action.payload
		},
		saveUserList: (state) => {
			state.users = state.users.map(user => {
				if (user.id === state.currentUser.id) {
					return user = state.currentUser
				}
				return user
			})
		},
		addTaskUser: (state, action) => {
			state.currentUser.tasks.push(action.payload);
		},
		deleteTaskUser: (state, action) => {
			const taskDeleteId = action.payload;
			state.currentUser.tasks = state.currentUser.tasks.filter(
				task => task.id !== taskDeleteId
			)
		},
		toggleCheckUser: (state, action) => {
			const chengeTaskId = action.payload;
			const task = state.currentUser.tasks.find(task => task.id === chengeTaskId)
			if (task) task.done = !task.done;
		},
		isRenameTaskUser: (state, action) => {
			const { idTaskEdit, newTaskTitle } = action.payload;
			const task = state.currentUser.tasks.find(
				task => task.id === idTaskEdit
			)

			if (task) {
				task.title = newTaskTitle
			}
		},

	}
})

export const {
	addUsers,
	addTaskUser,
	deleteTaskUser,
	toggleCheckUser,
	isRenameTaskUser,
	chengeCurrentUser,
	saveUserList,
} = tasksSlice.actions
export default tasksSlice.reducer




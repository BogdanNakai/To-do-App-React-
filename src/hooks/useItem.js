import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveUsersToStorage } from "./storage";
import { TasksContext } from "../context/TasksContext";

const useItem = () => {

	const { users, setUsers, currentUserId } = useContext(TasksContext);

	const navigate = useNavigate();
	const { taskId } = useParams();

	const task = users.find((e) => e.id === currentUserId)?.tasks?.find((e) => e.id === taskId)
	const status = task?.done ? "Complete" : "Incomplete";

	useEffect(() => {
		saveUsersToStorage(users)
	}, [users])

	const handleExit = () => {
		navigate(`/`, { replace: true })
	}

	const replaceStatus = () => {
		setUsers((prevUsers) => prevUsers.map((user) => {
			if (user.id === currentUserId) {
				return {
					...user,
					tasks: user.tasks.map((t) => {
						if (t.id === taskId) {
							return { ...t, done: !t.done }
						}
						return t
					})

				}
			}
			return user
		}))
	}

	return {
		task,
		status,
		replaceStatus,
		handleExit,
	}
};

export default useItem
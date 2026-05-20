import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useItem = () => {

	const navigate = useNavigate();
	const id = localStorage.getItem('currentUserId');
	const { taskId } = useParams();
	const [tasks, setTasks] = useState(() => {
		const saveData = JSON.parse(localStorage.getItem('users'))

		if (saveData) {
			return saveData;
		}
	});
	const task = tasks.find((e) => e.id === id)?.tasks?.find((e) => e.id === taskId)
	const status = task?.done ? "Complete" : "Incomplete";

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(tasks))
	}, [tasks, status])

	const handleExit = () => {
		navigate(`/`, { replace: true })
	}

	const replaceStatus = () => {
		const newDone = tasks.map((e) => {
			if (e.id === id) {
				return {
					...e,
					tasks: e.tasks.map((t) => {
						if (t.id === taskId) {
							return { ...t, done: !t.done }
						}
						return t
					})

				}
			}
			return e
		})
		setTasks(newDone)
	}

	return {
		task,
		status,
		replaceStatus,
		handleExit,
	}
};

export default useItem
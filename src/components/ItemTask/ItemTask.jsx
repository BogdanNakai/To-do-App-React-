import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './ItemTask.scss'

const ItemTask = () => {
	const navigate = useNavigate();
	const id = localStorage.getItem('currentUserId')
	const { taskId } = useParams();
	const [tasks, setTasks] = useState(() => {
		const saveData = JSON.parse(localStorage.getItem('users'))

		if (saveData) {
			return saveData;
		}
	});

	const task = tasks.find((e) => e.id === id).tasks.find((e) => e.id === taskId)
	const [status, setStatus] = useState((() => {
		if (task.done) {
			return 'Complete'
		} else {
			return 'Incomplete'
		}
	}))

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
		setStatus(task.done ? 'Incomplete' : 'Complete')
	}


	return (
		<div className="page-task">
			<div className="page-task--container">
				<div className="page-task--body">
					<h2 className="page-task--title">
						{task.title}
					</h2>
					<p className={`page-task--status page-task--status_${status}`}>
						Status: <span>{status}</span>
					</p>
					<div className="page-task--box-button-action">
						<button onClick={replaceStatus} className="page-task--button page-task--button-status">Status</button>
						<button onClick={handleExit} className="page-task--button page-task--button-exit">Exit</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ItemTask
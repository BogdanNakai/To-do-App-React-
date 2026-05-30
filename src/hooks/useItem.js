import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUserList, toggleCheckUser } from "../features/tasks/tasksSlice";

const useItem = () => {

	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.users.currentUser)

	const navigate = useNavigate();
	const { taskId } = useParams();

	const task = currentUser.tasks?.find((e) => e.id === taskId)
	const status = task?.done ? "Complete" : "Incomplete";

	const handleExit = () => {
		navigate(`/`, { replace: true })
	}

	const replaceStatus = () => {
		dispatch(toggleCheckUser(taskId))
		dispatch(saveUserList())
	}

	return {
		task,
		status,
		replaceStatus,
		handleExit,
	}
};

export default useItem
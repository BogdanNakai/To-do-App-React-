import './PopapAddTask.scss'
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { PopapContext } from '../../context/PopapContext';

const PopapAddTask = () => {

	const {
		actionsUsers
	} = useContext(TasksContext);

	const { actionPopap,
		setisRenameMode,
		setActivePopup,
		setNewTaskTitle, } = useContext(PopapContext)

	const {
		addTask,
	} = actionsUsers;

	const {
		activePopup,
		newTaskTitle,
		isRenameMode,
		isRenameModeTask } = actionPopap;


	window.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' && active === 'active') {
			addTask()
		}
	});

	return (
		<div className={`todo--popapAddTask popapAddTask ${activePopup ? 'active' : ''}`}>
			<h3 className="popapAddTask--title">New Note</h3>
			<div className="popapAddTask--input-addTask">
				<input placeholder="Input your note..." value={newTaskTitle} onChange={(e) => { setNewTaskTitle(e.target.value) }} type="text" name="addTask" id="addTask" className="popapAddTask--input" />
			</div>
			<div className="popapAddTask--btn-action">
				<button className="popapAddTask--button-cancel" onClick={() => setActivePopup(false)}>Cancel</button>
				{isRenameMode ? (<button onClick={() => {
					isRenameModeTask()
					setisRenameMode(false)
					setActivePopup(false)
				}} className='popapAddTask--button-apply popapAddTask--button-apply-isRenameMode'>Rename</button>
				) : (
					<button className={`popapAddTask--button-apply`} onClick={() => {
						addTask(newTaskTitle)
						setActivePopup(false);
						setNewTaskTitle('');
					}}>Apply</button>)
				}
			</div>
		</div>
	)
};

export default PopapAddTask
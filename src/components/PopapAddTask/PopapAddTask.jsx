import './PopapAddTask.scss'

const PopapAddTask = ({ active, setactivePopup, newTaskTitle, setNewTaskTitle, addTask, isRenameMode, isRenameModeTask }) => {

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' && active === 'active' ) { 
			addTask()
		}
	});


	return (
		<div className={`todo--popapAddTask popapAddTask ${active}`}>
			<h3 className="popapAddTask--title">New Note</h3>
			<div className="popapAddTask--input-addTask">
				<input placeholder="Input your note..." value={newTaskTitle} onChange={(e) => { setNewTaskTitle(e.target.value) }} type="text" name="addTask" id="addTask" className="popapAddTask--input" />
			</div>
			<div className="popapAddTask--btn-action">
				<button className="popapAddTask--button-cancel" onClick={() => setactivePopup('')}>Cancel</button>
				{isRenameMode ? (<button onClick={() => { isRenameModeTask() }} className='popapAddTask--button-apply popapAddTask--button-apply-isRenameMode'>Rename</button>
				) : (
					<button className={`popapAddTask--button-apply`} onClick={() => {
						addTask()
					}}>Apply</button>)
				}
			</div>
		</div>
	)
};

export default PopapAddTask
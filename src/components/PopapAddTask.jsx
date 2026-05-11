import { useState } from "react";

const PopapAddTask = ({ active, setActivePopap, newTaskTitle, setNewTaskTitle, addTask, rename}) => {


	return (
		<div className={`todo--popapAddTask popapAddTask ${active}`}>
			<h3 className="popapAddTask--title">New Note</h3>
			<div className="popapAddTask--input-addTask">
				<input placeholder="Input your note..." value={newTaskTitle} onChange={(e) => { setNewTaskTitle(e.target.value) }} type="text" name="addTask" id="addTask" className="popapAddTask--input" />
			</div>
			<div className="popapAddTask--btn-action">
				<button className="popapAddTask--button-cancel" onClick={() => setActivePopap('')}>Cancel</button>
				{rename ? (<button className='popapAddTask--button-apply popapAddTask--button-apply-rename' >Rename</button>
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
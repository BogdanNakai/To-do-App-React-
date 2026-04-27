const SelectTypeTask = () => { 
	return (
		<>
			<div className="todo--select-task">
				<select name="selectType" id="selectType">
					<option defaultValue="all">All</option>
					<option defaultValue="done">Done</option>
					<option defaultValue="not-done">Not done</option>
				</select>
			</div>
		</>
	)
};

export default SelectTypeTask
const SelectTypeTask = ({setFilterIsDone}) => { 
	return (
		<>
			<div className="todo--select-task">
				<select onChange={(e) => setFilterIsDone(e.target.value)} name="selectType" id="selectType">
					<option value="all">All</option>
					<option value="done">Done</option>
					<option value="not-done">Not done</option>
				</select>
			</div>
		</>
	)
};

export default SelectTypeTask
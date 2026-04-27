const PopapAddTask = () => {
	return (
		<div className="todo--popapAddTask popapAddTask">
			<h3 className="popapAddTask--title">New Note</h3>
			<div className="popapAddTask--input-addTask">
				<input placeholder="Input your note..." type="text" name="addTask" id="addTask" className="popapAddTask--input" />
			</div>
			<div className="popapAddTask--btn-action">
				<button className="popapAddTask--button-cancel">Cancel</button>
				<button className="popapAddTask--button-apply">Apply</button>
			</div>
		</div>
	)
};

export default PopapAddTask
const Input = ({ toggleCheckBox, item}) => { 
	return (
		<label className="todo--checkbox"><input type="checkbox" onChange={() => toggleCheckBox(item.id)} className="todo--checkbox--real" name="todoCheckedTask" id="todoCheckedTask" defaultChecked={item.done} />
			<span className="todo--checkbox-fake"></span>
		</label>
	)
};

export default Input
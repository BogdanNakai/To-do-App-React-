import './SelectTypeTask.scss'
import arrow from '../../assets/icon_arow.svg'
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';


const SelectTypeTask = () => {

	const {
		isActive,
		boxRef,
		handleSelectItem,
		currentSelect
	} = useContext(TasksContext)


	return (
		<>
			<div ref={boxRef} className="todo--select-task">
				<div className="select__header">
					<span className="select__current">{currentSelect}</span>
					<div className="select__icon"><img src={arrow} alt="Image" /></div>
				</div>
				<div className={`select__body ${isActive}`}>
					<div onClick={handleSelectItem} className="select__item" data-value="all">All</div>
					<div onClick={handleSelectItem} className="select__item" data-value="done">Complete</div>
					<div onClick={handleSelectItem} className="select__item" data-value="not-done">Incomplete</div>
				</div>
			</div>
		</>
	)
};

export default SelectTypeTask
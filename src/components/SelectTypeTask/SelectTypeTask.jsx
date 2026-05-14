import './SelectTypeTask.scss'
import arrow from '../../assets/icon_arow.svg'
import { useEffect, useState, useRef } from 'react';

const SelectTypeTask = ({ setFilterIsDone }) => {

	const [currentSelect, setCurrentSelect] = useState('All')
	const [isActive, setIsActive] = useState('')
	const boxRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (boxRef.current && !boxRef.current.contains(event.target)) {
				setIsActive('')
			} else { 
				setIsActive('is-active')
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleSelectItem = (e) => {
		const value = e.currentTarget.getAttribute('data-value');
		setFilterIsDone(value)
		setCurrentSelect(e.currentTarget.textContent)
		setIsActive('');
	};

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


{/* 	<select onChange={(e) => setFilterIsDone(e.target.value)} name="selectType" id="selectType">
					<option value="all">All</option>
					<option value="done">Done</option>
					<option value="not-done">Not done</option>
				</select> */}
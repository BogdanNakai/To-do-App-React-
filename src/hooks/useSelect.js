import { useEffect, useState, useRef } from 'react';

const useSelect = () => {

	const [filterIsDone, setFilterIsDone] = useState('')
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

	return {
		currentSelect,
		isActive,
		boxRef,
		filterIsDone,
		handleSelectItem
	}
}

export default useSelect
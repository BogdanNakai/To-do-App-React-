import { useEffect, useState, useRef } from 'react';

const useSelect = () => {

	const [filterIsDone, setFilterIsDone] = useState('')
	const [currentSelect, setCurrentSelect] = useState('All')
	const [isActive, setIsActive] = useState(false)
	const boxRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (buttonRef.current?.contains(event.target)) {
				setIsActive(isActive => !isActive)
			}

			if (!boxRef.current?.contains(event.target) && isActive) {
				setIsActive(false)
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isActive]);

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
		handleSelectItem,
		buttonRef
	}
}

export default useSelect
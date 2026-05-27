import { useEffect, useState } from "react";

const useThem = () => {

	const [them, setThem] = useState(() => {

		const localStore = localStorage.getItem('themMode');

		if (!localStore) {
			return 'light'
		}

		return localStore
	})

	const handleThem = () => {
		if (them === 'light') {
			setThem('dark')
		} else if (them === 'dark') {
			setThem('light')
		}
	}

	useEffect(() => {
		localStorage.setItem('themMode', them)
		document.body.setAttribute('data-theme', them);
	}, [them])

	return (
		{
			them,
			handleThem,
		}
	)
};

export default useThem
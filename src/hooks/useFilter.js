import { useMemo, useState } from 'react';

const useFilter = ({ filterIsDone, currentUser }) => {

	const [searchQuery, setSearchQuery] = useState('')

	const filteredByDone = filterIsDone === 'done'
		? currentUser.tasks?.filter(({ done }) => done)
		: filterIsDone === 'not-done'
			? currentUser.tasks?.filter(({ done }) => !done)
			: currentUser?.tasks;

	const filteredTasks = useMemo(() => {
		const clearsearchQuery = searchQuery.trim().toLocaleLowerCase();

		return clearsearchQuery.length > 0
			? filteredByDone.filter(({ title }) => title.toLocaleLowerCase().includes(clearsearchQuery))
			: filteredByDone;
	}, [searchQuery, filteredByDone])


	return {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	}
};

export default useFilter
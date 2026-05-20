import { useState } from 'react';

const useFilter = (filterIsDone, userTasks) => {

	const [searchQuery, setSearchQuery] = useState('')

	const clearsearchQuery = searchQuery.trim().toLocaleLowerCase();
	const filteredByDone = filterIsDone === 'done' ? userTasks.filter(({ done }) => done) : filterIsDone === 'not-done' ? userTasks.filter(({ done }) => !done) : userTasks;;
	const filteredTasks = clearsearchQuery.length > 0 ? filteredByDone.filter(({ title }) => title.toLocaleLowerCase().includes(clearsearchQuery)) : filteredByDone;

	return {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	}
};

export default useFilter
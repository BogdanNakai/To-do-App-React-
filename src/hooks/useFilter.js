import { useMemo, useState } from 'react';

const useFilter = ({ filterIsDone, usersTasks }) => {

	const [searchQuery, setSearchQuery] = useState('')

	const filteredByDone = filterIsDone === 'done' ? usersTasks.filter(({ done }) => done) : filterIsDone === 'not-done' ? usersTasks.filter(({ done }) => !done) : usersTasks;;
	const filteredTasks = useMemo(() => {
		const clearsearchQuery = searchQuery.trim().toLocaleLowerCase();

		return clearsearchQuery.length > 0 ? filteredByDone.filter(({ title }) => title.toLocaleLowerCase().includes(clearsearchQuery)) : filteredByDone;
	}, [searchQuery, filteredByDone])


	return {
		searchQuery,
		setSearchQuery,
		filteredByDone,
		filteredTasks,
	}
};

export default useFilter
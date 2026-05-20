import search from '../../assets/icon_search.svg'
import './SearchTask.scss'

const SearchTask = ({ searchQuery, setSearchQuery }) => {
	return (
		<div className="todo--seacrh-task">
			<input placeholder='Search note...' value={searchQuery} onInput={(e) => setSearchQuery(e.target.value)} id='searchTask' type="search" className="todo--seacrh" />
			<img src={search} alt="search" />
		</div>
	)
};

export default SearchTask
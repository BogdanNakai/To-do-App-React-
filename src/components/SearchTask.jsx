import search from '../assets/icon_search.svg'

const SearchTask = ({ searchQwery, setSearchQwery }) => { 
	return (
		<div className="todo--seacrh-task">
			<input placeholder='Search note...' value={searchQwery} onInput={(e) => setSearchQwery(e.target.value)} id='searchTask' type="search" className="todo--seacrh" />
			<img src={search} alt="search" />
		</div>
	)
};

export default SearchTask
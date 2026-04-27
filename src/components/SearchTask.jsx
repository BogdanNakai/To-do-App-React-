import search from '../assets/icon_search.svg'

const SearchTask = () => { 
	return (
		<div className="todo--seacrh-task">
			<input placeholder='Search note...' id='searchTask' type="search" className="todo--seacrh" />
			<img src={search} alt="search" />
		</div>
	)
};

export default SearchTask
import useItem from '../../hooks/useItem';
import './ItemTask.scss'

const ItemTask = () => {

	const { 
		task,
		status,
		replaceStatus,
		handleExit,
	} = useItem()
	
	return (
		<div className="page-task">
			<div className="page-task--container">
				<div className="page-task--body">
					<h2 className="page-task--title">
						{task.title}
					</h2>
					<p className={`page-task--status page-task--status_${status}`}>
						Status: <span>{status}</span>
					</p>
					<div className="page-task--box-button-action">
						<button onClick={replaceStatus} className="page-task--button page-task--button-status">Status</button>
						<button onClick={handleExit} className="page-task--button page-task--button-exit">Exit</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ItemTask
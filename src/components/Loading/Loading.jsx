import preview  from "../../assets/preview.gif";
import './Loading.scss'

const Loading = () => {
	return (
		<div className="loading">
			<img src={preview} alt="Image" />
		</div>
	)
};

export default Loading
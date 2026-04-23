import fb  from '../assets/icon_fb.svg';
import  google  from '../assets/icon_google.svg';
import tiktok from '../assets/icon_tiktok.svg';

const Social = () => {
	return (
		<div clas="form--social-box">
			<p className="form--social-text">
				Or login with social platforms
			</p>
			<ul className="form--social-list">
				<li className="form--social-item">
					<a href="" className="form--social-link">
						<img src={fb} alt="Facebook" />
					</a>
				</li>
				<li className="form--social-item">
					<a href="" className="form--social-link">
						<img src={google} alt="Google" />
					</a>
				</li>
				<li className="form--social-item">
					<a href="" className="form--social-link">
						<img src={tiktok} alt="Tiktok" />
					</a>
				</li>
			</ul>
		</div>
	)
};

export default Social
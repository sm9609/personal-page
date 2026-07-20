import "../css/aboutMe.css";
import aboutMeText from "../data/aboutMe.txt?raw";
export default function AboutMe() {
	return (
		<div className="abt-me-section">
			<h1 className="section-header">About Me</h1>
			<div className="about-me">
				<div className="abt-me-img">
					<img src="assets/Me.jpeg" alt="Samuel Mensah"></img>
				</div>
				<p>{aboutMeText}</p>
			</div>
		</div>
	);
}

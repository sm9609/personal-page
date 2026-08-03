import type { ReactNode } from "react";
import "../css/textCard.css";
type props= {
	children?:ReactNode,
	text:string
}
export default function TextCard({children,text}:props) {
	return (
		<div className="textCard">
			<div className="textCard-img">
				{children}
				{/* <img src={img}></img> */}
			</div>
			<p>{text}</p>
		</div>
	);
}

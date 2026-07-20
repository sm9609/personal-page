import "../css/projectsGroup.css";
import "../types";

import skills from "../data/skills.json";
import { useRef, useState, useEffect } from "react";
type props = {
	name: string;
	shortDesc: string;
	techStack: string[];
	date?: string;
	svgPath?: string;
};
export default function ProjectView({
	name,
	shortDesc,
	date,
	svgPath: imgPath,
	techStack,
}: props) {
	let techStackSkills: SkillType[] = [];
	let UDate: Date = new Date(date ?? 0);

	const [nameWidth, setNameWidth] = useState<number>(0);
	const [spanWidth, setSpanWidth] = useState<number>(0);
	let projectNameSpan = useRef<HTMLHeadingElement | null>(null);
	let projectName = useRef<HTMLHeadingElement | null>(null);

	const hasOverflow: boolean = spanWidth > nameWidth;
	const animState: string = hasOverflow ? "running" : "paused";

	useEffect(() => {
		if (projectNameSpan.current) {
			const spanWidth = projectNameSpan.current.clientWidth;
			setSpanWidth(spanWidth);
		}
		if (projectName.current) {
			const headerWidth = projectName.current.clientWidth;
			setNameWidth(headerWidth);
		}
	}, []);

	techStack.forEach((tech) => {
		const skill = skills.find((skill) => skill.name == tech);
		if (skill) {
			techStackSkills.push(skill);
		}
	});
	return (
		<div className="project">
			<div className="project-img">
				<img src={imgPath || "/assets/black-placeholder.jpg"} />
			</div>

			<div className="project-info">
				<h3 className="project-name" ref={projectName}>
					<span
						className="scroll-text"
						style={{ animationPlayState: animState }}
						ref={projectNameSpan}
					>
						{name}
					</span>
				</h3>
				<svg
					className="text-divider"
					width="1"
					height="37"
					viewBox="0 0 1 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line x1="0.5" x2="0.5" y2="37" stroke="#333333" />
				</svg>
				<h4 className="project-date">
					Last Updated: {UDate.getMonth()}/{UDate.getDay()}/
					{UDate.getFullYear()}
				</h4>
				<p className="project-desc">{shortDesc}</p>
			</div>
			<h3>Tech-Stack</h3>
			<div className="techstack-sec">
				{techStackSkills?.map((s) => (
					<a className="tech-emblem" key={s.name} href={s.link}>
						<svg
							role="img"
							width="24px"
							height="24px"
							viewBox={s.viewbox}
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>{s.name}</title>
							<path
								d={s.path}
								transform={`translate(${s.offset ? s.offset[0] : 0} ${s.offset ? s.offset[1] : 1})`}
								fill="#735CDD"
							/>
						</svg>
					</a>
				))}
			</div>
		</div>
	);
}

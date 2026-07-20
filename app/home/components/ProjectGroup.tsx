import ProjectCard from "./ProjectCard"
import '../types'
type props = {
    projects:project[]
}
export default function ProjectGroup({projects}:props) {
    return(
	<div className='proj-section'>
		<h1 className='section-header'>Projects</h1>
        <div className="project-group">
            {projects.map((p)=>(
                <ProjectCard key={p.name}
                    name={p.name}
                    shortDesc={p.shortDesc}
                    date={p.date}
                    svgPath={p.imgPath}
                    techStack={p.techStack}
                />
            ))}
        </div>
	</div>
    )
}
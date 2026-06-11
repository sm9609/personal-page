import ProjectView from "./components/ProjectView"
import './types'
type props = {
    projects:project[]
}
export default function ProjectGroup({projects}:props) {
    return(
        <div className="project-group">
            {projects.map((p)=>(
                <ProjectView key={p.name}
                    name={p.name}
                    shortDesc={p.shortDesc}
                    date={p.date}
                    imgPath={p.imgPath}
                    techStack={p.techStack}
                />
            ))}
        </div>
    )
}
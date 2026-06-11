import './projectView.css'
import '../types'
import skills from '../skills.json'

type props = {
    name:string,
    shortDesc:string,
    techStack:string[]
    date?:string,
    imgPath?:string,
}
export default function ProjectView({
    name,
    shortDesc,
    date,
    imgPath,
    techStack
}:props) {
    let techStackSkills:SkillType[] = []
    techStack.forEach((tech)=>{
        const skill = skills.find((skill)=>(
            skill.name == tech
        ))
        if(skill){
            techStackSkills.push(skill)
        }
    })
    return(
        <div className="project">
            <div className='project-img'>
                <img src={imgPath || '/assets/black-placeholder.jpg'}/>    
            </div>
    
            <div className='project-info'>
                <h1 className='project-name'>{name}</h1> 
                <h6 className='project-time'>{date}</h6>
                <p className='project-desc'>{shortDesc}</p>
                <h2>Tech-Stack</h2>
                <div className='techstack-sec'>
                    
                    {techStackSkills?.map((s)=>(
                        <a className='tech-emblem' key={s.name} href={s.link} >
                            <svg role="img" width="24px" height="24px" viewBox={s.viewbox} xmlns="http://www.w3.org/2000/svg"><title>React</title>
                                <path d={s.path} fill='#735CDD'/>
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
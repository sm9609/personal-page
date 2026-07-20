import "../css/skillsGroup.css"

type props = {
    name:string
    link:string | undefined
    svgPath:string
    viewBox:string
    offset:number[]|undefined
}
export default function SkillCard({name,svgPath,viewBox,offset,link}:props ) {
    return(
        <a href={link}>
            <div className="skill-card">
                <svg className="icon" viewBox={viewBox}>
                    <path d={svgPath} transform={`translate(${offset ? offset[0] : 0} ${offset ? offset[1] : 1})`}/>
                </svg>
                <h4 className="label">{name}</h4>
            </div>
        </a>
    )
}
import '../css/skillCarsousel.css'
import Display from './SkillDisplay'
import '../types'

export default function SkillCarousel ({skills=[], columns=3}:{skills:SkillType[], columns:number}){
    const columnNum = new Array(columns).fill(null)
    const skillQueue: SkillType[] = [...(skills as SkillType[])]
    // .sort(() => Math.random() - 0.5)



    return(<>
        {columnNum.map((_,i)=>(
            <div key={i}  className="skill-carousel">
                <div className="skill-spin">
                    {skillQueue.map((skill)=>(
                        <Display 
                            key={skill.name}
                            icon={skill.path}
                            label={skill.name}
                            viewbox={skill.viewbox}
                            offset={skill.offset}
                        />
                    ))}
                </div>
                <div aria-hidden className="skill-spin">
                    {skillQueue.map((skill)=>(
                        <Display 
                            key={skill.name}
                            icon={skill.path}
                            label={skill.name}
                            viewbox={skill.viewbox}
                            offset={skill.offset}
                        />
                    ))}
                </div>
            </div>
        ))}
    </>)
    
}
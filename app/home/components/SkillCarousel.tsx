import Display from './Display'
import { ReactSVG } from '../../svg_icons'
import '../types'

export default function SkillCarousel ({skills=[]}:{skills:SkillType[]}){
    const columnNum = 3
    const skillQueue: SkillType[] = [...(skills as SkillType[])]
    .sort(() => Math.random() - 0.5)



    return(<>
        <div className="skill-carousel">
            <div className="skill-group">
                {skills.map((skill)=>(
                    <Display 
                        key={skill.name}
                        icon={skill.path}
                        label={skill.name}
                        viewbox={skill.viewbox}
                        offset={skill.offset}
                    />
                ))}
            </div>
            <div aria-hidden className="skill-group">
                {skills.map((skill)=>(
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
    </>)
    
}
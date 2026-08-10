import '../css/skillCarsousel.css'
import Display from './SkillDisplay'
import '../types'
import { useEffect, useState } from 'react'

export default function SkillCarousel ({skills=[],show=true}:{skills:SkillType[], show?:boolean}){
    const [skillQueue,setSkillQueue] = useState<SkillType[]>()
    let SkillQueue: SkillType[] = [...(skills as SkillType[])];

    const group = (
        <div className="skill-spin">
            {skillQueue?.map((skill)=>(
                <Display 
                    key={skill.name}
                    icon={skill.path}
                    label={skill.name}
                    viewbox={skill.viewbox}
                    offset={skill.offset}
                />
            ))}
        </div>
    )

    useEffect(()=>{
        setSkillQueue(SkillQueue.sort(() => Math.random() - 0.5))
        console.log(SkillQueue)
    },[])
    
    return(<>
            {show?
                <div className="skill-carousel">
                    {group}
                    {group}
                </div>
                :
                <></>
            }
    </>)
    
}
import '../css/skillsGroup.css'
import Skills from '../data/skills.json'
import SkillCard from './SkillCard'
import DButton from './DButton'
import DropDownIcon from '../../icons/dropDownIcon'
export default function SkillGroup() {
    const filteredSkills:SkillType[] =  Skills 
    return(
    <div className="skill-section">
        <div className='section-header'>
            <h1 className='section-header'>Skills</h1>
            <div className='button-deck'>
                    <DButton> 
                        <DropDownIcon size='20px'/>
                        Sort
                    </DButton>
                    <DButton>
                        <DropDownIcon size='20px'/>
                        Filter
                    </DButton>
            </div>
        </div>
        
    <div className='skill-group'>
        
        <div className='skill-array'>
            {filteredSkills.map((s)=>( 
                <SkillCard
                    key={s.name}
                    name={s.name}
                    link={s.link}
                    svgPath={s.path}
                    viewBox={s.viewbox}
                    offset={s.offset}

                />
            ))}
            
        </div>
    </div>
</div>
)}
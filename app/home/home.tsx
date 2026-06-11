import './home.css'
import '../svg_icons'

import skills from './skills.json'
import projects from './projects.json'

import SkillCarousel from './components/SkillCarousel'

import ProjectGroup from './ProjectGroup'

export function Home() {

  return (
  <div className='home'>
    
    <div className='hero'>
      <div id="greeting">
        <h1 >Hello, welcome to 
            <br></br>
            <span style={{color:'#735CDD'}}>Samuel Mensah’s</span>
            <br></br>
            Website
        </h1>
        
        <button>
          
          <span>Github</span>
        </button>
        <button>
          <span>linkedin</span>
        </button>
      </div>
        <SkillCarousel skills={skills}/>
        <SkillCarousel skills={skills}/>
    </div>
    
    <div className='proj-section'>
      <h1>Projects</h1>
      <ProjectGroup projects={projects}/>
    </div>
  </div>
  )
}

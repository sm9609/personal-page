import './css/home.css'
import {useRef,useEffect,useState} from 'react'
import skills from './data/skills.json'
import projects from './data/projects.json'
import Background from './components/Background'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import ProjectGroup from './components/ProjectGroup'
import SkillGroup from './components/SkillGroup'

export function Home() {
  const [pageWidth, setPageWidth] = useState(0)

  let homeDiv = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    if(homeDiv.current){
      let homeDivWidth = homeDiv.current.offsetWidth
      setPageWidth(homeDivWidth)
    }else{
      console.warn("homeDiv ref is Null")
    }
  },[])
  return (
  <div className='home' ref={homeDiv}>
    <Hero pageWidth={pageWidth}/>
    <div className='section-container'>
      <div className='divider'></div>
      <Background/>
      <AboutMe/>
      <SkillGroup/>   
      <ProjectGroup projects={projects}/>
    </div>
  </div>
  )
}

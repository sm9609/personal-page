import './css/home.css'
import {useRef,useEffect,useState} from 'react'
import projects from './data/projects.json'
import Hero from './components/Hero'
import TextCard from './components/TextCard'
import ProjectGroup from './components/ProjectGroup'
import SkillGroup from './components/SkillGroup'
import abtMe1 from './data/aboutMe1.txt?raw'
import abtMe2 from'./data/aboutMe2.txt?raw'
import abtMe3 from './data/aboutMe3.txt?raw'

export function Home() {
  return (
  <div className='home'>
    <Hero/>
    <div className='section-container'>
      <div className='divider'></div>
      <div className="abt-me-section">
        <h1 className="section-header">About Me</h1>
        <div className="textCard">
          <div className="textCard-img">
            <img src='./assets/Me.jpeg'></img>
          </div>
          <p>{abtMe1}</p>
        </div>
        <div className="textCard">
          <p>{abtMe2}</p>
          <div className="textCard-img">
            <img src='./assets/rit-overhead.jpg'></img>
          </div>
        </div>
        <div className="textCard">
          <div className="textCard-img">
            <img src='./assets/Me.jpeg'></img>
          </div>
          <p>{abtMe3}</p>
        </div>
      </div>
      <SkillGroup/>   
      <ProjectGroup projects={projects}/>
    </div>
  </div>
  )
}

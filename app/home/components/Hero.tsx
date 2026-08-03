import '../css/hero.css'
import '../css/DButton.css'
import SkillCarousel from './SkillCarousel'
import skills from '../data/skills.json'
import DButton from './DButton'
import LinkedInIcon from '../../icons/LinkedInIcon'
import GithubIcon from '../../icons/GithubIcon'
import { useEffect, useState } from 'react'
import useWindowSize from "../hooks/useWindowSize"

export default function Hero() {
    const [textFlicker, setTextFlicker] = useState<'running'|'paused'>('paused')
    const {pageWidth} = useWindowSize()
    let skillColumns:number=2;
    console.log(pageWidth)
    if(pageWidth > 1400){
        skillColumns = 3
    }
    else if(pageWidth < 425){
      skillColumns = 1
    }
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        if(textFlicker == "paused"){
          setTextFlicker("running")
        }
      },3000)
      return () => clearInterval(interval)
    },[])

    
    return(
    <div className='hero'>
      <div id="greeting">
        <h1 >Hello, welcome to 
            <br></br>
              <span 
                style={{ animationPlayState: textFlicker }} 
                onAnimationEnd={()=>setTextFlicker("paused")}>
                Samuel Mensah’s
              </span>
            <br></br>
            Website
        </h1>
        <div className='buttons'>
          <DButton href='https://github.com/sm9609'>
            <GithubIcon size='20px'/>
            <span>Github</span>
          </DButton>

          <DButton href='https://www.linkedin.com/in/sm9609/'>
            <LinkedInIcon size='20px'/>
            <span>linkedin</span>
          </DButton>
        </div>
      </div>
        <SkillCarousel skills={skills} columns={skillColumns}/>
    </div> 
    )
}
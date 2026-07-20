import type { MouseEventHandler } from 'react'
import '../css/DButton.css'
type props = {
    children:any
    href?:string
    onClick?:MouseEventHandler
}
export default function DButton({children,onClick,href="Null"}:props) {
    if(onClick == undefined && href == "Null"){
        onClick = ()=>{
            console.warn("No Function bound")
        }
    }
    return(
        <div className='dbutton-border'>
            {   href != "Null" ?
                <a className='dbutton-wrap' href={href}>
                    <button onClick={onClick}>
                        {children ? children : "Null"}
                    </button>
                </a>
                :
                <a className='dbutton-wrap'>
                    <button onClick={onClick}>
                        {children ? children : "Null"}
                    </button>
                </a>
            }
        </div>
    )
}
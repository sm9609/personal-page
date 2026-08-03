import {useState, useEffect} from 'react'
export default function useWindowSize(){
    const [windowSize,SetWindowSize] = useState({pageWidth:0,pageHeight:0})
    useEffect(()=>{
        function handleResize(){
            SetWindowSize({pageWidth:window.innerWidth,pageHeight:window.innerHeight})
        }

        handleResize()
        window.addEventListener("resize",handleResize)

        return()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])
    return(windowSize)
}
type props = {
    label:string,
    icon:string,
    viewbox:string
    offset:number[]|undefined
}
export default function Display({label,icon,viewbox,offset}:props){
    const safeOffset = offset ?? [0,0]
    return(
        <div className="skill-display">
            <svg className='box'  viewBox="0 0 298 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" filter="url(#filter0_d_88_5)">
                <path d="M58.7 49.7C58.7 48.5954 59.5954 47.7 60.7 47.7H236.7C237.805 47.7 238.7 48.5954 238.7 49.7V295.7C238.7 296.805 237.805 297.7 236.7 297.7H60.7C59.5954 297.7 58.7 296.805 58.7 295.7V49.7Z" fill="#735CDD" fillOpacity="0.6"/>
                <path d="M57.2 28.7L57.2 322.7M28.7 47.2H268.7M28.7 298.2H268.7M239.2 28.7L239.2 322.7M58.7 49.7C58.7 48.5954 59.5954 47.7 60.7 47.7H236.7C237.805 47.7 238.7 48.5954 238.7 49.7V295.7C238.7 296.805 237.805 297.7 236.7 297.7H60.7C59.5954 297.7 58.7 296.805 58.7 295.7V49.7Z" stroke="#735CDD"/>
                </g>

                
                <text className="skill-label" x="50%" y="80%">{label}</text>

                <defs>
                <filter id="filter0_d_88_5" x="1.14441e-05" y="-4.95911e-05" width="297.4" height="351.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="14.35"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.360784 0 0 0 0 0.866667 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_5"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_5" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className="skillSvg" role="img" viewBox={viewbox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path transform={`translate(${safeOffset[0]} ${safeOffset[1]})`} d={icon}/>
            </svg>
        </div>
    )
}
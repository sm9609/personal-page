import './svg_icons'
export function IconSVG({path}:{path: string}){
    const svgPath = path
    return(
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="48" height="48" fill="currentColor">
            <path d={svgPath}></path>
        </svg>
    )
};

export function SkillBackground(){
    return(
       <svg width="240" height="301" viewBox="0 0 240 301" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#filter0_dn_110_3)">
            <rect x="30" y="25.3" width="180" height="250" rx="2" fill="#735CDD" fill-opacity="0.47" shape-rendering="crispEdges"/>
        </g>
        <line opacity="0.6" x1="28.5" y1="6.30005" x2="28.5" y2="300.3" stroke="#735CDD"/>
        <line opacity="0.6" y1="24.8" x2="240" y2="24.8" stroke="#735CDD"/>
        <line opacity="0.6" y1="275.8" x2="240" y2="275.8" stroke="#735CDD"/>
        <line opacity="0.6" x1="210.5" y1="6.30005" x2="210.5" y2="300.3" stroke="#735CDD"/>
        <defs>
            <filter id="filter0_dn_110_3" x="4.7" y="4.95911e-05" width="230.6" height="300.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_110_3"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10.15"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.360784 0 0 0 0 0.866667 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.019267821684479713 3.3333332538604736" stitchTiles="stitch" numOctaves="3" result="noise" seed="6534" />
                <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                </feComponentTransfer>
                <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                <feFlood flood-color="rgba(255, 255, 255, 0.25)" result="color1Flood" />
                <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                <feMerge result="effect2_noise_110_3">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
                </feMerge>
                <feBlend mode="normal" in="effect2_noise_110_3" in2="effect1_dropShadow_110_3" result="effect2_noise_110_3"/>
            </filter>
        </defs>
        </svg>
    )
}
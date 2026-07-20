type props = {
    color?:string;
    size?:string;
}
export default function dropDownIcon({color="#746025",size="20px"}:props) {
    return(
        <svg className="Icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z" />
        </svg> 
    )
}
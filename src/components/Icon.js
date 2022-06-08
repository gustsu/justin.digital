
export default function Icon(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            <img src={props.src} alt={props.alt}/>
        </a>
    )
}

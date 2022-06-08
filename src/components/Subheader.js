import './Subheader.scss';

export default function Subheader(props) {
    return (
        <div className='subheader'>
            <h2>{props.text}</h2>
        </div>
    )
}

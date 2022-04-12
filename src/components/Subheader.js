import './Subheader.scss';

export default function Subheader(props) {
    const text = props.text;
    return (
        <div className='Subheader'>
            <h2>{text}</h2>
        </div>
    )
}

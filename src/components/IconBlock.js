import LinkedinIcon from '../assets/icon-linkedin.svg';
import GithubIcon from '../assets/icon-github.svg';
import DribbbleIcon from '../assets/icon-dribbble.svg';
import MailIcon from '../assets/icon-mail.svg';
import Icon from '../components/Icon';
import './IconBlock.scss';

export default function IconBlock() {
    return (
        <div className='icon-section'>
            <Icon href="https://www.linkedin.com/in/justin-tew/" src={LinkedinIcon} alt="Linkedin" />
            <Icon href="https://github.com/gustsu" src={GithubIcon} alt="Github" />
            <Icon href="https://dribbble.com/justin-digital" src={DribbbleIcon} alt="Dribbble" />
            <Icon href="mailto:justintewtew@gmail.com" src={MailIcon} alt="Email" />
        </div>
    )
}

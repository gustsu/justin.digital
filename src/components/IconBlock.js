import LinkedinIcon from '../assets/icon-linkedin.svg';
import GithubIcon from '../assets/icon-github.svg';
import DribbbleIcon from '../assets/icon-dribbble.svg';
import MailIcon from '../assets/icon-mail.svg';
import './IconBlock.scss';
export default function IconBlock() {
    return (
        <div className='icon-section'>
            <img src={LinkedinIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
            <img src={GithubIcon} className="linkedin-logo" alt="Github Social Logo" />
            <img src={DribbbleIcon} className="linkedin-logo" alt="Dribbble Social Logo" />
            <img src={MailIcon} className="linkedin-logo" alt="Email Icon" />
      </div>
    )
}

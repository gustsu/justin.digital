import Container from 'react-bootstrap/Container';
import LinkedinIcon from '../assets/icon-linkedin.svg';
import GithubIcon from '../assets/icon-github.svg';
import DribbbleIcon from '../assets/icon-dribbble.svg';
import MailIcon from '../assets/icon-mail.svg';
import './HeroSection.scss';

export default function HeroSection() {
  return (
    <div className='hero-section pos-rel'>
        <Container>
            <div className="inner-content">
              <h1>justin tew</h1>
              <h2>Frontend Engineer</h2>
              <div className='icon-section'>
                <img src={LinkedinIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
                <img src={GithubIcon} className="linkedin-logo" alt="Github Social Logo" />
                <img src={DribbbleIcon} className="linkedin-logo" alt="Dribbble Social Logo" />
                <img src={MailIcon} className="linkedin-logo" alt="Email Icon" />
              </div>
            </div>
        </Container>
    </div>
  )
}

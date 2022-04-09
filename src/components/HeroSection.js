import Container from 'react-bootstrap/Container';
import linkedinIcon from '../icons/icon-linkedin.svg';
import githubIcon from '../icons/icon-github.svg';
import dribbbleIcon from '../icons/icon-dribbble.svg';
import mailIcon from '../icons/icon-mail.svg';
import './HeroSection.scss';

export default function HeroSection() {
  return (
    <div className='HeroSection'>
        <Container>
            <div className="inner-content">
              <h1>Justin Tew</h1>
              <h2>Frontend Developer</h2>
              <div className='icon-section'>
                <img src={linkedinIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
                <img src={githubIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
                <img src={dribbbleIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
                <img src={mailIcon} className="linkedin-logo" alt="LinkedIn Social Logo" />
              </div>
            </div>
        </Container>
    </div>
  )
}

import Container from 'react-bootstrap/Container';
import linkedinIcon from '../assets/icon-linkedin.svg';
import githubIcon from '../assets/icon-github.svg';
import dribbbleIcon from '../assets/icon-dribbble.svg';
import mailIcon from '../assets/icon-mail.svg';
import './HeroSection.scss';

export default function HeroSection() {
  return (
    <div className='hero-section pos-rel'>
        <Container>
            <div className="inner-content">
              <h1>justin tew</h1>
              <h2>Frontend Engineer</h2>
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

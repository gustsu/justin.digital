import Container from 'react-bootstrap/Container';
import IconBlock from '../components/IconBlock';

import './HeroSection.scss';

export default function HeroSection() {
  return (
    <div className='hero-section pos-rel' id="hero-section">
        <Container>
            <div className="inner-content">
              <h1>justin tew</h1>
              <h2>Frontend Engineer</h2>
              <IconBlock />
            </div>
        </Container>
    </div>
  )
}

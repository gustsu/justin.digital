import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Subheader from  "../components/Subheader";
import './AboutSection.scss';
import AboutImage from '../assets/me.png';

export default function AboutSection() {
  return (
    <div className='about-section pos-rel' id="about-section">
        <Container>
            <Subheader text="About Me"/>
            <Row>
              <Col xs={12} md={6}>
                <p>Justin is a Frontend Engineer, Founder, and Pizza Connoisseur from Spokane, Washington.</p>
                <p>He has been writting code for over 10 years and has been a professional Developer for the last 6 years.</p>
                <p>When he isn't behind the keyboard you can find him working on his reef tank, flying drones, cooking pizza and playing video games.</p>
              </Col>
              <Col xs={12} md={6}>
                <div className="image-container">
                  <img src={AboutImage} className="about-image" alt="Justin Tew" />
                </div>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

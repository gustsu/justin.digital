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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mattis urna, a egestas enim.  </p>
                <p>Fusce pretium nibh at neque malesuada congue. Integer ac massa commodo, pretium massa eget, feugiat arcu. Suspendisse vel elit volutpat sem fermentum aliquet. Phasellus quis nibh ut erat venenatis imperdiet ut at orci.</p>
                <p>Donec sit amet nisl ullamcorper, imperdiet turpis tincidunt, faucibus ipsum. Nam quis molestie leo, ac fermentum urna. Donec lobortis sit amet libero ac rhoncus. </p>
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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Subheader from  "../components/Subheader";
import './ProjectSection.scss';

export default function ProjectSection() {
  return (
    <div className='project-section pos-rel'>
        <Container>
            <Subheader text="Projects"/>
            <Row>
              <Col xs={12} md={6}>
                  test
              </Col>
              <Col xs={12} md={6}>
                  test2
              </Col>
            </Row>
        </Container>
    </div>
  )
}

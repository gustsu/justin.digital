import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrowIcon from '../assets/icon-arrow.svg';
import './Project.scss';

export default function Project() {
  return (
      <div class="project">
        <Row>
          <Col xs={12} md={9}>
            <img src="https://via.placeholder.com/2000x1000.png"/>
          </Col>
          <Col xs={12} md={3}>
            <a href="#" class="project-btn">
              <img src={arrowIcon} className="project-btn-arrow" />
            </a>
          </Col>
        </Row>
        <Row className="lower-row">
          <Col xs={12} md={6}>
            <div class="lower-row-container">
              <h1>test</h1>
              <p>lorem</p>
            </div>
          </Col>
        </Row>
      </div>
  )
}

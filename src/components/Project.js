import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrowIcon from '../assets/icon-arrow.svg';
import './Project.scss';

export default function Project(props) {
  return (
      <div className={`project ${props.reverse ? "reverse" : ""}`}>
        <Row>
          <Col xs={12} lg={9}>
            <img src="https://via.placeholder.com/2000x1000.png" alt="test"/>
          </Col>
          <Col xs={12} lg={3}>
            <a href="http://google.com" className="project-btn">
              <img src={arrowIcon} className="project-btn-arrow" alt="arrow"/>
            </a>
          </Col>
        </Row>
        <Row className="lower-row">
          <Col xs={12} lg={6}>
            <div className="lower-row-container">
              <h1>Spoon & Leaf</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies magna eget dolor tincidunt, at consectetur neque eleifend. Nullam eleifend convallis felis id maximus. </p>
            </div>
          </Col>
        </Row>
      </div>
  )
}

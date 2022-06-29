import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrowIcon from '../assets/icon-arrow.svg';
import './Project.scss';

export default function Project(props) {
  return (
      <div className={`project ${props.reverse ? "reverse" : ""}`}>
        <Row>
          <Col xs={12} lg={9}>
            <img src={props.image} alt="test"/>
          </Col>
          <Col xs={12} lg={3}>
            <a href={props.link} target="_blank" rel="noreferrer" className="project-btn">
              <img src={arrowIcon} className="project-btn-arrow" alt="arrow"/>
            </a>
          </Col>
        </Row>
        <Row className="lower-row">
          <Col xs={12} lg={6}>
            <div className="lower-row-container">
              <h3>{props.name}</h3>
              <p>{props.desc}</p>
            </div>
          </Col>
        </Row>
      </div>
  )
}

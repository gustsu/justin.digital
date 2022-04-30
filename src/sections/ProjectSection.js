import Container from 'react-bootstrap/Container';
import Project from "../components/Project";
import Subheader from  "../components/Subheader";
import './ProjectSection.scss';

export default function ProjectSection() {
  return (
    <div className="project-section pos-rel" id="project-section">
        <Container>
            <Subheader text="Projects"/>
            <Project />
            <Project />
            <Project />
            <Project />
        </Container>
    </div>
  )
}

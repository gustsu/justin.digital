import Container from 'react-bootstrap/Container';
import Project from "../components/Project";
import Subheader from  "../components/Subheader";
import CheckMeowtImage from '../assets/project-checkmeowt.png';
import './ProjectSection.scss';

export default function ProjectSection() {
  return (
    <div className="project-section pos-rel" id="project-section">
        <Container>
            <Subheader text="Projects"/>
            <Project 
              name="Check Meowt"
              image={CheckMeowtImage}
              link="https://github.com/gustsu/check-meowt"
              desc="Check Meowt is a simple open source image gallery of cat photos. Users can submit pull requests to add their cats to the gallery. It was created for hacktoberfest 2019."
            />
            <Project 
              reverse
              name="CoinPrice"
              image="https://via.placeholder.com/2000x1000.png"
              link="http://google.com"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies magna eget dolor tincidunt, at consectetur neque eleifend. Nullam eleifend convallis felis id maximus. "
            />
            <Project 
              name="Spoon"
              image="https://via.placeholder.com/2000x1000.png"
              link="http://google.com"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies magna eget dolor tincidunt, at consectetur neque eleifend. Nullam eleifend convallis felis id maximus. "
            />
            <Project
              reverse 
              name="Spoon"
              image="https://via.placeholder.com/2000x1000.png"
              link="http://google.com"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies magna eget dolor tincidunt, at consectetur neque eleifend. Nullam eleifend convallis felis id maximus. "
            />
        </Container>
    </div>
  )
}

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Resume from '../assets/justintew-resume.pdf';
import './NavBar.scss';

export default function NavBar() {
  return (
    <Navbar className="my-nav-bar" expand="lg">
        <Container>
            <Navbar.Brand href="#hero-section">justin.digital</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#about-section">About</Nav.Link>
                    <Nav.Link href="#project-section">Projects</Nav.Link>
                    <Nav.Link href="#contact-section">Contact</Nav.Link>
                    <Nav.Link href={Resume} target="_blank" rel="noreferrer">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

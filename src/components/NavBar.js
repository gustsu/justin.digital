import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.scss';

export default function NavBar() {
  return (
    <Navbar className="my-nav-bar" expand="lg">
        <Container>
            <Navbar.Brand href="#home">justin.digital</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

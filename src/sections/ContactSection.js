import Subheader from  "../components/Subheader";
import IconBlock from '../components/IconBlock';
import ContactForm from '../components/ContactForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactSection.scss'


export default function ContactSection() {
  return (
    <div className='contact-section pos-rel' id="contact-section">
        <Container>
            <Subheader text="Contact Me"/>
            <Row>
                <Col xs={12} md={4}>
                    <p>Connect With Me</p>
                    <IconBlock />
                </Col>
                <Col xs={12} md={8}>
                    <p>Send Me A Message</p>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

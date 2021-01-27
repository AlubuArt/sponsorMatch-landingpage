import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'



const Footer = () => {

    return (

        <Container fluid className="footer-container">
            <Row>
                <Col>
                    <p>copyright 2021 @Sponsormatch </p>
                </Col>
            </Row>
        </Container>

    )

}

export default Footer;
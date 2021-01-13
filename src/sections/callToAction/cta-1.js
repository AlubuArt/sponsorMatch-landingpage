import react from 'react';
import './cta.css' ;
import {Row, Col, Button, Container, Image} from 'react-bootstrap';
import heroImage from '../../media/sponsormatch_landingPage_-desktop.png';
import { CTAText } from '../../text/text.js';


const CTA1 = () => {


    return (
        <Container fluid>
            <Row>
                <Col className="CTA-header">
                <h2>Prøv platformen idag! <br></br>
                Vi hjælper med alt det praktiske.</h2>
                </Col>
            </Row>
            <Row>
                <Col className="CTA-list">
                    <p>- oprettelse af jeres eksisterende sponsorer</p>
                    <p>- Flot specialdesign sponsortilbud skabalon</p>
                    <p>- Personlig gennemgang af platformen med jer</p>
                    <p>- Oprettelse af foreningen og overførelse af eksisterende sponsorkartotek mm. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={heroImage} className="img-desktop"></Image>
                    
                </Col>
            </Row>
            <Row>
                <Col className="CTA-text">
                    <h2>{CTAText}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="hero-button">Prøv SponsorMatch - GRATIS</Button>
                </Col>
            </Row>
        </Container>
    )

}


export default CTA1;

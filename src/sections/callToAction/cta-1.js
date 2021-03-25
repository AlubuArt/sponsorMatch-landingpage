import react from 'react';
import './cta.css' ;
import {Row, Col, Button, Container, Image} from 'react-bootstrap';
import heroImage from '../../media/sponsormatch_landingPage_-desktop.png';
import { CTAText } from '../../text/text.js';
import './cta.css';



const CTA1 = () => {


    return (
        <Container fluid>
            <Row>
                <Col lg="6" className="CTA-header">
                    <h2>Prøv platformen idag! <br></br>
                    Vi hjælper med alt det praktiske.</h2>
                
                <div className="CTA-list">
                    <p>- Oprettelse af jeres eksisterende sponsorer</p>
                    <p>- Flot specialdesign sponsortilbud skabalon</p>
                    <p>- Personlig gennemgang af platformen med jer</p>
                    <p>- Oprettelse af foreningen og overførelse af <br></br>eksisterende sponsorkartotek mm. </p>
                </div>
                </Col>
            
            
                <Col lg="6" className="CTA-text">
                    <Image src={heroImage} className="img-desktop-cta"></Image>
                
                    <h2>{CTAText}</h2> 
                    <Button className="hero-button">Opret forening gratis</Button>
                </Col>
            
                   
               
                
            </Row>
            
                
            
        </Container>
    )

}


export default CTA1;

import React from 'react';
import { Container, Col, Row, Button, Image} from 'react-bootstrap';
import {ValueProp1, UdvikletTil, ValueProp2, ValueProp3, ValueProp4, ValueProp5, ValueProp6} from '../../text/text.js'
import './functions-section.css';
import PictureWithHands from '../../media/AdobeStock_192905801.jpeg'
import heroImage from '../../media/sponsormatch_landingPage_-desktop.png';
import FunctionsImage from '../../media/liste_af_funktioner.png';
import Icon1 from '../../media/contact-form-icon.png';
import Icon2 from '../../media/education-icon.png';
import Icon3 from '../../media/event-icon.png';
import Icon4 from '../../media/community-icon.png';



const FunctionsSection = () => {


    return (
        <Container fluid>
            <Row className="vp-1">
                <Col>
                    <h2>{ValueProp1}</h2>
                    <h2>{UdvikletTil}</h2>
                    <h1>breddeforeninger</h1>

                </Col>
            </Row>
            <Row >
                <Col>
                    <Image src={PictureWithHands} className="img-hands" alt="hands"></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2 className="vp-2">{ValueProp2}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={FunctionsImage} className="list-of-functions"></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={heroImage} className="img-desktop"></Image>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="hero-button">Prøv SponsorMatch - GRATIS</Button>
                </Col>
            </Row>
            <Row>
                <Col className="vp-icons-col">
                    <Image src={Icon1} className="vp-icons"></Image>
                    <h2>{ValueProp3}</h2>
                    <Image src={Icon2} className="vp-icons"></Image>
                    <h2>{ValueProp4}</h2>
                    <Image src={Icon3} className="vp-icons"></Image>
                    <h2>{ValueProp5}</h2>
                    <Image src={Icon4} className="vp-icons"></Image>
                    <h2>{ValueProp6}</h2>

                </Col>
            </Row>
            <Row>
                <Col className="functions-section-end-text">
                    <h1>sammen sikre vi foreningsdanmark</h1>
                </Col>
            </Row>

                
            
            
            
                
        </Container>
    )
}

export default FunctionsSection;
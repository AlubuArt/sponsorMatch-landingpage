
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import heroImage from '../../media/sponsormatch_landingPage_-desktop.png';
import FunctionsImage from '../../media/liste_af_funktioner.png';




const ValueProp3 =() => {

    return (
        <Container fluid className="valueProp3" >
           <Row className="vp-3">
                <Col lg="6">
                    <Image src={FunctionsImage} className="list-of-functions"></Image>
                </Col>
            
                <Col lg="6">
                    <Image src={heroImage} className="img-desktop"></Image>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="hero-button">Opret forening gratis</Button>
                </Col>
            </Row>

               
        </Container>
    )
}

export default ValueProp3;

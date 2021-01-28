import react from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {ValuePropText2} from '../../text/text.js'
import PictureWithHands from '../../media/AdobeStock_192905801.jpeg'




const ValueProp2 =() => {

    return (
        <Container fluid  className="valueProp2">
           <Row className="vp-2">
                    <Col>
                        <Image src={PictureWithHands} className="img-hands" alt="hands"></Image>
                    </Col>
                
                    <Col >
                        <h2 >{ValuePropText2}</h2>
                    </Col>
            </Row>
               
        </Container>
    )
}

export default ValueProp2;

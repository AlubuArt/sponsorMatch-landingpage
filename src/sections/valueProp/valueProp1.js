import react from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {UdvikletTil, ValuePropText1} from '../../text/text.js'




const ValueProp1 =() => {

    return (
        <Container fluid className="valueProp1" >
            <Row >
                <Col className="vp-1" >
                    <h2>{ValuePropText1}</h2>
                    <h2>{UdvikletTil}</h2>
                    <h1>breddeforeninger</h1>

                </Col>
            </Row>
        </Container>
    )
}

export default ValueProp1;

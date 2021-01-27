import react from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './om-os.css';
import profilePeter from  '../../media/profilePIctureHeader.png';
import {ProfileTextJacob, ProfileTextPeter, ProfileTextKristoffer} from '../../text/text.js'




const OmOs = () => {


    return (

        <Container fluid className="om-os-section"> 
            <Row >
                <Col className="om-os-container">
                    <h1>
                        om teamet
                    </h1>
                    <h2>og hvorfor vi kan styrke foreningsdanmark</h2>
                </Col>
            </Row>
            <Row>
                <Col className="profile-pictures">
                    <img  src={profilePeter} alt=""></img>
                    < h2 className="profile-title">Peter Overby, Co-founder & CEO</h2>
                    <p className="profile-description">{ProfileTextPeter}</p>
               
                    <img  src={profilePeter} alt=""></img>
                    < h2 className="profile-title">Jacob Christensen, Co-founder & CTO</h2>
                    <p className="profile-description">{ProfileTextJacob}</p>
                
                    <img  src={profilePeter} alt=""></img>
                    < h2 className="profile-title">Kristoffer, Co-founder & Account Manager</h2>
                    <p className="profile-description">{ProfileTextKristoffer}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button className="hero-button">Kontakt os for at høre nærmere</Button>
                   
                </Col>
            </Row>

        </Container>
    )
}

export default OmOs;
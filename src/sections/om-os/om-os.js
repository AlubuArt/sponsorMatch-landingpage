import react from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './om-os.css';
import profilePeter from  '../../media/profilePIctureHeader.png';





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
                    <p className="profile-description">Med flere års erfaring fra DBU som klubudvikler og klubkonsulent, har Peter fingeren på pulsen og er en rigtig foreningsmand</p>
               
                    <img  src={profilePeter} alt=""></img>
                    < h2 className="profile-title">Jacob Christensen, Co-founder & CTO</h2>
                    <p className="profile-description">Med flere års erfaring fra DBU som klubudvikler og klubkonsulent, har Peter fingeren på pulsen og er en rigtig foreningsmand</p>
                
                    <img  src={profilePeter} alt=""></img>
                    < h2 className="profile-title">Kristoffer, Co-founder & Account Manager</h2>
                    <p className="profile-description">Med flere års erfaring fra DBU som klubudvikler og klubkonsulent, har Peter fingeren på pulsen og er en rigtig foreningsmand</p>
                </Col>
            </Row>
        </Container>
    )
}

export default OmOs;
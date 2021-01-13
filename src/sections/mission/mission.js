import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {MissionText} from '../../text/text.js';
import Logo from '../../media/logo_med_tekst_hvid_200.png';
import './mission.css';






const Mission = () => {

    return (
        <Container fluid>
            <Row className="mission-container">
                <Col >
                    <img className="sponsormatch-logo" src={Logo} alt="sponsormatch logo hvid"></img>
                    <h2>{MissionText}</h2>
                </Col>
            </Row>
        </Container>
        
        
    )

}

export default Mission;

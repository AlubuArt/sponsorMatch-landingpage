import React from 'react';
import { Link } from 'react-scroll'
import {Navbar, Nav, Button, Row, Col, Container} from 'react-bootstrap';

import './header.css';

import logo from '../../media/sponsormatch_logo_navn_100px.png';







const LandingPageHeader = () => {

    return (
        <div className="main">
            <Navbar fluid  fixed="top" className="nav">
                <Col xs="2">
                    <Navbar.Brand  sm="2"as="IMG" src={logo}>Logo</Navbar.Brand>
                </Col>
                <Col xs="8">
                    <Nav> 
                        <Link to="functions-section" spy={true} smooth={true} offset={-50} duration={500} >Platformen</Link>
                        <Link to="mission-section" spy={true} smooth={true} offset={-50} duration={500}>Vores Mission</Link>
                        <Link to="om-os-section" spy={true} smooth={true} offset={0} duration={500}>Om Os</Link>
                    
                    </Nav>
                </Col>
                <Col xs="2">
                    <Button>Prøv Gratis</Button>
                </Col>
            </Navbar>
       
            </div>
                
                        
    )
}

export default LandingPageHeader;

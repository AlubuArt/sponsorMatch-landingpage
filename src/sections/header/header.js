import React from 'react';
import { Link } from 'react-scroll'
import {Navbar, Nav, Button, Row, Col, Container} from 'react-bootstrap';

import './header.css';

import logo from '../../media/sponsormatch_logo_navn_100px.png';







const LandingPageHeader = () => {

    return (
        <div className="main">
            <Navbar fluid  sticky="top" className="nav">
                <Col xs="2">
                    <Navbar.Brand  sm="2"as="IMG" src={logo}>Logo</Navbar.Brand>
                </Col>
                <Col xs="8">
                    <Nav> 
                        <Nav.Link>Platformen</Nav.Link>
                        <Nav.Link>Vores Mission</Nav.Link>
                        <Nav.Link>Om Os</Nav.Link>
                    
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

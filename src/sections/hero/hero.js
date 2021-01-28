import React from 'react';
import {Jumbotron, Button, Col} from 'react-bootstrap'
import './hero.css';
import heroImage from '../../media/sponsormatch_landingPage_-desktop.png';



const Hero = () => {


    return (
        <Jumbotron fluid="true">
            <Col className="hero-text" xs="12" lg="5">
                <div >
                    <h2>Vi hjælper breddeforeninger til flere indtægter med DK´s eneste</h2>
                    <h1>TOTALLØSNING</h1>
                    <h2>der gør sponsorarbejdet lettere ved at samle alt et sted!</h2>
                </div>
                <div>
                    <p>Kom igang med det samme helt gratis -  og få med det samme 3 forslag til nye sponsorer som passer ind i din forening</p>
                </div>  
                <Button className="hero-button">Prøv SponsorMatch - GRATIS </Button>
              
            </Col>
            <Col>
                <div className="hero-img">
                    <img src={heroImage} className="hero-img" alt=""></img>
                </div>
                
            </Col>
           
        </Jumbotron>
    )
}

export default Hero;

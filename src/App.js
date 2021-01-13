import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageHeader from './sections/header/header.js';
import FunctionsSection from './sections/functions/functions-section.js'
import Hero from './sections/hero/hero.js';
import Misson from './sections/mission/mission.js';
import CTA1 from './sections/callToAction/cta-1.js';

import {Container } from 'react-bootstrap'



function App() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <FunctionsSection />
      <Misson />
      <CTA1 />
    </div>
    
    
  );
}

export default App;

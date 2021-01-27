import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageHeader from './sections/header/header.js';
import FunctionsSection from './sections/functions/functions-section.js'
import Hero from './sections/hero/hero.js';
import Misson from './sections/mission/mission.js';
import OmOs from './sections/om-os/om-os.js';
import CTA1 from './sections/callToAction/cta-1.js';
import Footer from './sections/footer/footer.js';





function App() {
  return (
    <>
      <LandingPageHeader />
      <Hero />
      <FunctionsSection />
      <Misson />
      <CTA1 />
      <OmOs />
      <Footer />
    </>
    
    
  );
}

export default App;

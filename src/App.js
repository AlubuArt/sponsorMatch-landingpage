import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageHeader from './sections/header/header.js';
import FunctionsSection from './sections/functions/functions-section.js'
import Hero from './sections/hero/hero.js';
import Misson from './sections/mission/mission.js';
import OmOs from './sections/om-os/om-os.js';
import CTA1 from './sections/callToAction/cta-1.js';
import Footer from './sections/footer/footer.js';
import ValueProp1 from './sections/valueProp/valueProp1.js';
import ValueProp2 from './sections/valueProp/valueProp2.js';
import ValueProp3 from './sections/valueProp/valueProp3.js';
import ValueProp4 from './sections/valueProp/valueProp4.js';


function App() {
  return (
    <>
      <LandingPageHeader />
      <Hero />
      <ValueProp1 />
      <ValueProp2 />
      <ValueProp4 />
      <FunctionsSection />
      <ValueProp3 />      
      <Misson />
      <CTA1 />
      <OmOs />
      <Footer />
    </>
       
  );
}

export default App;

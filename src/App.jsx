import Test from "./Test";
import "./app.scss";
//import Contact from "./components/contact/Contact"; <Contact />
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
//import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
//import Services from "./components/services/Services";
import { Skills } from "./components/skills/Skils";
 
 
const App = () => {
  return (
    <div>
     
        <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
    <section id="Skills"  >
    <Skills/>
    
    </section>
    {/*<section id="Services">
     
       {/*<Parallax type="services" />
      </section>
    



     * <section>
        *<Services />
      </section>
       <section id="portfolio">
  <Portfolio />
  </section>
       <section id="Portfolio">
     
  </section>
      
      */}


     
  <div id="portfolio">
  <Portfolio />
    </div> 
 
     
     
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> 
    <Contact/>
     <section id="Contact">
      <MailList/>
      </section>
    */}
   
   
    
    </div>
  );
};

export default App;

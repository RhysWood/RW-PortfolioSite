import React from "react";
import '../styles/index.scss';
import Lighthouse from "./Lighthouse/Lighthouse";
import Goat from "./Goat/Goat";
import Vessel from "./Vessel/Vessel";
import Contact from "./Contact/Contact";
import Welcome from "./Welcome/Welcome";
import NavBar from "./Navigation/navbar";
import Footer from "./Navigation/Footer";

function Splash() {

    return ( 
      <>
      <NavBar />
      <div className="wrapperparent">
        <div className="section">
          <Welcome />
        </div>
        
        <div id="lighthouse" className="section">
          <Lighthouse />
        </div>
        
        <div id="goat" className="section">
          <Goat />
        </div>
        
        <div id="vessel" className="section">
          <Vessel />
        </div>
        
        <div id="contact" className="section">
          <Contact />
        </div>
      </div>

        <Footer />
      </>
     );
}

export default Splash;
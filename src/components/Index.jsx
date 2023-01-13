import React from "react";
import NavBar from "./Navigation/NavBar";
import '../styles/welcome.css';
import Lighthouse from "./Lighthouse/Lighthouse";
import Goat from "./Goat/Goat";
import Vessel from "./Vessel/Vessel";
import Contact from "./Contact/Contact";
import Welcome from "./Welcome/Welcome";

function Splash() {

    return ( 
      <>
      <NavBar />
      <div className="wrapperparent">
        <div className="section">
          <Welcome />
        </div>
        
        <div id="lighthouse" className="section bg-black">
          <Lighthouse />
        </div>
        
        <div id="goat" className="section bg-white">
          <Goat />
        </div>
        
        <div id="vessel" className="section bg-black">
          <Vessel />
        </div>
        
        <div id="contact" className="section bg-white">
          <Contact />
        </div>
      </div>

        
      </>
     );
}

export default Splash;
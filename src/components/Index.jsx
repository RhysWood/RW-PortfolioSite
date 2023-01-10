import React from "react";
import Navbar from "./Navigation/navbar";
import '../styles/welcome.css';
import Lighthouse from "./Lighthouse/Lighthouse";
import Goat from "./Goat/Goat";
import Vessel from "./Vessel/Vessel";
import Contact from "./Contact/Contact";

function Welcome() {


    return ( 
      <>
      <Navbar />
      <div className="wrapperparent">
        <div className="section">
        <div className="wrapper">
              <div className="typing-demo">
                THIS IS A PORTFOLIO BY RHYS WOOD.
              </div>
          </div>
        </div>
        
        <div id="lighthouse" className="section bg-blue">
          <Lighthouse />
        </div>
        
        <div id="goat" className="section bg-green">
          <Goat />
        </div>
        
        <div id="vessel" className="section">
          <Vessel />
        </div>
        
        <div id="contact" className="section bg-blue">
          <Contact />
        </div>
      </div>

        
      </>
     );
}

export default Welcome;
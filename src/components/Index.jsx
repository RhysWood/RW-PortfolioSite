import React from "react";
import Navbar from "./Navigation/navbar";
import '../styles/welcome.css';
import Lighthouse from "./Lighthouse/Lighthouse";

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
        
        <div className="section bg-blue">
          <Lighthouse />
        </div>
        
        <div className="section bg-green">
          Content 3
        </div>
        
        <div className="section">
          Content 4
        </div>
        
        <div className="section bg-blue">
          Content 5
        </div>
      </div>

        
      </>
     );
}

export default Welcome;
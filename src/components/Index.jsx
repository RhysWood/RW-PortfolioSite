import React from "react";
import ProBoneO from "./ProBoneO/ProBoneO";
import Navbar from "./Navigation/navbar";
import '../styles/welcome.css';

function Welcome() {


    return ( 
      <>
      <Navbar />
      <div className="wrapperparent">
        <div className="section">
        <div className="wrapper">
              <div className="typing-demo">
                This is a portfolio by Rhys Wood.
              </div>
          </div>
        </div>
        
        <div className="section bg-blue">
          <ProBoneO />
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
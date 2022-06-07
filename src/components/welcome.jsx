import React from "react";
import ProBoneO from "./ProBoneO/ProBoneO";
import '../styles/welcome.css';

function Welcome() {
    return ( 
      <>

      <div class="wrapperparent">
        <div class="section">
        <div class="wrapper">
              <div class="typing-demo">
                This is a portfolio by Rhys Wood.
              </div>
          </div>
        </div>
        
        <div class="section bg-blue">
          <ProBoneO />
        </div>
        
        <div class="section bg-green">
          Content 3
        </div>
        
        <div class="section">
          Content 4
        </div>
        
        <div class="section bg-blue">
          Content 5
        </div>
      </div>

        
      </>
     );
}

export default Welcome;
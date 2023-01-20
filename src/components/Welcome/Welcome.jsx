import React from "react";
import "./welcome.scss";

function Welcome() {

  return (
    <div className="block">
      <div className="wrapper">
        <div className="top-right">
            <h1>Web Developer</h1>
        </div>
        <div className="bottom-left">
            <h1>Rhys<br></br> Wood</h1>
        </div>
      </div>

      <div className="intro-wrapper">
        <div className="intro-text">
          <p>
          Full-Stack developer based in Vancouver, BC. Passionate for creating dynamic, user-friendly websites and applications. 
          Strong background in both front-end and back-end technologies. Able to bring ideas to life from start to finish. 
          Take a look at my work and let's connect to discuss how I can help bring your next project to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

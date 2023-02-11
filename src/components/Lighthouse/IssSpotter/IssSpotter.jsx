import React from "react";
import "./iss.scss";
import Fly from "./Fly";
import iss from '../../../imgs/iss.png'


function IssSpotter() {
  return (
    <>
      <Fly />
      <div className="iss-container" data-scroll-section>
        <h1>🌎</h1>
      <img src={iss} alt="react logo" />
        <p>
          The ISS Spotter project taught me how to make, manipulate & itegrate
          API requests. The mini app takes in a users IP address using ipify,
          uses this IP address to find the users location using FreeGeoIP and
          passes it into the iss-pass url request.
        </p>
      </div>
    </>
  );
}

export default IssSpotter;

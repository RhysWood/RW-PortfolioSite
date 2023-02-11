import React from "react";
import "./iss.scss";
import Fly from "./Fly";

function IssSpotter() {
  return (
    <>
      <Fly />
      <div className="iss-container" data-scroll-section>
        <div className="block">
          <div className="wrapper">
            <div className="top-right">
              <p>
                The ISS Spotter project taught me how to make, manipulate &
                itegrate API requests. The mini app takes in a users IP address
                using ipify, uses this IP address to find the users location
                using FreeGeoIP and passes it into the iss-pass url request.
              </p>
            </div>
            <div className="bottom-left">
              <h1>
                Rhys<br></br> Wood
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssSpotter;

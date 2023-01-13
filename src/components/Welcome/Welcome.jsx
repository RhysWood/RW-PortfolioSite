import React, { useEffect, useRef } from "react";
import "./welcome.scss";

function Welcome() {
    const element = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        element.current.className = "fade-in";
        console.log("fade in");
      }, 3000);
    }, []);
  return (
    <>
      <div className="wrapper">
        <div className="top-right">
            <h1>Full-Stack Web Developer</h1>
        </div>
        <div className="bottom-left">
            <h1>Rhys Wood</h1>
        </div>
        {/* <div ref={element} className="gone">
            <h1 className="welcome">Welcome</h1>
        </div> */}
      </div>
    </>
  );
}

export default Welcome;

import React, { useEffect } from "react";
import gsap from 'gsap';
import "./welcome.scss";
import SplitText from '../utils/Split3.min.js';

function Welcome() {

  useEffect(() => {
    const split = new SplitText(".block", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
 // eslint-disable-next-line 
    const splitParent = new SplitText(".block", {
      type: "lines",
      linesClass: "lineParent",
    });
    
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    })
  }, []);


  return (
    <div className="welcome"
      data-scroll-section  
    >
    <div className="block">
      <div className="wrapper">
        <div className="top-right">
            <h1>Web Developer</h1>
        </div>
        <div className="bottom-left">
            <h1>Rhys<br></br> Wood</h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;

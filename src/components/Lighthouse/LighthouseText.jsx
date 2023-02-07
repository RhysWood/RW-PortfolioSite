import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../hooks/useOnScreen';
import "./lighthouse.scss";

function LighthouseText() {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if(onScreen) {
            setReveal(onScreen);
        }
    }, [onScreen]);

  useEffect(() => {
    if(reveal) {
    const split = new SplitText("#para", {
      type: "lines"
    });
    
    gsap.to(split.lines, {
      duration: 1,
      y: -20,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    })
    }
  }, [reveal]);

    return(
        <div className={cn("intro-wrapper-title", {'is-reveal' : reveal})} data-scroll-section>
        <div className="intro-text-title">
          <p ref={ref} id="para" className={cn({'is-reveal' : reveal})}>
          Graduated from Lighthouse Labs with a Full Stack Web Development diploma. 
          Hands-on training in front-end and back-end tech. Comprehensive curriculum with real-world projects. 
          Supportive instructors and strong peer network. Confident in my web development skills for future career growth.
          </p>
        </div>
      </div>
    )
}

export default LighthouseText;

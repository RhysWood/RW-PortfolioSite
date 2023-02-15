import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';
import "./iss.scss";
import Fly from "./Fly";


function IssSpotter() {
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
  const split = new SplitText("#para3", {
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


  return (
    <>

      <div className={cn("spotter-wrapper-title", {'is-reveal' : reveal})} data-scroll-container>
        <div className='spotter-moving-title'>
          <Fly />
        </div>
        <div className="spotter-text-title">
          <p ref={ref} id="para3" className={cn({'is-reveal' : reveal})} data-scroll-section>
          <span>Next pass at Fri Feb 11 2023 12:01:08 GMT+0000 (Coordinated Universal Time) for 224 seconds!</span>
          <span>Next pass at Fri Feb 11 2023 22:07:48 GMT+0000 (Coordinated Universal Time) for 705 seconds!</span>
          <span>Next pass at Sat Feb 12 2023 08:14:28 GMT+0000 (Coordinated Universal Time) for 477 seconds!</span>
          <span>Next pass at Sat Feb 12 2023 18:21:08 GMT+0000 (Coordinated Universal Time) for 176 seconds!</span>
          <span>Next pass at Sun Feb 13 2023 04:27:48 GMT+0000 (Coordinated Universal Time) for 456 seconds!</span>
          </p>
        </div>
      </div>
    </>
  );
}



export default IssSpotter;

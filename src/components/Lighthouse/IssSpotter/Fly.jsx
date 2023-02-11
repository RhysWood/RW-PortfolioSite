import React, {useRef, useState, useEffect} from 'react';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';

import "./fly.scss";

function Fly() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if(onScreen) {
        setReveal(onScreen);
    }
  }, [onScreen]);
    
    return(
      <div className='fly-container' data-scroll-container>
      <div ref ={ref} className={cn("my-wrap2", {'is-reveal' : reveal})} data-scroll-section="">
        <h1 className='iss-header'>ISS Spotter</h1>
          <span class="lerp-wrap2" data-scroll="">
            <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="9">🛰️</span>
          </span>
        </div>
    </div>
    )
}

export default Fly;
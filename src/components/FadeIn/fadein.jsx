import React, { useEffect, useRef } from 'react';
import './fadein.scss';

function FadeInComponent() {
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      element.current.classList.add('fade-in');
    }, 1000);
  }, []);

  return <div ref={element} />;
}

export default FadeInComponent;

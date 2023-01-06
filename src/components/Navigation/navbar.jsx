import React, { useEffect, useRef } from 'react';
import "../Navigation/nav.scss";

const Navbar = () => {
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      element.current.className = 'fade-in';
      console.log("fade in");
    }, 2000);
  }, []);
  return (
    <nav ref={element} className="gone">
      <div className="nav-wrapper">
      <div className="nav-child">Rhys Wood</div>
      <div className="nav-options">
        <div>Goat Creative Inc</div>
        <div>Lighthouse Labs</div>
        <div>Vessel Packaging</div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

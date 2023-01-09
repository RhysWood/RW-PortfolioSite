import React, { useEffect, useRef, useState } from "react";
import { MenuItems } from "./menuItems.jsx";
import "../Navigation/nav.scss";

const Navbar = () => {
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      element.current.className = "fade-in";
      console.log("fade in");
    }, 3000);
  }, []);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav ref={element} className="gone">
      <div className="nav-wrapper">
        <div className="nav-child">
          <a href="/">RHYSWOOD</a>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="nav-options">
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

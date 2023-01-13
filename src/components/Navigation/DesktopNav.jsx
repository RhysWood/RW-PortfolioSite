import React, { useEffect, useRef } from "react";
import { MenuItems } from "./menuItems.jsx";
import "../Navigation/nav.scss";

const DesktopNav = () => {
  const element = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      element.current.className = "fade-in";
      console.log("fade in");
    }, 0);
  }, []);

  return (
    <nav ref={element} className="gone">
      <div className="nav-wrapper">
        <div className="nav-child">
          <a href="/">RHYSWOOD</a>
        </div>
        <div className="nav-options">
          <ul className="nav-menu">
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

export default DesktopNav;

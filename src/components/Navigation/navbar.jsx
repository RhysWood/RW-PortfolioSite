import React from "react";
import "../Navigation/nav.scss";

const Navbar = () => {
  return (
    <>
      <nav class="flex">
        <div class="text-white font-bold text-xl">My App</div>
        <div class="flex space-x-3">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

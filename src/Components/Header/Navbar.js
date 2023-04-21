import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main-header">
      <div className="logo-header-box"></div>

      <div className="search-header-box"></div>

      <div className="info-lang-header-box">
        <div className="date-header"></div>

        <div className="lang-header"></div>
      </div>
    </div>
  );
}

export default Navbar;

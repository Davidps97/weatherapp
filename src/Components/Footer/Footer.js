import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="social-box">
        <span className="social-media-buttons"></span>
        <span className="social-media-button">
          <img
            alt="Instagram"
            src={process.env.PUBLIC_URL + "/instagram.svg"}
          ></img>
        </span>
        <span className="social-media-button">
          <img
            alt="Twitter"
            src={process.env.PUBLIC_URL + "/twitter.svg"}
          ></img>
        </span>
        <span className="social-media-button">
          <img alt="Github" src={process.env.PUBLIC_URL + "/github.svg"}></img>
        </span>
        <span className="social-media-button">
          <img alt="Figma" src={process.env.PUBLIC_URL + "/figma.svg"}></img>
        </span>
      </div>
      <div className="info-box">
        <div class="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div class="row">
          <p>MeteoCan © 2023 - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

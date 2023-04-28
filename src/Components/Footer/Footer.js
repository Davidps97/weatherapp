import React from "react";
import "./Footer.css";

function Footer({ companyName }) {
  return (
    <div className="main-footer">
      <div className="social-box">
        <span className="social-media-button">
          <a href="https://www.instagram.com" target="blank">
            <img
              alt="Instagram"
              src={process.env.PUBLIC_URL + "/instagram.svg"}
            />
          </a>
        </span>
        <span className="social-media-button">
          <a href="https://www.twitter.com" target="blank">
            <img alt="Twitter" src={process.env.PUBLIC_URL + "/twitter.svg"} />
          </a>
        </span>
        <span className="social-media-button">
          <a
            href="https://github.com/Davidps97/weatherapp/tree/dev"
            target="blank"
          >
            <img alt="Github" src={process.env.PUBLIC_URL + "/github.svg"} />
          </a>
        </span>
        <span className="social-media-button">
          <a href="https://www.figma.com/file/AdQqDi6JNV640DOEI0mGby/Meteo-Canarias?node-id=0-1&t=3qPzcdvJmB33YVqL-0" target="blank">
            <img alt="Figma" src={process.env.PUBLIC_URL + "/figma.svg"} />
          </a>
        </span>
      </div>
      <div className="info-box">
        <div class="row">
          <ul>
            <li>
              <p>Contact us</p>
            </li>
            <li>
              <p>Our Services</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Career</p>
            </li>
          </ul>
        </div>
        <div class="row">
          <p>{companyName} © 2023 - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

function Footer({ companyName }) {
  const language = useSelector((state) => state.language.value);

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
          <a
            href="https://www.figma.com/file/AdQqDi6JNV640DOEI0mGby/Meteo-Canarias?node-id=0-1&t=3qPzcdvJmB33YVqL-0"
            target="blank"
          >
            <img alt="Figma" src={process.env.PUBLIC_URL + "/figma.svg"} />
          </a>
        </span>
      </div>
      <div className="info-box">
        <div className="row">
          <ul>
            <li>
              <p>
                {language == "spanish" ? "Contacta con nosotros" : "Contact Us"}
              </p>
            </li>
            <li>
              <p>
                {language == "spanish" ? "Nuestros Servicios" : "Our Services"}
              </p>
            </li>
            <li>
              <p>
                {language == "spanish"
                  ? "Política de Privacidad"
                  : "Privacy Policy"}
              </p>
            </li>
            <li>
              <p>
                {language == "spanish"
                  ? "Términos y Condiciones"
                  : "Terms & Conditions"}
              </p>
            </li>
            <li>
              <p>{language == "spanish" ? "Empleo" : "Career"}</p>
            </li>
          </ul>
        </div>
        <div className="row">
          <p>
            {companyName} © 2023 -
            {language == "spanish"
              ? " Todos los derechos reservados"
              : " All rights reserved"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

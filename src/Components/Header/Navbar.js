import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [language, setLanguage] = useState("es"); // Inicialmente el idioma es español

  const changeLanguage = (event) => {
    setLanguage(event.target.value); // Actualiza el idioma cuando se cambia la selección
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(language, options);
  };

  return (
    <div className="main-header">
      <div className="logo-header-box">
        <img src={process.env.PUBLIC_URL + "/MeteoCant.PNG"} alt="MeteoIcon" />
      </div>

      <div className="search-header-box">
        <input className="search" />
      </div>

      <div className="info-lang-header-box">
        <div className="date-header">{getCurrentDate()}</div>

        <div className="lang-header">
          <label htmlFor="language-select">Elegir idioma:</label>
          <select
            id="language-select"
            value={language}
            onChange={changeLanguage}
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

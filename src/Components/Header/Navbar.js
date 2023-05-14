import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { changeLanguage } from "./language";
import { useSelector, useDispatch } from "react-redux";
import { changeIsland } from "./island";

function Navbar() {
  const dispatch = useDispatch();

  const changeLanguage_ = (event) => {
    dispatch(changeLanguage(event.target.value)); // Actualiza el idioma cuando se cambia la selección
  };

  const changeIsland_ = (event) => {
    dispatch(changeIsland(event.target.value));
  };

  const island = useSelector((state) => state.island.value);

  const language = useSelector((state) => state.language.value);

  const getCurrentDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(
      language === "spanish" ? "es" : "en",
      options
    );
  };

  return (
    <div className="main-header">
      <Link to="/home">
        <div className="logo-header-box">
          <img
            src={process.env.PUBLIC_URL + "/MeteoCant.PNG"}
            alt="MeteoIcon"
          />
        </div>
      </Link>

      <div className="search-header-box">
        <input className="search" onChange={changeIsland_} value={island} />
      </div>

      <div className="info-lang-header-box">
        <div className="date-header">{getCurrentDate()}</div>

        <div className="lang-header">
          <label htmlFor="language-select">
            {language === "spanish" ? "Elegir idioma: " : "Choose language: "}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={changeLanguage_}
          >
            <option value="spanish">
              {language === "spanish" ? "Español" : "Spanish"}
            </option>
            <option value="english">
              {language === "spanish" ? "Inglés" : "English"}
            </option>
          </select>
        </div>
        <div className="link_div">
          <Link to="/form" className="button-link">
          {language === "spanish" ? "Formulario" : "Form"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

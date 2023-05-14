import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import temperatures from "./temperatures.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const language = useSelector((state) => state.language.value);

  const island = useSelector((state) => state.island.value);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [selectedPlace, setSelectedPlace] = useState(temperatures[0]);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedPlace((prevPlace) => {
        const newPlace = {
          ...prevPlace,
          time: new Date().toLocaleTimeString(),
        };
        return newPlace;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const place = temperatures.find(
      (temp) => temp.place.toLowerCase() === island.toLowerCase()
    );
    if (place) {
      setSelectedPlace(place);
    }
  }, [island]);

  return (
    <div>
      <Navbar />
      <nav className="navigation">
        <button className="menu-btn" onClick={toggleMenu}>
          Menu
        </button>
        <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
          {temperatures.map((place) => (
            <li key={place.place}>
              <a href="#" onClick={() => handlePlaceClick(place)}>
                {place.place}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-home">
        <div className="main-temp-box">
          <div className="main-info-box">
            <div className="info-column">
              <div className="place-box">
                {selectedPlace.place} | {selectedPlace.time}
              </div>
            </div>
            <div className="info-row">
              <div className="degree-box">{selectedPlace.temperature}</div>
              <div className="icon-temp-box">
                <img src={selectedPlace.icon} alt="weather icon" />
              </div>
            </div>
          </div>
          <div className="temp-line-box">
            <div className="temp-info-box">
              <h3>
                {language === "spanish"
                  ? "Pronóstico por horas"
                  : "Time Forecast"}
              </h3>
              <Link to="/map">
                <button>
                  {language === "spanish"
                    ? "Ver mapa de Predicciones"
                    : "Show Forecast Map"}
                </button>
              </Link>
            </div>
            <div className="temp-mid-box">
              <div className="forecast-time">
                <div>{language === "spanish"
                    ? "Ahora"
                    : "Now"}</div>
                <div>{selectedPlace.temperature}</div>
                <div className="forecast-time-img-container">
                  <img src={selectedPlace.icon} alt="weather icon" />
                </div>
              </div>
              <div className="forecast-time">
                <div>12:00</div>
                <div>{selectedPlace.temperature}</div>
                <div className="forecast-time-img-container">
                  <img src={selectedPlace.icon} alt="weather icon" />
                </div>
              </div>
              <div className="forecast-time">
                <div>13:00</div>
                <div>{selectedPlace.temperature}</div>
                <div className="forecast-time-img-container">
                  <img src={selectedPlace.icon} alt="weather icon" />
                </div>
              </div>
              <div className="forecast-time">
                <div>14:00</div>
                <div>{selectedPlace.temperature}</div>
                <div className="forecast-time-img-container">
                  <img src={selectedPlace.icon} alt="weather icon" />
                </div>
              </div>
              <div className="forecast-time">
                <div>15:00</div>
                <div>{selectedPlace.temperature}</div>
                <div className="forecast-time-img-container">
                  <img src={selectedPlace.icon} alt="weather icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total-box">
          <div className="total-info-box">
            <div className="total-mid-box">
              <div className="total-small-box">
                <h2>{language === "spanish"
                    ? "Pronóstico"
                    : "Forecast"}</h2>
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/icoRain.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Lluvia: "
                    : "Rain: "} {selectedPlace.rain}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/thermo.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Temperatura: "
                    : "Temperature: "} {selectedPlace.temperature}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/sens.svg"}
                  alt="Pronóstico del tiempo"
                />
                 {language === "spanish"
                    ? "Sensación Térmica: "
                    : "Thermal sensation: "}{selectedPlace.feels_like}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/cloud-snow.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Nieve: "
                    : "Snow: "}{selectedPlace.snow}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/sky.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Estado del Cielo: "
                    : "Sky condition: "}{selectedPlace.sky}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/windy.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Viento: "
                    : "Wind: "}{selectedPlace.wind}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/humidity.svg"}
                  alt="Pronóstico del tiempo"
                />
                {language === "spanish"
                    ? "Humedad: "
                    : "Humidity: "}{selectedPlace.humidity}
              </div>
              <div className="total-small-box">
                <img
                  src={process.env.PUBLIC_URL + "/glasses.svg"}
                  alt="Pronóstico del tiempo"
                />
                UV: {selectedPlace.uv}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer companyName="MeteoCan" />
    </div>
  );
}

export default Home;

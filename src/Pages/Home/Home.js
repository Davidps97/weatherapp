import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import temperatures from "./temperatures.json";

function Home() {
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

  return (
    <div>
      <Navbar />
      <nav className="navigation">
        <ul>
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
                {selectedPlace.place} - {selectedPlace.time}
              </div>
            </div>
            <div className="info-row">
              <div className="degree-box">{selectedPlace.temperature}</div>
              <div className="icon-temp-box">
                <img src={selectedPlace.icon} alt="weather icon" />
              </div>
            </div>
          </div>
          <div className="temp-line-box"></div>
        </div>
        <div className="total-box">
          <div className="total-info-box">
            <h2>Pronostico</h2>
            <div className="total-mid-box">
              <div className="total-small-box">
                Lluvia: {selectedPlace.rain}
              </div>
              <div className="total-small-box">
                Temperatura: {selectedPlace.temperature}
              </div>
            </div>
            <div className="total-mid-box">
              <div className="total-small-box">
                Sensación Térmica: {selectedPlace.feels_like}
              </div>
              <div className="total-small-box">Nieve: {selectedPlace.snow}</div>
            </div>
            <div className="total-mid-box">
              <div className="total-small-box">
                Estado del Cielo: {selectedPlace.sky}
              </div>
              <div className="total-small-box">
                Viento: {selectedPlace.wind}
              </div>
            </div>
            <div className="total-mid-box">
              <div className="total-small-box">
                Humedad: {selectedPlace.humidity}
              </div>
              <div className="total-small-box">UV: {selectedPlace.uv}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

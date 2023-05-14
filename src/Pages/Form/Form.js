import database from "../../firebase";
import "./Form.css";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";

function Form() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rain, setRain] = useState("");
  const [wind, setWind] = useState("");
  const [places, setPlaces] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const db = getDatabase();
    if (editMode) {
      set(ref(db, "places/" + places[editIndex].city), {
        country,
        city,
        temperature,
        rain,
        wind,
      });
      setEditMode(false);
      setEditIndex(null);
    } else {
      set(ref(db, "places/" + city), {
        country,
        city,
        temperature,
        rain,
        wind,
      });
    }
    setCountry("");
    setCity("");
    setTemperature("");
    setRain("");
    setWind("");
  };

  const handleDelete = (index) => {
    const db = getDatabase();
    remove(ref(db, "places/" + places[index].city));
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setCountry(places[index].country);
    setCity(places[index].city);
    setTemperature(places[index].temperature);
    setRain(places[index].rain);
    setWind(places[index].wind);
  };

  useEffect(() => {
    onValue(ref(getDatabase(), "places"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const placesArray = Object.values(data);
        setPlaces(placesArray);
      } else {
        setPlaces([]);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form-container">
            <label>
              País:
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <label>
              Ciudad:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <label>
              Temperatura:
              <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <label>
              Lluvia:
              <input
                type="text"
                value={rain}
                onChange={(e) => setRain(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <label>
              Viento:
              <input
                type="text"
                value={wind}
                onChange={(e) => setWind(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <input
              type="submit"
              value={editMode ? "Guardar cambios" : "Enviar"}
              className="submit-button"
            />
          </form>
        </div>
        <div className="cards-wrapper">
          {places.length > 0 && (
            <div className="places-container">
              <h2>Lugares registrados:</h2>
              {places.map((place, index) => (
                <div key={index} className="place-item">
                  <p>
                    <strong>País:</strong> {place.country}
                  </p>
                  <p>
                    <strong>Ciudad:</strong> {place.city}
                  </p>
                  <p>
                    <strong>Temperatura:</strong> {place.temperature}
                  </p>
                  <p>
                    <strong>Lluvia:</strong> {place.rain}
                  </p>
                  <p>
                    <strong>Viento:</strong> {place.wind}
                  </p>
                  <button
                    onClick={() => handleEdit(index)}
                    className="edit-button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Form;

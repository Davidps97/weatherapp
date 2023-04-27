import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-openweathermap/leaflet-openweathermap.css";
import "leaflet-openweathermap";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Map.css";

const Map = () => {
  const [map, setMap] = useState(null);
  const [currentLayer, setCurrentLayer] = useState(null);

  useEffect(() => {
    if (map) {
      // Agrega la capa de lluvia al mapa
      const rainLayer = L.OWM.rain({
        appId: "d0901a819793be9ac2c66657ad323ef2",
        opacity: 0.5,
      });

      // Agrega la capa de velocidad del viento al mapa
      const windLayer = L.OWM.wind({
        appId: "d0901a819793be9ac2c66657ad323ef2",
        opacity: 0.5,
      });

      // Agrega las capas al control de capas
      const overlayMaps = {
        Precipitación: rainLayer,
        "Velocidad del viento": windLayer,
      };

      L.control.layers(null, overlayMaps).addTo(map);
      setCurrentLayer(rainLayer);
    }
  }, [map]);

  return (
    <div>
      <Navbar />
      <div className="map-container">
        <MapContainer
          center={[28.380602, -15.869722]}
          zoom={8}
          style={{ height: "66vh", width: "100%" }}
          whenCreated={setMap}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Map;

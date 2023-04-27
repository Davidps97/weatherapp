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
  const API_KEY = "d0901a819793be9ac2c66657ad323ef2";

  return (
    <div>
      <Navbar />
      <div className="map-container">
        <MapContainer
          center={[28.380602, -15.869722]}
          zoom={8}
          style={{ height: "66vh", width: "100%" }}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Lluvia">
              <TileLayer
                url={`https://{s}.tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                attribution='Map data © <a href="https://openweathermap.org">OpenWeatherMap</a>'
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Map;

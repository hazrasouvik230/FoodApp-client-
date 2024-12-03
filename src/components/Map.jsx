import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <div className="map-container">
      <div className="info-box">
        <h2>McDonald's</h2>
        <h3>South London</h3>
        <p className="address">Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p className="phone">
          <strong>Phone number:</strong> <br />
          <span>+934443-43</span>
        </p>
        <p className="website">
          <strong>Website:</strong>{" "}<br />
          <a href="http://mcdonalds.uk/" target="_blank" rel="noopener noreferrer">
            http://mcdonalds.uk/
          </a>
        </p>
      </div>
      <MapContainer center={position} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>McDonald's South London</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

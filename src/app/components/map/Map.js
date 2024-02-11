"use client";

import styles from "./Map.module.css";
import L from "leaflet";

import MarkerIcon from "/node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "/node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

const Map = () => {
  const [coord, setCoord] = useState([52.5019369753163, 13.411516783230129]);

  console.log("coord:", coord);
  const SearchLocation = () => {
    return (
      <div className="search-location">
        <input type="text" placeholder="Search Location" />
      </div>
    );
  };

  const GetMyLocation = () => {
    const getMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoord([position.coords.latitude, position.coords.longitude]);
          console.log("position:", position);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
  };
  GetMyLocation();

  return (
    <div>
      {/* <SearchLocation />
      <GetMyLocation /> */}
      <MapContainer
        style={{
          height: "100vh",
          width: "100vw",
        }}
        center={coord}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          className={styles.mapgray}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[52.5019369753163, 13.411516783230129]}
        >
          <Popup>
            <div className={styles.popup}>
              A pretty CSS3 popup. <br /> Easily customizable.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

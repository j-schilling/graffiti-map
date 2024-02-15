"use client";

import styles from "./Map.module.css";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useState } from "react";
import GraffitiMarker from "../graffitimarker/GraffitiMarker";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Map() {
  const [coord, setCoord] = useState([52.5019369753163, 13.411516783230129]);

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
        <GraffitiMarker />
      </MapContainer>
    </div>
  );
}

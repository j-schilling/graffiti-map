"use client";

import styles from "./Map.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PositionMarkerIcon from "/public/map/position-marker-icon.png";
import LocationIcon from "/public/map/location-icon.png";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState } from "react";
import GraffitiMarker from "../graffitimarker/GraffitiMarker";
import Image from "next/image";

// const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Map() {
  const [coords, setCoords] = useState([52.5019369753163, 13.411516783230129]);

  const SearchLocation = () => {
    return (
      <div className="search-location">
        <input type="text" placeholder="Search Location" />
      </div>
    );
  };

  const GetMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
        console.log("position:", position);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  // GetMyLocation();

  return (
    <div>
      {/* <SearchLocation /> */}
      {/* <GetMyLocation /> */}
      <MapContainer
        style={{
          height: "100vh",
          width: "100vw",
        }}
        center={coords}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          className={styles.mapgray}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        <button className={styles.currentlocationbutton}>
          <Image
            src={LocationIcon}
            width={50}
            height={50}
            alt="Icon to center the map to the current location"
          />
        </button>
        <GraffitiMarker />
        <Marker
          icon={
            new L.Icon({
              iconUrl: PositionMarkerIcon.src,
              iconRetinaUrl: PositionMarkerIcon.src,
              // iconSize: [25, 41],
              // iconAnchor: [12.5, 41],
              // popupAnchor: [0, -41],
              // shadowUrl: MarkerShadow.src,
              // shadowSize: [41, 41],
            })
          }
          position={coords}
        ></Marker>
      </MapContainer>
    </div>
  );
}

"use client";
import styles from "./Map.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PositionMarkerIcon from "/public/map/position-marker-icon.png";
import LocationIcon from "/public/map/location-icon.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import GraffitiMarker from "../graffitimarker/GraffitiMarker";
import Image from "next/image";
import LocationButton from "../locationbutton/LocationButton";

export default function Map() {
  const [coords, setCoords] = useState([52.4785193061056, 13.347730739696487]);
  // 52.4785193061056, 13.347730739696487
  // const SearchLocation = () => {
  //   return (
  //     <div className="search-location">
  //       <input type="text" placeholder="Search Location" />
  //     </div>
  //   );
  // };
  function FlyToMyLocation() {
    const map = useMap();
    console.log("nav", navigator);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userCoords = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setCoords(userCoords); // Update state with user coordinates
        console.log("position:", position);
        // Now we can use the map reference directly to fly to the user's location
        map.flyTo(userCoords, map.getZoom());
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    return null;
  }

  // useEffect(() => {
  //   flyToMyLocation();
  // }, []);

  // const GetMyLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setCoords([position.coords.latitude, position.coords.longitude]);
  //       console.log("position:", position);
  //       const map = useMapEvents(map.flyTo(coords, map.getZoom));
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };

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

        {/* <LocationButton
          FlyToMyLocation={FlyToMyLocation}
          className={styles.currentlocationbutton}
        >
          <Image
            src={LocationIcon}
            width={40}
            height={40}
            alt="Icon to center the map to the current location"
          />
        </LocationButton> */}
        <GraffitiMarker />
        <Marker
          icon={
            new L.Icon({
              iconUrl: PositionMarkerIcon.src,
              iconRetinaUrl: PositionMarkerIcon.src,
              iconSize: [40, 40],
              iconAnchor: [12.5, 15],

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

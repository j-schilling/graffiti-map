"use client";

import styles from "./Map.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PositionMarkerIcon from "/public/map/position-marker-icon.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import GraffitiMarker from "../graffitimarker/GraffitiMarker";

export default function Map() {
  const [coords, setCoords] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [isCurrentPosition, setIsCurrentPosition] = useState(false);

  //put function her outside of useEffect

  useEffect(() => {
    function geoFindme() {
      function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        // Update the state with the new lat long
        setCoords([lat, long]);
        setIsCurrentPosition(true);
      }
      function error() {
        setCoords([50.94252260860335, 6.959073771647771]);
        setZoom(2);
        console.log("Unable to retrieve your location");
      }

      if (!navigator.geolocation) {
        setCoords([50.94252260860335, 6.959073771647771]);
        setZoom(2);
        console.log("Geolocation is not supported by your browser");
      } else {
        setZoom(13);
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }

    // Call geoFindme to update coords state
    geoFindme();
  }, []);

  if (!coords) {
    return "Loading Graffiti Map...";
  }
  // 52.4785193061056, 13.347730739696487
  // const SearchLocation = () => {
  //   return (
  //     <div className="search-location">
  //       <input type="text" placeholder="Search Location" />
  //     </div>
  //   );
  // };
  // function FlyToMyLocation() {
  //   const map = useMap();
  //   console.log("nav", navigator);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userCoords = [
  //         position.coords.latitude,
  //         position.coords.longitude,
  //       ];
  //       setCoords(userCoords); // Update state with user coordinates
  //       console.log("position:", position);
  //       // Now we can use the map reference directly to fly to the user's location
  //       map.flyTo(userCoords, map.getZoom());
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  //   return null;
  // }

  // useEffect(() => {
  // FlyToMyLocation();
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

  // const LocationButton = () => {
  // function FlyToMyLocation() {
  //   const map = useMap();
  //   console.log("nav", navigator);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userCoords = [
  //         position.coords.latitude,
  //         position.coords.longitude,
  //       ];
  //       setCoords(userCoords); // Update state with user coordinates
  //       console.log("position:", position);
  //       // Now we can use the map reference directly to fly to the user's location
  //       map.flyTo(userCoords, map.getZoom());
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  //   return null;
  // }
  // useEffect(() => {
  // FlyToMyLocation();
  // }, []);

  //   return <button onClick={FlyToMyLocation}></button>;
  // };
  // function FlyToMyLocation() {
  //   const map = useMap();
  //   console.log("nav", navigator);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userCoords = [
  //         position.coords.latitude,
  //         position.coords.longitude,
  //       ];
  //       setCoords(userCoords); // Update state with user coordinates
  //       console.log("position:", position);
  //       // Now we can use the map reference directly to fly to the user's location
  //       map.flyTo(userCoords, map.getZoom());
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  //   return null;
  // }

  // FlyToMyLocation();

  return (
    <div className="absolute bottom-14 top-0 overflow-hidden">
      <MapContainer
        style={{
          height: "100vh",
          width: "100vw",
        }}
        center={coords}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          className={styles.mapgray}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {/* <LocationButton
          // FlyToMyLocation={FlyToMyLocation}
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
        {isCurrentPosition && (
          <Marker
            icon={
              new L.Icon({
                iconUrl: PositionMarkerIcon.src,
                iconRetinaUrl: PositionMarkerIcon.src,
                iconSize: [40, 40],
                iconAnchor: [12.5, 15],
              })
            }
            position={coords}
          />
        )}
      </MapContainer>
    </div>
  );
}

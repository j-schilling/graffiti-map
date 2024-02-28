"use client";

import { useState, useRef, useMemo } from "react";
import L from "leaflet";
import MarkerIcon from "/public/map/g-marker-icon-bl.png";
import MarkerShadow from "/public/map/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

let center = {
  lat: 51.505,
  lng: -0.09,
};

export default function DraggableMarker({
  userCoords,
  setUserCoords,
  draggableMarkerCoords,
  setDraggableMarkerCoords,
}) {
  //   const [position, setPosition] = useState(userCoords);
  //   console.log("position", position);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setDraggableMarkerCoords([
            marker.getLatLng().lat,
            marker.getLatLng().lng,
          ]);
        }
      },
    }),
    []
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={draggableMarkerCoords}
      ref={markerRef}
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
    >
      <Popup minWidth={90}>
        <span>Drag the marker to the graffiti location</span>
      </Popup>
    </Marker>
  );
}
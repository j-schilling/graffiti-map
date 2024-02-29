"use client";

import { useRef, useMemo } from "react";
import L from "leaflet";
import MarkerIcon from "/public/map/g-marker-icon-y.png";
import MarkerShadow from "/public/map/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

export default function DraggableMarker({
  userCoords,
  setDraggableMarkerCoords,
}) {
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
    [setDraggableMarkerCoords]
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={userCoords}
      ref={markerRef}
      icon={
        new L.Icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [50, 82],
          iconAnchor: [25, 82],
          popupAnchor: [0, -41],
          shadowUrl: MarkerShadow.src,
          shadowSize: [82, 82],
        })
      }
    >
      {/* <Popup minWidth={90}>
        <span>Drag the marker to the graffiti location</span>
      </Popup> */}
    </Marker>
  );
}

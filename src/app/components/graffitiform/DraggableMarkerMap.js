"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import styles from "@/app/components/map/Map.module.css";
import DraggableMarker from "@/app/components/graffitiform/DraggableMarker";

export default function DraggableMarkerMap({
  userCoords,
  setDraggableMarkerCoords,
  zoom,
}) {
  return (
    <MapContainer
      style={{
        maxHeight: "100%",
        height: "100vh",
        width: "100vw",
        aspectRatio: "1 / 1",
        top: "0px",
      }}
      center={userCoords}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        className={styles.mapgray}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      <DraggableMarker
        userCoords={userCoords}
        setDraggableMarkerCoords={setDraggableMarkerCoords}
      />
    </MapContainer>
  );
}

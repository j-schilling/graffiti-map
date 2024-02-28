"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import DraggableMarker from "@/app/draggablemarkermap/DraggableMarker";

export default function DraggableMarkerMap({
  userCoords,
  setUserCoords,
  draggableMarkerCoords,
  setDraggableMarkerCoords,
  zoom,
}) {
  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "100vw",
      }}
      center={userCoords}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      <DraggableMarker
        userCoords={userCoords}
        setUserCoords={setUserCoords}
        draggableMarkerCoords={draggableMarkerCoords}
        setDraggableMarkerCoords={setDraggableMarkerCoords}
      />
    </MapContainer>
  );
}

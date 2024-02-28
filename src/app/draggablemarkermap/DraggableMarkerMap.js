"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PositionMarkerIcon from "/public/map/position-marker-icon.png";
import MarkerIcon from "/public/map/marker-icon.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import DraggableMarker from "@/app/draggablemarkermap/DraggableMarker";

export default function DraggableMarkerMap() {
  const [coords, setCoords] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [isCurrentPosition, setIsCurrentPosition] = useState(false);

  return (
    <div className="absolute bottom-14 top-0 overflow-hidden">
      <MapContainer
        style={{
          height: "100vh",
          width: "100vw",
        }}
        center={[52, 13]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <DraggableMarker />
      </MapContainer>
    </div>
  );
}

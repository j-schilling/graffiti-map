"use client";

import MarkerIcon from "/node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "/node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiMarker() {
  const { data, error, isLoading } = useSWR("/api/entries", fetcher);
  return console.log("data", data);
}

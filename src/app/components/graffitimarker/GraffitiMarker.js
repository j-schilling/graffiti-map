"use client";
import L from "leaflet";
import MarkerIcon from "/public/map/marker-icon.png";
import MarkerShadow from "/public/map/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";
import useSWR from "swr";
import GraffitiPopup from "../graffitipopup/GraffitiPopup";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiMarker() {
  const { data, error, isLoading } = useSWR("/api/entries", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log("data", data);
  return data.entries.map((entry) => (
    <Marker
      key={entry._id}
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
      position={entry.coords}
    >
      <GraffitiPopup image={entry.images[0]} id={entry._id} />
    </Marker>
  ));
}

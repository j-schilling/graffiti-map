"use client";

import { Popup } from "react-leaflet";
import styles from "./GraffitiPopup.module.css";

export default function GraffitiPopup() {
  return (
    <Popup>
      <div>
        A pretty CSS3 popup. <br /> Easily customizable.
      </div>
    </Popup>
  );
}

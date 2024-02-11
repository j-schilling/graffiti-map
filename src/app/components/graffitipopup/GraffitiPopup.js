"use client";

import { Popup } from "react-leaflet";
import Image from "next/image";
import styles from "./GraffitiPopup.module.css";

export default function GraffitiPopup({ image }) {
  return (
    <Popup>
      <Image
        src={image}
        width={200}
        height={100}
        alt="Picture of a graffiti piece"
      />
    </Popup>
  );
}

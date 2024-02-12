"use client";

import { Popup } from "react-leaflet";
import Image from "next/image";
import styles from "./GraffitiPopup.module.css";

export default function GraffitiPopup({ image }) {
  return (
    <Popup>
      <Image
        src={image}
        width={300}
        height={150}
        alt="Picture of a graffiti piece"
      />
    </Popup>
  );
}

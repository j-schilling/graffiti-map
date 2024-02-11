"use client";

import { Popup } from "react-leaflet";
import styles from "./Popup.module.css";

export default function CustomPopup() {
  <Popup>
    <div className={styles.popup}>
      A pretty CSS3 popup. <br /> Easily customizable.
    </div>
  </Popup>;
}

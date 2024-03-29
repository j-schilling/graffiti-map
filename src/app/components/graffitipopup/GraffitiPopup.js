"use client";

import { Popup } from "react-leaflet";
import Image from "next/image";
import Link from "next/link";

export default function GraffitiPopup({ image, id }) {
  return (
    <Popup>
      <Link href={id}>
        <Image
          src={image}
          width={250}
          height={150}
          alt="Picture of a graffiti piece"
        />
      </Link>
    </Popup>
  );
}

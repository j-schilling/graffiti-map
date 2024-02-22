import Image from "next/image";
import GraffitiMapLogoIcon from "../../../../public/icons/GraffitiMap_2.png";

export default function GraffitiMapLogo({ width, height }) {
  return (
    <Image
      src={GraffitiMapLogoIcon}
      width={width}
      height={height}
      alt="Logo of Graffiti Map"
    />
  );
}

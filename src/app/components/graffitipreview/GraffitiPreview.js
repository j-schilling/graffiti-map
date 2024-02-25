import Image from "next/image";

export default function GraffitiPreview({ graffitidata }) {
  return (
    <Image
      src={graffitidata.images[0]}
      width={200}
      height={100}
      placeholder="blur"
      alt="image of a graffiti piece"
    />
  );
}

import Link from "next/link";
import Image from "next/image";

import createIcon from "../../../../public/icons/create_GraffitiMap.png";
import mapImage from "../../../../public/teaser/mapteaser.png";

export default function CreateTeaser() {
  return (
    <div className="w-full h-full border-black border bg-gyellow">
      <Link href="/create">
        <article className="p-3 w-full h-full flex flex-row gap-1 items-start">
          <div className="text-left h-full flex flex-col gap-2 p-3">
            {/* <p className="text-base mb-4">Welcome to Graffiti Map</p> */}
            <h1 className="text-2xl">ADD ONE</h1>
            <p>
              Uploading just got easy like a walk in the park. Take a picture of
              a graffiti and add it on the map for the world to see.
              <br />
              <span className="font-bold">{`Let's go`}</span>
            </p>
          </div>
          <Image
            src={createIcon}
            width={50}
            height={50}
            alt="create a graffiti icon"
          />
          {/* <strong className="decoration-4 decoration-gyellow	">{`Let's go`}</strong> */}
        </article>
      </Link>
    </div>
  );
}

export function MapTeaser() {
  return (
    <div className="w-full h-full border-black border bg-white">
      <Link href="/map">
        <Image
          src={mapImage}
          width={598}
          height={158}
          alt="graffiti map with markers and pop up image"
        />
      </Link>
    </div>
  );
}

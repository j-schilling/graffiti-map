import Link from "next/link";
import Image from "next/image";

import createIcon from "../../../../public/icons/create_GraffitiMap.png";
import mapImage from "../../../../public/teaser/mapteaser.png";

export default function CreateTeaser() {
  return (
    <div className="w-full h-full border-black border rounded shadow-lg white">
      <Link href="/create">
        <article className="px-4 w-full h-full flex flex-row gap-3 items-center bg-white">
          <Image
            src={createIcon}
            width={100}
            height={100}
            alt="create a graffiti icon"
          />
          <div className="text-left h-full flex flex-col gap-4 p-4">
            {/* <p className="text-base mb-4">Welcome to Graffiti Map</p> */}
            <h1 className="text-[32px] ">Create one</h1>
            <p className="text-s">
              Take a picture of a graffiti and add it on the map for the world
              to see.
            </p>
            <strong className="underline decoration-4 decoration-gyellow	">{`Let's go`}</strong>
          </div>
        </article>
      </Link>
    </div>
  );
}

export function MapTeaser() {
  return (
    <div className="w-full h-full border-black border rounded shadow-lg white">
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

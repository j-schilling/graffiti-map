import Link from "next/link";
import Image from "next/image";

import createIcon from "../../../../public/icons/create_GraffitiMap.png";
import mapImage from "../../../../public/teaser/mapteaser.png";

export default function CreateTeaser() {
  return (
    <div className="w-full h-full border-black border rounded shadow-lg white">
      <Link href="/create">
        <article className="p-3 w-full h-full flex flex-row gap-1 items-center bg-white">
          <Image
            src={createIcon}
            width={50}
            height={50}
            alt="create a graffiti icon"
          />
          <div className="text-left h-full flex flex-col gap-2 p-3">
            {/* <p className="text-base mb-4">Welcome to Graffiti Map</p> */}
            <h1 className="text-2xl font-mono">Create one</h1>
            <p>
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

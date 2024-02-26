import Image from "next/image";
import Link from "next/link";

export default function GraffitiPreview({ graffitidata }) {
  return (
    <Link href={`/${graffitidata._id}`}>
      <section className="w-full h-full border-black border rounded shadow-lg white flex flex-col items-center">
        <div className="relative w-full h-40">
          <Image
            src={graffitidata.images[0]}
            fill={true}
            alt="image of a graffiti piece"
            className="object-cover "
          />
        </div>
        <div className="text-left h-full flex flex-col gap-2 p-3">
          <p className=" 	">{graffitidata.location}</p>
        </div>
      </section>
    </Link>
  );
}

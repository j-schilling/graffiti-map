import Image from "next/image";
import Link from "next/link";

export default function GraffitiPreview({ graffitidata }) {
  return (
    <section className="w-full h-full border-black border rounded shadow-lg white">
      <Link href={`/${graffitidata._id}`}>
        <div>
          <Image
            src={graffitidata.images[0]}
            width={200}
            height={100}
            alt="image of a graffiti piece"
          />
        </div>
        <div className="text-left h-full flex flex-col gap-2 p-3">
          <p className=" 	">{graffitidata.location}</p>
        </div>
      </Link>
    </section>
  );
}

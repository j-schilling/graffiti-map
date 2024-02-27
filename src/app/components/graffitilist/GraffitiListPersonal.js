"use client";
import useSWR from "swr";

import GraffitiPreview from "../graffitipreview/GraffitiPreview";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiListPersonal({ creator }) {
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading graffiti added by me...</div>;

  const graffitisAddedByYou = data.entries.filter(
    (entry) => entry.creator === creator
  );
  console.log("creator in GraffitiListPersonal", creator);
  console.log("data", data.entries);
  console.log({ graffitisAddedByYou });
  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-xl text-center">Added by me:</h1>
      {graffitisAddedByYou.reverse().map((graffiti) => (
        <GraffitiPreview key={graffiti._id} graffitidata={graffiti} />
      ))}
    </section>
  );
}

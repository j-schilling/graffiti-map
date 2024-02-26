"use client";
import useSWR from "swr";
import GraffitiPreview from "../graffitipreview/GraffitiPreview";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiList() {
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading recently added graffiti...</div>;

  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-xl text-center">Recently added:</h1>
      {data.entries
        .slice()
        .reverse()
        .map((graffiti) => (
          <GraffitiPreview key={graffiti._id} graffitidata={graffiti} />
        ))}
    </section>
  );
}

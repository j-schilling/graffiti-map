"use client";

import GraffitiPreview from "../graffitipreview/GraffitiPreview";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiListPersonal({ graffitiArray }) {
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading graffiti created by you...</div>;

  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-xl text-center">Added by you:</h1>
      {graffitiArray} => (
      <GraffitiPreview key={graffiti._id} graffitidata={graffiti} />
      ))}
    </section>
  );
}

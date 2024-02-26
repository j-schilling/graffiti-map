"use client";
import useSWR from "swr";
import GraffitiPreview from "../graffitipreview/GraffitiPreview";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiList() {
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return data.entries.map((graffiti) => (
    <GraffitiPreview key={graffiti._id} graffitidata={graffiti} />
  ));
}

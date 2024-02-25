"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GraffitiList() {
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);
  console.log("datag", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <article>HELLO WORLD</article>;
  //   data.entries.map((graffiti) =>
}

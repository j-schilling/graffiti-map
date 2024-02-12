"use client";

import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage({ params }) {
  console.log("params", params);

  const { id } = params;

  const { data, error, isLoading } = useSWR(`/api/entries/${id}`, fetcher);
  console.log("data", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main>
      <Image
        src={data.entry.images}
        width={500}
        height={250}
        alt="Picture of a graffiti piece"
      />
    </main>
  );
}

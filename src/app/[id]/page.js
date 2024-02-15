"use client";

import useSWR from "swr";
import ImageSwiper from "../components/imageswiper/ImageSwiper";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage({ params }) {
  const { id } = params;
  const { data, error, isLoading } = useSWR(`/api/entries/${id}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main>
      <ImageSwiper data={data} />
      <section>
        <h4>📍 {data.entry.location}</h4>
      </section>
    </main>
  );
}

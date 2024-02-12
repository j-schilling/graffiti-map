"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage() {
  // const searchParams = useSearchParams();
  // console.log("searchParams", searchParams);

  // const url = new URL(request.url);
  // console.log("url", url);

  // const { id } = searchParams.id;
  // console.log("id", id);
  const router = useRouter();
  console.log("router", router);
  // const { id } = router.query;
  const id = 1;
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

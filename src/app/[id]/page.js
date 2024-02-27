"use client";

// import { SessionProvider } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import ImageSwiper from "../components/imageswiper/ImageSwiper";
import Image from "next/image";
import Link from "next/link";
import GoBackIcon from "../../../public/icons/back_GraffitiMap.png";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const { data, error, isLoading } = useSWR(`/api/graffitis/${id}`, fetcher);
  if (error) return <div>{`Failed to load :(`}</div>;
  if (isLoading) return <div>Loading Graffiti...</div>;
  return (
    // <SessionProvider session={session}>
    <main>
      <header className="flex justify-between items-center p-1">
        <Link href="/map" onClick={() => router.back()}>
          <div className="flex items-center">
            <Image src={GoBackIcon} width={50} height={50} alt="Go back icon" />
            Go back
          </div>
        </Link>
        <GraffitiMapLogo width={144} height={53.4} />
      </header>
      <ImageSwiper data={data} />
      <section>
        <h4>📍 {data.graffiti.location}</h4>
      </section>
    </main>
    // </SessionProvider>
  );
}

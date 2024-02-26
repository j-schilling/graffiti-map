"use client";

import useSWR from "swr";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignInButton from "../components/signinbutton/SignInButton";
import ProfileCard from "./ProfileCard";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";
import GraffitiListPersonal from "../components/graffitilist/GraffitiList";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Personal() {
  const session = useSession();
  const { data, error, isLoading } = useSWR("/api/graffitis", fetcher);

  console.log("sesssion on personal", session);
  if (session.status === "loading") {
    return null;
  }
  if (session.status === "authenticated") {
    const creator = session.data?.user?.id;
    console.log("creator on personal", creator);
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading graffiti created by you...</div>;

    const graffitisAddedByYou = data.entries.filter(
      (entry) => entry._id === creator
    );
    return (
      <main className="flex flex-col gap-8 p-5 items-center">
        <GraffitiMapLogo width={160} height={66.75} />
        <ProfileCard sessionData={session.data} />
        <GraffitiListPersonal graffitiArray={graffitisAddedByYou} />
      </main>
    );
  }
  signIn();
}

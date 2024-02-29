"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";
import GraffitiListPersonal from "../components/graffitilist/GraffitiListPersonal";

export default function Personal() {
  const session = useSession();

  console.log("sesssion on personal", session);
  if (session.status === "loading") {
    return null;
  }
  if (session.status === "authenticated") {
    const creator = session.data?.user?.id;
    console.log("creator on personal", creator);

    return (
      <main className="flex flex-col gap-8 p-5 items-center max-w-xl m-auto">
        <Link href="/">
          <GraffitiMapLogo width={160} height={66.75} />
        </Link>
        <ProfileCard sessionData={session.data} />
        <GraffitiListPersonal creator={creator} />
      </main>
    );
  }
  signIn();
}

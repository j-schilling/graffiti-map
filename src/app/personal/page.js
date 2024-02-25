"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignInButton from "../components/signinbutton/SignInButton";
import ProfileCard from "./ProfileCard";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";

export default function Personal() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }
  if (session.status === "authenticated") {
    return (
      <main className="flex flex-col gap-8 p-5 items-center">
        <GraffitiMapLogo width={160} height={66.75} />
        <ProfileCard sessionData={session.data} />
      </main>
    );
  }
  signIn();
}

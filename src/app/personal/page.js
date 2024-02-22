"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Personal() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }
  if (session.status === "authenticated") {
    return (
      <main className="flex flex-col">
        <h2 className="text-center">Your profile</h2>
        <Image
          src={session.data.user.image}
          width={100}
          height={100}
          alt="Your profile picture"
          className="text-center"
        />
        {session.data.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    );
  }
  signIn();
}

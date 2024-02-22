"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Personal() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex flex-col">
        <h2 className="text-center">Your profile</h2>
        <Image
          src={session.user.image}
          width={100}
          height={100}
          alt="Your profile picture"
          className="text-center"
        />
        {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    );
  }
  signIn();
}

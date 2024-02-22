"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import GraffitiForm from "../components/graffitiform/GraffitiForm.js";

export default function CreateEntryPage() {
  const { data: session } = useSession();
  const creator = session?.user?.id;
  const router = useRouter();

  async function AddGraffiti(entryData) {
    const response = await fetch("/api/graffitis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });
    if (response.ok) {
      router.push("/map");
    }
  }
  if (session) {
    return (
      <main className="pb-16">
        <Link href="/map" passHref legacyBehavior className="border-2">
          Go back
        </Link>
        <h1 className="text-center">Add a piece to Graffiti Map</h1>
        <GraffitiForm
          onSubmit={AddGraffiti}
          formName={"add-entry"}
          creator={creator}
        />
      </main>
    );
  }
  signIn();
}

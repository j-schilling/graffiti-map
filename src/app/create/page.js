"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import GraffitiForm from "../components/graffitiform/GraffitiForm.js";

export default function CreateEntryPage() {
  const [loadingAddGraffiti, setLoadingAddGraffiti] = useState(false);

  const session = useSession();
  const creator = session.data?.user?.id;

  const router = useRouter();

  async function AddGraffiti(entryData) {
    setLoadingAddGraffiti(true);
    const response = await fetch("/api/graffitis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });
    if (!response.ok) {
      alert(
        "Ooops, something went wrong. Your graffiti was not added :( Please check, if longitude and latitude are entered in the required format. Thanks!"
      );
      console.log(error);
    }
    if (response.ok) {
      setLoadingAddGraffiti(false);
      router.push("/map");
      alert("Yes! You have added this graffiti. Check it out on the map now:");
    }
  }

  if (session.status === "loading") {
    return null;
  }
  if (session.status === "authenticated") {
    return (
      <main className="flex flex-col gap-8 p-5 items-center">
        <Link href="/map" passHref legacyBehavior className="border-2">
          Go back
        </Link>
        <h1 className="text-center">Add a piece to Graffiti Map</h1>
        <GraffitiForm
          setLoadingAddGraffiti={setLoadingAddGraffiti}
          loadingAddGraffiti={loadingAddGraffiti}
          onSubmit={AddGraffiti}
          formName={"add-entry"}
          creator={creator}
        />
      </main>
    );
  }
  signIn();
}

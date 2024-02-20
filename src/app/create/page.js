"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import GraffitiForm from "../components/graffitiform/GraffitiForm.js";

export default function CreateEntryPage() {
  const { data: session } = useSession();

  const router = useRouter();
  console.log("Session", session);
  async function AddGraffiti(entryData) {
    console.log("entryData on create", entryData);
    // console.log("response", response);
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
      <>
        <Link href="/map" passHref legacyBehavior>
          Go back
        </Link>
        <h2>Add a Graffiti piece here</h2>
        <GraffitiForm onSubmit={AddGraffiti} formName={"add-entry"} />
      </>
    );
  }
  signIn();
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import GraffitiForm from "../components/graffitiform/GraffitiForm.js";

export default function CreateEntryPage() {
  const router = useRouter();

  async function AddGraffiti(entryData) {
    console.log("entryData on create", entryData);
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

  return (
    <>
      <Link href="/map" passHref legacyBehavior>
        Go back
      </Link>
      <h2>Add Graffiti</h2>
      <GraffitiForm onSubmit={AddGraffiti} formName={"add-entry"} />
    </>
  );
}

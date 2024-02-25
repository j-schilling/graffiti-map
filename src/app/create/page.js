"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import GraffitiForm from "../components/graffitiform/GraffitiForm.js";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";

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
      <main className="flex flex-col gap-4 p-4 items-center">
        {/* <GraffitiMapLogo width={160} height={66.75} />
        <h1 className="font-bold text-lg">{`Let's put a graffiti on the map`}</h1> */}
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

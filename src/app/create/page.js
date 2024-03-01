"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link.js";
import GraffitiForm from "../components/graffitiform/GraffitiForm.js";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";
import SignInComponent from "../components/signincomponent/SignInComponent.js";

export default function CreateEntryPage() {
  const session = useSession();
  const router = useRouter();
  const [loadingAddGraffiti, setLoadingAddGraffiti] = useState(false);

  if (session.status === "loading") {
    return null;
  }
  if (session.status === "unauthenticated") {
    return <SignInComponent pagetext={"add a graffiti"} />;
  }

  {
    const creator = session.data?.user?.id;

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
        alert("Ooops, something went wrong. Your graffiti was not added :(");
        console.log(error);
      }
      if (response.ok) {
        setLoadingAddGraffiti(false);
        router.push("/map");
        alert(
          "Yes! You have added this graffiti. Check it out on the map now:"
        );
      }
    }

    return (
      <main className=" w-full flex flex-col gap-4 p-4 items-center">
        <Link href="/">
          <GraffitiMapLogo width={160} height={66.75} />
        </Link>
        <h1 className="text-xl">{`LET'S PUT A GRAFFITI ON THE MAP`}</h1>
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
}

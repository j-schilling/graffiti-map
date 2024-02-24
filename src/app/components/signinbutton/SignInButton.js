"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button
          className="h-12 border-black border-2 p-2.5 bg-ggreymid"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("Google")}>Sign in</button>
      {/* <button
     class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
     >
  Simple Button
  </button> */}
    </>
  );
}

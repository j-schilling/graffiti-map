"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  const session = useSession();
  console.log("session", session);

  if (session.data) {
    return (
      <div className="flex flex-col justify-end gap-2 items-center">
        {session.data?.user?.name} <br />
        <button
          className=" border-black p-1 border rounded  bg-ggreymid "
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn("google")}
        className="bg-gyellow w-48 h-16 border-black border  p-2.5 "
      >
        Sign in
      </button>
    </>
  );
}

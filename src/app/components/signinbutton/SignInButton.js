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
        className=" border-black p-1 border rounded wq bg-ggreymid "
      >
        Sign in
      </button>
      {/* <button
     class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
     >
  Simple Button
  </button> */}
    </>
  );
}

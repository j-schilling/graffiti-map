import Image from "next/image";
import SignInButton from "../components/signinbutton/SignInButton";
import Link from "next/link";

export default function ProfileCard({ sessionData }) {
  return (
    <div className="w-full h-full border-black border white">
      <article className="p-3 w-full h-full flex flex-col gap-1 items-center bg-white">
        <div className="text-left h-full flex flex-col gap-2 p-3">
          {/* <p className="text-base mb-4">Welcome to Graffiti Map</p> */}
          <h1 className="text-2xl">MY PROFILE</h1>
          <div className="flex flex-col items-center">
            <Image
              src={sessionData.user.image}
              width={100}
              height={100}
              alt="Your profile picture"
            />
          </div>
          <SignInButton />
        </div>
      </article>
    </div>
  );
}

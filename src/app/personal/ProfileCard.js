import Image from "next/image";
import SignInButton from "../components/signinbutton/SignInButton";

export default function ProfileCard({ sessionData }) {
  return (
    <div className="w-full h-full border-black border rounded shadow-lg white">
      <article className="p-3 w-full h-full flex flex-col gap-1 items-center bg-white">
        <div className="text-left h-full flex flex-col gap-2 p-3">
          {/* <p className="text-base mb-4">Welcome to Graffiti Map</p> */}
          <h1 className="text-2xl font-mono">Your profile</h1>
          <Image
            src={sessionData.user.image}
            width={100}
            height={100}
            alt="Your profile picture"
            className="rounded"
          />
          {/* <p className="">{sessionData.user.name}</p> */}
          <SignInButton />
        </div>
      </article>
    </div>
  );
}

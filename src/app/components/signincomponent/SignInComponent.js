import SignInButton from "../signinbutton/SignInButton";
import GraffitiMapLogo from "../graffitimaplogo/GraffitiMapLogo";
import Link from "next/link";

export default function SignInComponent({ pagetext }) {
  return (
    <main className="flex flex-col gap-8 p-5 items-center max-w-xl m-auto">
      <Link href="/">
        <GraffitiMapLogo width={320} height={133.5} />
      </Link>
      <div className="p-5 w-full h-full flex flex-col gap-4 items-center border-black ">
        <p>Please sign in with Google to {pagetext}.</p>
        <SignInButton />
      </div>
    </main>
  );
}

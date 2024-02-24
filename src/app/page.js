import SignInButton from "./components/signinbutton/SignInButton";
import GraffitiMapLogo from "./components/graffitimaplogo/GraffitiMapLogo";
import SayHelloTeaser from "./components/homepageteaser/HomePageTeaser";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GraffitiMapLogo width={320} height={133.5} />
      <SayHelloTeaser />
      <h1>Hi Graffiti Fans</h1>
      <SignInButton />
    </main>
  );
}

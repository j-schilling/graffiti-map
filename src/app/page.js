import SignInButton from "./components/signinbutton/SignInButton";
import GraffitiMapLogo from "./components/graffitimaplogo/GraffitiMapLogo";

export default function Home() {
  return (
    <main>
      <GraffitiMapLogo width={320} height={133.5} />
      <h1>Hi Graffiti Fans</h1>
      <SignInButton />
    </main>
  );
}

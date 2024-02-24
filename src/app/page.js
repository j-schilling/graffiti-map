import SignInButton from "./components/signinbutton/SignInButton";
import GraffitiMapLogo from "./components/graffitimaplogo/GraffitiMapLogo";
import CreateTeaser from "./components/homepageteaser/HomePageTeaser";
import { MapTeaser } from "./components/homepageteaser/HomePageTeaser";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-6 items-center">
      <GraffitiMapLogo width={320} height={133.5} />
      <section>
        <p className="px-4">
          Welcome to Graffiti Map, a place where graffiti enthusiasts can check
          out graffiti in their area and all around the world!
        </p>
      </section>
      <MapTeaser />
      <CreateTeaser />
      <SignInButton />
    </main>
  );
}

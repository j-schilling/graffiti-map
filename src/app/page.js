import SignInButton from "./components/signinbutton/SignInButton";
import Logo from "../../public/icons/GraffitiMap_2.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src={Logo} width={320} height={133.5} alt="Logo of Graffiti Map" />
      <h1>Hi Graffiti Fans</h1>
      <SignInButton />
    </main>
  );
}

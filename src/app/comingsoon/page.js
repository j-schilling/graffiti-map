import Image from "next/image";
import Link from "next/link";
import qrcode from "../../../public/teaser/qrcode.png";
import GraffitiMapLogo from "../components/graffitimaplogo/GraffitiMapLogo";

export default function ComingSoon() {
  return (
    <main className="flex flex-col gap-8 p-5 items-center max-w-xl m-auto">
      <Link href="/">
        <GraffitiMapLogo width={320} height={133.5} />
      </Link>
      <div className="p-5 w-full h-full flex flex-col gap-4 items-center border-black ">
        <p>https://graffiti-map.vercel.app</p>
        <Image src={qrcode} width={600} height={600} alt="qr" />
      </div>
    </main>
  );
}

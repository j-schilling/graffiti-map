import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/sessionprovider/SessionProvider";
import NavBar from "./components/navbar/NavBar";

const ibmplexsans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});

export const metadata = {
  title: "Graffiti Map",
  description: "A map to view and upload real life graffiti art pieces",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${ibmplexsans.variable} font-sans`}>
          <NavBar />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}

// main class:
// className="flex min-h-screen flex-col items-center justify-between p-24"

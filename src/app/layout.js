import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/sessionprovider/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Graffiti Map",
  description: "A map to view and upload real life graffiti art pieces",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}

// main class:
// className="flex min-h-screen flex-col items-center justify-between p-24"

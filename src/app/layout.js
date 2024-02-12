import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Graffiti Map",
  description: "A map to view and upload real life graffiti art pieces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}

// main class:
// className="flex min-h-screen flex-col items-center justify-between p-24"

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center border-b-2 border-red-700">
          <h1>Demo Note</h1>
          <nav>
            <a
              href=""
              className="px-2"
            >
              Contact
            </a>
            <a
              href=""
              className="px-2"
            >
              About
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

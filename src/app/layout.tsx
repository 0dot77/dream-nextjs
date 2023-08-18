import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
// import { Inter } from "next/font/google";

import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 보여주는 사이트 입니다.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={gothic.className}>
        <header className="flex justify-between items-center border-b-2 border-red-700">
          <h1 className={`text-2xl p-2 font-bold text-orange-500 ${sans.className}`}>Demo Note</h1>
          <nav>
            <Link
              href="/products"
              className="px-2"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="px-2"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="px-2"
            >
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

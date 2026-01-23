import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";



const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});

const lufga = localFont({
  src: [
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "ABStore",
  description: "Your one-stop shop for all things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${lufga.variable} `}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

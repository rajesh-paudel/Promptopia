import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "promptopia",
  description: " next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` text-sm py-10 px-10 sm:px-20 md:px-32  bg-slate-100  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar></Navbar>
          {children}
        </Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./navbar/nav";
import Footer from "./footer/fot";
import IntroLoader from "./components/IntroLoader";

import FloatingChat from "./FloatingChat/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeshvaCredit - Instant loans and Financial solutions",
  description: "Apply loans easily and manage payments",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col text-black bg-stale-900 transition-colors duration-300">
  <IntroLoader>
    <Navbar />

    {/* <Popup /> */}

    <main className="flex-grow">
      {children}
    </main>

    <Footer />
  </IntroLoader>
  <FloatingChat/>
</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono, Belanosima, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const belanosima = Belanosima({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-belanosima",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WFSK - World Federation of Shotokan Karate",
  description: "Official website of the World Federation of Shotokan Karate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${belanosima.variable} ${inter.variable} antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

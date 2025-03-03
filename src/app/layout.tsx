import type { Metadata } from "next";
import { Geist, Geist_Mono, Rye, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rye = Rye({
  weight: ["400"],
  variable: "--font-headline",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const corn = Cormorant_Garamond({
  weight: ["400", "700"],
  variable: "--font-nav",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template",
  description: "A template for upcoming projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${corn.variable} ${rye.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
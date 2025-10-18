import type { Metadata } from "next";
import { Michroma, Doto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import HomeLayout from "@/components/layouts/HomeLayout";

const MichromaSans = Michroma({
  weight: ["400"],
  variable: "--font-michroma-sans",
  subsets: ["latin"],
});

const DotoMono = Doto({
  weight: ["400"],
  variable: "--font-doto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huzaifa",
  description: "Web developer",
  keywords: ["Huzaifa", "Web developer", "Software Engineer", "freelancer", "reactjs", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MichromaSans.variable} ${DotoMono.variable} antialiased`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}

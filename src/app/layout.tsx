import type { Metadata } from "next";
import { Figtree, Nunito, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Landing page of Fametonic for Netzet FE task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${urbanist.variable} ${nunito.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

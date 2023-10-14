import "./globals.scss";

import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

import { montserrat } from "./fonts";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.windows-4u.com/"),
  title: "%s | Windows4U",
  description:
    "Retrofit and New Construction windows and doors installation, replacement and repair for  homeowners and businesses all over East Bay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

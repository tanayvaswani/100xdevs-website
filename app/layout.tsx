import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/navbar";
import { siteConfig } from "@/config/site-config";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [
    {
      url: "/harkirat.png",
      href: "/harkirat.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full bg-slate-100", inter.className)}>
        <Navbar />
        <main className="pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

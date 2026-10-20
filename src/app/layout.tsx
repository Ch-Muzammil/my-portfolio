import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { footer } from "@/content/footer";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name} — ${site.role}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          {site.skipToContent}
        </a>
        <Header site={site} nav={nav} />
        <main id="main-content">{children}</main>
        <Footer footer={footer} social={site.social} />
      </body>
    </html>
  );
}

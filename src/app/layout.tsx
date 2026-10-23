import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Spotlight } from "@/components/ui/Spotlight";
import { Toaster } from "@/components/ui/Toaster";
import { VisitPrompt } from "@/features/contact/components/VisitPrompt";
import { contact } from "@/content/contact";
import { footer } from "@/content/footer";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { siteStructuredData } from "@/lib/seo";
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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "48x48" },
      { url: "/icon.svg?v=5", type: "image/svg+xml" },
      { url: "/icon-32.png?v=5", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png?v=5", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData()) }}
        />
        <a className="skip-link" href="#main-content">
          {site.skipToContent}
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        <Spotlight />
        <Header site={site} nav={nav} />
        <main id="main-content">{children}</main>
        <Footer footer={footer} site={site} nav={nav} />
        <Toaster />
        <VisitPrompt content={contact} />
        <SpeedInsights />
      </body>
    </html>
  );
}

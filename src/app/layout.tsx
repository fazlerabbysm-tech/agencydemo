import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katella Digital — Best Marketing Agency in Anaheim California",
  description:
    "Katella Digital is a full-service marketing agency in Anaheim, Orange County, California. UI/UX design, motion graphics, digital marketing, and web & app development — all under one roof.",
  keywords: [
    "marketing agency Anaheim",
    "digital marketing California",
    "full-service agency",
    "Katella Digital",
    "UI/UX design Anaheim",
    "web development Orange County",
    "advertising agency",
  ],
  authors: [{ name: "Katella Digital" }],
  openGraph: {
    title: "Katella Digital — Best Marketing Agency in Anaheim California",
    description:
      "Katella Digital is a full-service marketing agency in Anaheim, Orange County, California. UI/UX design, motion graphics, digital marketing, and web & app development.",
    siteName: "Katella Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased text-foreground font-sans selection:bg-[#C71F42] selection:text-white`}
        style={{
          "--font-mono": "'Courier New', monospace",
          background: "linear-gradient(120deg, #060000 0%, #2F000A 35%, #9A0E28 70%, #C71F42 100%)",
          backgroundAttachment: "fixed",
        } as React.CSSProperties}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

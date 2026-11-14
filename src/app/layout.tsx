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
  title: "Katella Digital — Full-Service Marketing Agency",
  description:
    "A full-service marketing agency built to drive business growth. Strategy, creative, digital, and media — all under one roof.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "full-service agency",
    "Katella Digital",
    "creative agency",
    "advertising",
  ],
  authors: [{ name: "Katella Digital" }],
  openGraph: {
    title: "Katella Digital — Full-Service Marketing Agency",
    description:
      "A full-service marketing agency built to drive business growth. Strategy, creative, digital, and media — all under one roof.",
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

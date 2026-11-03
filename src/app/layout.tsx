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
        className={`${roboto.variable} antialiased bg-background text-foreground font-sans selection:bg-[#46E2E2] selection:text-black`}
        style={{ "--font-mono": "'Courier New', monospace" } as React.CSSProperties}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

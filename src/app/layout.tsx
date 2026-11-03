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
  title: "CUTTING EDGER — Creative Studio Agency",
  description:
    "A black & white creative studio crafting brands, films, and digital experiences with relentless precision.",
  keywords: [
    "creative studio",
    "branding agency",
    "design studio",
    "monochrome",
    "CUTTING EDGER",
    "creative agency",
  ],
  authors: [{ name: "CUTTING EDGER" }],
  openGraph: {
    title: "CUTTING EDGER — Creative Studio Agency",
    description:
      "A black & white creative studio crafting brands, films, and digital experiences with relentless precision.",
    siteName: "CUTTING EDGER",
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
        className={`${roboto.variable} antialiased bg-white text-black font-sans selection:bg-black selection:text-white`}
        style={{ "--font-mono": "'Courier New', monospace" } as React.CSSProperties}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

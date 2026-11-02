import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CUTTINGEDGER — Creative Studio Agency",
  description:
    "A black & white creative studio crafting brands, films, and digital experiences with relentless precision.",
  keywords: [
    "creative studio",
    "branding agency",
    "design studio",
    "monochrome",
    "CUTTINGEDGER",
    "creative agency",
  ],
  authors: [{ name: "CUTTINGEDGER" }],
  openGraph: {
    title: "CUTTINGEDGER — Creative Studio Agency",
    description:
      "A black & white creative studio crafting brands, films, and digital experiences with relentless precision.",
    siteName: "CUTTINGEDGER",
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
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-white text-black font-sans selection:bg-black selection:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira, Caveat } from "next/font/google";
import "../styles/globals.css";
import { AnalyticsRoot, GTM } from "../services/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renan Romagnollo",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${saira.variable} 
          ${caveat.variable} 
          antialiased
        `}
      >
        <GTM />
        {children}
      </body>
    </html>
  );
}

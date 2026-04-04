import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira, Caveat } from "next/font/google";
import "../styles/globals.css";
import { AnalyticsRoot } from "./_components/analytics";
import { GTM } from "./_components/analytics/gtm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renan Romagnollo",
  description: "Frontend Developer",
};

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${saira.variable} ${caveat.variable} antialiased`}
      >
        <GTM />
        <AnalyticsRoot />
        {children}
      </body>
    </html>
  );
}

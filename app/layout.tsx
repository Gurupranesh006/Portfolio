import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InitialLoader } from "@/components/initial-loader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: "Gurupranesh J Kulkarni | Cybersecurity Portfolio",
  description:
    "Cybersecurity portfolio of Gurupranesh J Kulkarni — building red teaming workflows, Active Directory exploitation labs, web pentesting projects, and AI-driven security research.",
  keywords: [
    "Gurupranesh J Kulkarni",
    "Cybersecurity",
    "Red Teaming",
    "Active Directory",
    "Web Pentesting",
    "AI Security",
    "RVCE"
  ],
  openGraph: {
    title: "Gurupranesh J Kulkarni | Cybersecurity Portfolio",
    description:
      "Red Teaming, Active Directory Exploitation, Web Pentesting, and AI in Cybersecurity.",
    url: "https://example.vercel.app",
    siteName: "Gurupranesh Portfolio",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <InitialLoader>{children}</InitialLoader>
        <SpeedInsights />
      </body>
    </html>
  );
}
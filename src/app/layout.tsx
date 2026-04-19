import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "OpenBank — Private Banking",
  description: "Modern private banking home page — 2026 UX benchmark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ minHeight: "100vh", background: "var(--background)" }}>
        {children}
      </body>
    </html>
  );
}

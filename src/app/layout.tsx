import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citadele — Online Banking",
  description: "Citadele private online banking home page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

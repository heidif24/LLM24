import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaijaBuild — AI Website Builder for Nigeria",
  description: "Create beautiful professional websites in minutes using AI. Built for Nigerian businesses, churches, freelancers and creators. Pay in Naira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

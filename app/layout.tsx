import type { Metadata } from "next";
import sora from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syncwave",
  description: "The swiss army knife for student living",
  keywords: ["student living", "student accommodation", "student housing"],
  openGraph: {
    title: "Syncwave",
    description: "The swiss army knife for student living",
    type: "website",
    url: "https://syncwave.com",
  },
  twitter: {
    title: "Syncwave",
    description: "The swiss army knife for student living",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

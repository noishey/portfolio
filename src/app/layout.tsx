import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "noishey.tech Portfolio",
  description: "reduce the noise and tune in",
  openGraph: {
    title: "noishey.tech Portfolio",
    description: "reduce the noise and tune in",
    url: "https://noishey.tech",
    siteName: "noishey.tech",
    images: [
      {
        url: "https://noishey.tech/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "noishey.tech Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "noishey.tech Portfolio",
    description: "reduce the noise and tune in",
    images: ["https://noishey.tech/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

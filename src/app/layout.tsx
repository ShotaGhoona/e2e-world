import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { LanguageToast } from "../components/LanguageToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAI: People and Ideas - Community Platform Connecting Japan & Indonesia",
  description: "A community platform connecting diverse people and ideas to shape a brighter future between Japan and Indonesia. Join our global community where wisdom and cultures meet.",
  keywords: [
    "PAI", 
    "People and Ideas", 
    "community platform", 
    "Japan", 
    "Indonesia", 
    "cultural exchange", 
    "collaboration", 
    "cross-border",
    "digital talent",
    "innovation",
    "Web development",
    "System development",
    "Mobile apps",
    "Blockchain",
    "AI",
    "Machine Learning"
  ],
  authors: [{ name: "PAI: People and Ideas" }],
  creator: "PAI: People and Ideas",
  publisher: "PAI: People and Ideas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pai-world.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PAI: People and Ideas - Community Platform Connecting Japan & Indonesia",
    description: "A community platform connecting diverse people and ideas to shape a brighter future between Japan and Indonesia. Where people and ideas shape the future.",
    url: 'https://pai-world.com',
    siteName: 'PAI: People and Ideas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PAI: People and Ideas - Community Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PAI: People and Ideas - Community Platform",
    description: "A community platform connecting diverse people and ideas to shape a brighter future between Japan and Indonesia.",
    images: ['/og-image.png'],
    creator: '@pai_world',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <LanguageToast />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

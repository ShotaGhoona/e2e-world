import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e2e World - 日本×インドネシア次世代デジタル人材育成プロジェクト",
  description: "End-to-End Digital Talent Development。日本とインドネシアの架け橋となるAI人材育成プロジェクト。産学官連携により、実践的なプログラミングスキルとデジタル技術を学び、グローバルに活躍できるエンジニアを育成します。",
  keywords: [
    "e2e", 
    "デジタル人材育成", 
    "日本", 
    "インドネシア", 
    "AI教育", 
    "プログラミング", 
    "エンジニア育成",
    "国際連携",
    "産学官連携",
    "Web開発",
    "システム開発",
    "モバイルアプリ",
    "ブロックチェーン",
    "機械学習",
    "キャリアサポート"
  ],
  authors: [{ name: "e2e World" }],
  creator: "e2e World",
  publisher: "e2e World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://e2e-world.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "e2e World - 日本×インドネシア次世代デジタル人材育成プロジェクト",
    description: "日本とインドネシアの架け橋となるAI人材育成プロジェクト。産学官連携により実践的なデジタルスキルを習得し、グローバルエンジニアを目指しませんか？",
    url: 'https://e2e-world.com',
    siteName: 'e2e World',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'e2e World - Cross-Border Digital Talent Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "e2e World - 日本×インドネシア次世代デジタル人材育成",
    description: "End-to-End Digital Talent Development。両国の架け橋となるAI人材育成プロジェクト。",
    images: ['/og-image.png'],
    creator: '@e2eworld',
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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

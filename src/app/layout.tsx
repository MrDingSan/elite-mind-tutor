import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elitemindtutor.com'),
  title: {
    default: 'Elite Mind Tutor - Expert IGCSE & IB Tutoring in Singapore',
    template: '%s | Elite Mind Tutor'
  },
  description: 'Expert IGCSE and IB curriculum tutoring in Singapore. Personalized learning plans, qualified tutors, and proven results. Book your session today!',
  keywords: ['IGCSE tutoring', 'IB tutoring', 'Singapore tutors', 'Math tutoring', 'Science tutoring', 'International school tutoring'],
  authors: [{ name: 'Elite Mind Tutor' }],
  creator: 'Elite Mind Tutor',
  publisher: 'Elite Mind Tutor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://elitemindtutor.com',
    siteName: 'Elite Mind Tutor',
    title: 'Elite Mind Tutor - Expert IGCSE & IB Tutoring in Singapore',
    description: 'Expert IGCSE and IB curriculum tutoring in Singapore. Personalized learning plans, qualified tutors, and proven results.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Mind Tutor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Mind Tutor - Expert IGCSE & IB Tutoring in Singapore',
    description: 'Expert IGCSE and IB curriculum tutoring in Singapore. Personalized learning plans, qualified tutors, and proven results.',
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-site-verification', // Replace with your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <title>Elite Mind Tutor</title>
        <meta name="description" content="Elite Mind Tutor - Your trusted source for tutoring services." />
        <meta name="keywords" content="tutoring, education, online tutoring, student help" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={cn(
        inter.className,
        "min-h-full bg-white"
      )}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}

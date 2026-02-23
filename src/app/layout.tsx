import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Expert IGCSE & IB Tutoring in Singapore`,
    template: '%s | EliteMind Tutor'
  },
  description: 'Expert IGCSE & IB tutoring services in Singapore. Personalized learning plans, experienced tutors, and proven results.',
  keywords: ['IGCSE', 'IB', 'tutoring', 'Singapore', 'education', 'private tutor'],
  authors: [{ name: 'EliteMind Tutor' }],
  creator: 'EliteMind Tutor',
  publisher: 'EliteMind Tutor',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Expert IGCSE & IB Tutoring in Singapore`,
    description: 'Expert IGCSE & IB tutoring services in Singapore. Personalized learning plans, experienced tutors, and proven results.',
    images: [
      {
        url: '/images/logo/logo-without-words.png',
        width: 800,
        height: 600,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Expert IGCSE & IB Tutoring in Singapore`,
    description: 'Expert IGCSE & IB tutoring services in Singapore. Personalized learning plans, experienced tutors, and proven results.',
    images: ['/images/logo/logo-without-words.png'],
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
  ...(GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/* Removed manual <head> and favicon link. Let Next.js metadata API handle icons. */}
      <body className={cn(
        inter.className,
        "min-h-full bg-white"
      )}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

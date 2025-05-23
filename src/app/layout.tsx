import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Mind Tutor - Premium Tutoring Services in Singapore",
  description: "Connect with qualified tutors for IGCSE and IB curriculum in Singapore. Elite Mind Tutor provides premium tutoring services for international school students.",
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

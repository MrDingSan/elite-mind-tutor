import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

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
      <body className={cn(
        inter.className,
        "min-h-full bg-white"
      )}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

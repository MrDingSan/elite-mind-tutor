import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor Request Submitted",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RequestTutorSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

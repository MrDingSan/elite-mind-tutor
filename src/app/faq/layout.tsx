import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – EliteMind Tutor IB & IGCSE Tuition Questions Answered',
  description:
    'Find answers to common questions about EliteMind Tutor’s IB and IGCSE tuition services in Singapore, including tutors, curricula, scheduling and online lessons.',
  alternates: {
    canonical: 'https://elitemindtutor.com/faq',
  },
  openGraph: {
    title: 'EliteMind Tutor FAQ',
    description:
      'Read frequently asked questions from international school families about our tutoring process, pricing and support.',
    url: 'https://elitemindtutor.com/faq',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


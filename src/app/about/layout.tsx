import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EliteMind Tutor – IB & IGCSE Tuition Specialists in Singapore',
  description:
    'Learn about EliteMind Tutor’s mission, teaching philosophy and team of experienced IB and IGCSE tutors supporting international school students in Singapore.',
  alternates: {
    canonical: 'https://elitemindtutor.com/about',
  },
  openGraph: {
    title: 'About EliteMind Tutor',
    description:
      'Discover how EliteMind Tutor helps international school families in Singapore with personalized IB and IGCSE tutoring.',
    url: 'https://elitemindtutor.com/about',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


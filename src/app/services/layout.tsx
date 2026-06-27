import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutoring Services – IB & IGCSE Tuition Programs | EliteMind Tutor Singapore',
  description:
    'Explore EliteMind Tutor’s full range of IB and IGCSE tutoring services in Singapore, including one-on-one tuition, group classes, exam preparation, and flexible lesson formats.',
  alternates: {
    canonical: 'https://elitemindtutor.com/services',
  },
  openGraph: {
    title: 'IB & IGCSE Tutoring Services in Singapore | EliteMind Tutor',
    description:
      'Comprehensive tutoring services for international school students in Singapore, covering IB, IGCSE and more.',
    url: 'https://elitemindtutor.com/services',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


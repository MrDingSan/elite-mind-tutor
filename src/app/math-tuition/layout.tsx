import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Math Tuition Singapore – IB & IGCSE Mathematics Tutors',
  description:
    'One-on-one Mathematics tuition in Singapore for IB (AA & AI) and IGCSE students. Strengthen algebra, geometry, calculus and statistics with expert math tutors.',
  alternates: {
    canonical: 'https://elitemindtutor.com/math-tuition',
  },
  openGraph: {
    title: 'Math Tuition Singapore | EliteMind Tutor',
    description:
      'Premium math tuition for international school students in Singapore, covering IB and IGCSE syllabi.',
    url: 'https://elitemindtutor.com/math-tuition',
    type: 'website',
  },
};

export default function MathTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


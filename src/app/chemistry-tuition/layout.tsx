import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistry Tuition Singapore – IB & IGCSE Chemistry Tutors',
  description:
    'Specialist Chemistry tuition in Singapore for IB and IGCSE students. Strengthen your understanding of atomic structure, reactions, and organic chemistry with experienced tutors.',
  alternates: {
    canonical: 'https://elitemindtutor.com/chemistry-tuition',
  },
  openGraph: {
    title: 'Chemistry Tuition Singapore | EliteMind Tutor',
    description:
      'Work with IB and IGCSE Chemistry tutors in Singapore to improve lab skills, theory and exam performance.',
    url: 'https://elitemindtutor.com/chemistry-tuition',
    type: 'website',
  },
};

export default function ChemistryTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


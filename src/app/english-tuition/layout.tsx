import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Tuition Singapore – IB & IGCSE English Tutors',
  description:
    'English tuition in Singapore for international school students. Improve reading, writing, speaking and literature analysis for IB and IGCSE English.',
  alternates: {
    canonical: 'https://elitemindtutor.com/english-tuition',
  },
  openGraph: {
    title: 'English Tuition Singapore | EliteMind Tutor',
    description:
      'Expert IB and IGCSE English tutors helping students develop strong communication and critical reading skills.',
    url: 'https://elitemindtutor.com/english-tuition',
    type: 'website',
  },
};

export default function EnglishTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


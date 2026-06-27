import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biology Tuition Singapore – IB & IGCSE Biology Tutors',
  description:
    'Targeted Biology tuition in Singapore for IB and IGCSE students. Learn cell biology, genetics, ecology and human physiology with experienced biology tutors.',
  alternates: {
    canonical: 'https://elitemindtutor.com/biology-tuition',
  },
  openGraph: {
    title: 'Biology Tuition Singapore | EliteMind Tutor',
    description:
      'One-on-one IB and IGCSE Biology support in Singapore, including labs, exam practice and extended essay help.',
    url: 'https://elitemindtutor.com/biology-tuition',
    type: 'website',
  },
};

export default function BiologyTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


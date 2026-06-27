import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IB Tuition Singapore – Expert IB Tutors for International Schools',
  description:
    'Premium IB tuition in Singapore for students taking the International Baccalaureate Diploma. Support for IB Math, Physics, Chemistry, Biology, English, Economics, Extended Essay and Internal Assessments.',
  alternates: {
    canonical: 'https://elitemindtutor.com/ib-tuition',
  },
  openGraph: {
    title: 'IB Tuition Singapore | EliteMind Tutor',
    description:
      'Work with specialist IB tutors in Singapore for HL and SL subjects, Extended Essay and Internal Assessments.',
    url: 'https://elitemindtutor.com/ib-tuition',
    type: 'website',
  },
};

export default function IBTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


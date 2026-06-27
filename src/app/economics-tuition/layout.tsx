import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economics Tuition Singapore – IB & IGCSE Economics Tutors',
  description:
    'Economics tuition in Singapore for IB and IGCSE students. Learn microeconomics, macroeconomics, international trade and development economics with expert tutors.',
  alternates: {
    canonical: 'https://elitemindtutor.com/economics-tuition',
  },
  openGraph: {
    title: 'Economics Tuition Singapore | EliteMind Tutor',
    description:
      'One-on-one economics tutoring for international school students in Singapore, focused on real-world applications and exam success.',
    url: 'https://elitemindtutor.com/economics-tuition',
    type: 'website',
  },
};

export default function EconomicsTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


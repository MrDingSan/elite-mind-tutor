import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IGCSE Tuition Singapore – Cambridge IGCSE Tutors for Core & Extended',
  description:
    'Specialist IGCSE tuition in Singapore for Mathematics, Physics, Chemistry, Biology, English and Economics. Support for both Core and Extended IGCSE students.',
  alternates: {
    canonical: 'https://elitemindtutor.com/igcse-tuition',
  },
  openGraph: {
    title: 'IGCSE Tuition Singapore | EliteMind Tutor',
    description:
      'Get expert IGCSE tutors in Singapore to help your child build strong foundations and prepare for advanced studies.',
    url: 'https://elitemindtutor.com/igcse-tuition',
    type: 'website',
  },
};

export default function IGCSETuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


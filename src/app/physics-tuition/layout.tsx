import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physics Tuition Singapore – IB & IGCSE Physics Tutors',
  description:
    'One-on-one Physics tuition in Singapore for IB and IGCSE students. Master mechanics, waves, electricity, and modern physics with experienced physics tutors.',
  alternates: {
    canonical: 'https://elitemindtutor.com/physics-tuition',
  },
  openGraph: {
    title: 'Physics Tuition Singapore | EliteMind Tutor',
    description:
      'Expert IB and IGCSE Physics tutors in Singapore helping students build strong conceptual understanding and exam skills.',
    url: 'https://elitemindtutor.com/physics-tuition',
    type: 'website',
  },
};

export default function PhysicsTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


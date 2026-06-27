import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Tuition Singapore – IB & IGCSE Online Tutors',
  description:
    'Learn online with EliteMind Tutor’s IB and IGCSE tutors in Singapore. Flexible one-on-one online tuition with virtual whiteboard, screen sharing and session recordings.',
  alternates: {
    canonical: 'https://elitemindtutor.com/online-tuition',
  },
  openGraph: {
    title: 'Online Tuition Singapore | EliteMind Tutor',
    description:
      'High-quality online tuition for international school students, powered by advanced virtual classroom technology.',
    url: 'https://elitemindtutor.com/online-tuition',
    type: 'website',
  },
};

export default function OnlineTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Tutors – IB & IGCSE Subject Specialists | EliteMind Tutor Singapore',
  description:
    'Meet EliteMind Tutor’s team of experienced IB and IGCSE tutors in Singapore, including subject specialists in Math, Physics, Chemistry, Biology, English and Economics.',
  alternates: {
    canonical: 'https://elitemindtutor.com/tutors',
  },
  openGraph: {
    title: 'EliteMind Tutor – Our IB & IGCSE Tutors',
    description:
      'Learn about the qualifications and experience of EliteMind Tutor’s teaching team supporting international school students.',
    url: 'https://elitemindtutor.com/tutors',
    type: 'website',
  },
};

export default function TutorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


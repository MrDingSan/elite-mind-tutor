import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education Insights Blog – IB & IGCSE Tips for International School Families',
  description:
    'Read in-depth articles from EliteMind Tutor on IB and IGCSE strategies, international school choices in Singapore, and how to get the most from one-on-one tuition.',
  alternates: {
    canonical: 'https://elitemindtutor.com/blog',
  },
  openGraph: {
    title: 'EliteMind Tutor Blog – Education Insights',
    description:
      'Expert guidance on IB, IGCSE and international school success from EliteMind Tutor in Singapore.',
    url: 'https://elitemindtutor.com/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


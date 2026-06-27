import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact EliteMind Tutor – IB & IGCSE Tuition Enquiries in Singapore',
  description:
    'Get in touch with EliteMind Tutor to discuss IB and IGCSE tuition options in Singapore. Call, WhatsApp, or send us a message to find the right tutor for your child.',
  alternates: {
    canonical: 'https://elitemindtutor.com/contact',
  },
  openGraph: {
    title: 'Contact EliteMind Tutor',
    description:
      'Speak with our education team about personalized IB and IGCSE tutoring for international school students in Singapore.',
    url: 'https://elitemindtutor.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


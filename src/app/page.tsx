import React from 'react';
import Link from "next/link";
import { FaGraduationCap, FaUserTie, FaBook } from "react-icons/fa";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Elite Mind Tutor",
            "url": "https://elite-mind-tutor.pages.dev",
            "description": "Elite Mind Tutor - Your trusted source for tutoring services.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            }
          })}
        </script>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Elite Mind Tutor</h1>
      <p className="mb-4">Your trusted source for tutoring services.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc pl-5">
          <li>IGCSE Curriculum Tutoring</li>
          <li>IB Curriculum Tutoring</li>
          <li>Personalized Learning Plans</li>
          <li>Online and In-Person Sessions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
        <p>"Elite Mind Tutor has been a game-changer for my child's education. The tutors are highly qualified and very supportive." - Parent</p>
        <p>"I improved my grades significantly thanks to the personalized tutoring sessions." - Student</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mb-2">What subjects do you offer tutoring for?</h3>
        <p>We offer tutoring for a wide range of subjects, including IGCSE and IB curriculum subjects.</p>
        <h3 className="text-xl font-semibold mb-2">How do I schedule a tutoring session?</h3>
        <p>You can schedule a tutoring session by contacting us through our website or by phone.</p>
      </section>

      <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Contact Us</Link>
    </div>
  );
}


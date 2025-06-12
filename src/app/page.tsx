import React from 'react';
import Link from "next/link";
import { FaGraduationCap, FaBook, FaStar, FaQuestionCircle, FaWhatsapp, FaChalkboardTeacher, FaAward } from "react-icons/fa";
import Head from 'next/head';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative isolate">
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
      {/* Hero section */}
      <div className="relative pt-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/students/classroom1.jpg"
            alt="Classroom setting"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1B1D2A] mb-6">
                Looking for Exceptional Tutors for International School Success?
              </h1>
              <p className="text-xl text-[#4A4A5D] mb-8">
                We connect you with top-tier IB & IGCSE tutors who care deeply about your child's growth.
              </p>
              <div className="space-y-6">
                <Link
                  href="/request-tutor"
                  className="inline-flex items-center justify-center rounded-lg bg-[#5A4BFF] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#4A3BEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4BFF] transition-colors"
                >
                  Request a Tutor
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-sm text-gray-600">
                  Get matched in 24 hours – it's free!
                </p>
                <div className="flex items-center gap-3 text-[#4A4A5D]">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  <a href="https://wa.me/6585159132" className="text-lg font-medium hover:text-[#25D366] transition-colors">
                    +65 8515 9132
                  </a>
                  <span className="text-sm">Call or WhatsApp us — we're happy to help</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Students from Singapore's Leading Schools
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Backed by 120+ verified reviews and proven academic success
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaStar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">4.9</h3>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    Average Rating
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Across leading international schools
                  </p>
                  <p className="mt-2 text-sm text-[#7B7F92]">
                    Verified by Education Review
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaGraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    Successful Students
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Coached for IB & IGCSE
                  </p>
                  <p className="mt-2 text-sm text-[#7B7F92]">
                    Most score 6 or 7 in final exams
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaChalkboardTeacher className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    Subject Experts
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    From top global universities
                  </p>
                  <p className="mt-2 text-sm text-[#7B7F92]">
                    Handpicked for passion & results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Bottom Cards Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Everything you need to know about our tutoring services
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="relative flex flex-col p-8 bg-[#FAFAFC] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaBook className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Services
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Expert guidance in IB & IGCSE subjects, with personalized learning plans and comprehensive curriculum coverage.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col p-8 bg-[#FAFAFC] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaAward className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Why Choose Us
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Qualified tutors from top universities, flexible scheduling options, and proven track record of student success.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col p-8 bg-[#FAFAFC] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] p-3 rounded-full">
                    <FaQuestionCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Common Questions
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Find answers to frequently asked questions about our tutoring approach, scheduling, and pricing.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-x-2 text-[#5A4BFF] hover:text-[#4A3BEF] transition-colors"
                    >
                      View FAQ
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">
              Need help choosing the right tutor?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Call or WhatsApp us → <a href="https://wa.me/6585159132" className="text-[#5A4BFF] hover:text-[#4A3BEF] transition-colors">+65 8515 9132</a>
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-x-2 rounded-full bg-[#5A4BFF] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#4A3BEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4BFF] transition-colors"
              >
                Get in Touch Now
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition">Contact Us</Link>
      </div>
    </div>
  );
}


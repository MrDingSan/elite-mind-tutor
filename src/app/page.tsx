import React from 'react';
import Link from "next/link";
import { FaGraduationCap, FaUserTie, FaBook, FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Elite Mind Tutor
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Connecting exceptional tutors with ambitious international school students in Singapore.
                Specializing in IGCSE and IB curriculum.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/request-tutor"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request a Tutor
                </Link>
                <Link
                  href="/register/tutor"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Become a Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel in your studies
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/students/classroom2.jpg"
                alt="Interactive learning environment"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Features Grid */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FaUserTie className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Qualified Tutors
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our tutors are highly qualified professionals with extensive experience in teaching IGCSE and IB curriculum.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FaGraduationCap className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Personalized Learning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Tailored learning plans designed to meet your specific needs and learning style.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FaBook className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Comprehensive Curriculum
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Expert guidance in all IGCSE and IB subjects, ensuring thorough understanding and exam success.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services, Testimonials, FAQ as cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-indigo-600">
          <FaGraduationCap className="text-indigo-600 text-4xl mb-4" />
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          <ul className="list-disc pl-5 text-left">
            <li>IGCSE Curriculum Tutoring</li>
            <li>IB Curriculum Tutoring</li>
            <li>Personalized Learning Plans</li>
            <li>Online and In-Person Sessions</li>
          </ul>
        </div>
        {/* Testimonials Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-pink-400">
          <FaQuoteLeft className="text-pink-400 text-4xl mb-4" />
          <h2 className="text-xl font-bold mb-2">Testimonials</h2>
          <blockquote className="italic mb-2">"Elite Mind Tutor has been a game-changer for my child's education. The tutors are highly qualified and very supportive."</blockquote>
          <span className="text-sm text-gray-500 mb-4">- Parent</span>
          <blockquote className="italic mb-2">"I improved my grades significantly thanks to the personalized tutoring sessions."</blockquote>
          <span className="text-sm text-gray-500">- Student</span>
        </div>
        {/* FAQ Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-500">
          <FaQuestionCircle className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
          <div className="mb-2">
            <h3 className="font-semibold">What subjects do you offer tutoring for?</h3>
            <p className="text-sm">We offer tutoring for a wide range of subjects, including IGCSE and IB curriculum subjects.</p>
          </div>
          <div>
            <h3 className="font-semibold">How do I schedule a tutoring session?</h3>
            <p className="text-sm">You can schedule a tutoring session by contacting us through our website or by phone.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition">Contact Us</Link>
      </div>
    </div>
  );
}


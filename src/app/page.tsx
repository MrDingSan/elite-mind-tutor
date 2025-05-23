import React from 'react';
import Link from "next/link";
import { FaGraduationCap, FaUserTie, FaBook } from "react-icons/fa";
import Head from 'next/head';

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
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Elite Mind Tutor
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connecting exceptional tutors with ambitious international school students in Singapore.
                Specializing in IGCSE and IB curriculum.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/request-tutor"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request a Tutor
                </Link>
                <Link
                  href="/register/tutor"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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

      {/* New sections for content */}
      <section className="mb-8 bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc pl-5">
          <li>IGCSE Curriculum Tutoring</li>
          <li>IB Curriculum Tutoring</li>
          <li>Personalized Learning Plans</li>
          <li>Online and In-Person Sessions</li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
        <p>"Elite Mind Tutor has been a game-changer for my child's education. The tutors are highly qualified and very supportive." - Parent</p>
        <p>"I improved my grades significantly thanks to the personalized tutoring sessions." - Student</p>
      </section>

      <section className="mb-8 bg-gray-50 p-8 rounded-lg shadow-md">
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


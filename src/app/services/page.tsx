import React from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaBook, FaUsers, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Comprehensive tutoring services tailored to your academic needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Curriculum Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Curriculum Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IB Service Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IB Curriculum Tutoring</h3>
                <p className="text-gray-600 mb-6">
                  Expert guidance for International Baccalaureate students, covering all subjects and core components.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Featured Subjects:</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/ib/subjects/math" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IB Mathematics (AA & AI)</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ib/subjects/physics" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IB Physics</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ib/subjects/chemistry" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IB Chemistry</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/ib"
                  className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  View All IB Subjects
                </Link>
              </div>
            </div>

            {/* IGCSE Service Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IGCSE Curriculum Tutoring</h3>
                <p className="text-gray-600 mb-6">
                  Specialized tutoring for Cambridge IGCSE students, ensuring thorough preparation for exams.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Featured Subjects:</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/igcse/subjects/math" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IGCSE Mathematics (Core & Extended)</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/igcse/subjects/physics" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IGCSE Physics</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/igcse/subjects/chemistry" className="flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>IGCSE Chemistry</span>
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/igcse"
                  className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  View All IGCSE Subjects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaUsers className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">One-on-One Tutoring</h3>
              <p className="text-gray-600">
                Personalized attention and customized learning plans for individual students.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaBook className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Group Sessions</h3>
              <p className="text-gray-600">
                Collaborative learning environments for small groups of students.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaClock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Available 7 days a week, including evenings and weekends.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your tutoring needs and find the perfect match.
          </p>
          <Link
            href="/request-tutor"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
} 
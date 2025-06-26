"use client";

import React from 'react';
import Link from 'next/link';
import { FaBook, FaUsers, FaClock, FaArrowRight, FaChartLine, FaGraduationCap, FaLightbulb, FaChartBar } from 'react-icons/fa';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/ib-tuition-group.jpg"
            alt="Students learning"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive tutoring solutions tailored to your academic needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* IGCSE Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-64">
              <Image
                src="/images/students/math-tuition.jpg"
                alt="IGCSE Students"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">IGCSE Program</h2>
                <p className="text-white/90">Comprehensive preparation for IGCSE examinations</p>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBook className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Subjects</h3>
                    <p className="text-gray-600">Mathematics, Physics, Chemistry, Biology, English, and Economics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Exam Preparation</h3>
                    <p className="text-gray-600">Structured revision programs and practice tests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaUsers className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Support</h3>
                    <p className="text-gray-600">One-on-one attention and customized learning plans</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Featured Subjects:</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/igcse/subjects/math" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE Mathematics (Core & Extended)</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/igcse/subjects/physics" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE Physics</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/igcse/subjects/chemistry" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE Chemistry</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/igcse/subjects/biology" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE Biology</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/igcse/subjects/english" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE English</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/igcse/subjects/economics" className="flex items-center text-navy hover:text-navy-600">
                      <span>IGCSE Economics</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services/igcse"
                    className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-600 transition-colors duration-200"
                  >
                    View All IGCSE Subjects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* IB Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-64">
              <Image
                src="/images/students/physics-tuition.jpg"
                alt="IB Students"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">IB Program</h2>
                <p className="text-white/90">Expert guidance for International Baccalaureate success</p>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Level Support</h3>
                    <p className="text-gray-600">In-depth coverage of HL subjects and requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Essay</h3>
                    <p className="text-gray-600">Guidance for research and writing process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaChartBar className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Internal Assessment</h3>
                    <p className="text-gray-600">Support for lab reports and project work</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Featured Subjects:</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/ib/subjects/math" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB Mathematics (AA & AI)</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ib/subjects/physics" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB Physics</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ib/subjects/chemistry" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB Chemistry</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ib/subjects/biology" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB Biology</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ib/subjects/english" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB English</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ib/subjects/economics" className="flex items-center text-navy hover:text-navy-600">
                      <span>IB Economics</span>
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services/ib"
                    className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-600 transition-colors duration-200"
                  >
                    View All IB Subjects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core programs, we offer specialized support to ensure your academic success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaClock className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Choose from various time slots to fit your schedule, including weekends and holidays
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Group Sessions</h3>
              <p className="text-gray-600">
                Collaborative learning opportunities with small group classes for peer support
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaChartLine className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Regular assessments and detailed progress reports to monitor improvement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Delivery Format Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Lesson Delivery Formats</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that best suits your needs and schedule
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">One-on-One Tutoring</h3>
              <p className="text-gray-600">
                Personalized attention with dedicated tutor support, perfect for focused learning and individual needs
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Group Classes</h3>
              <p className="text-gray-600">
                Interactive group sessions with 2-4 students, fostering collaborative learning and peer support
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaClock className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Available 7 days a week with morning, afternoon, and evening slots to accommodate your schedule
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Your Studies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join EliteMind Tutor today and experience the difference in your academic performance.
          </p>
          <Link
            href="/request-tutor"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Request a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
} 
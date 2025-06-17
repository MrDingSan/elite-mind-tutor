import React from 'react';
import { FaGraduationCap, FaAward, FaBook, FaChalkboardTeacher, FaUniversity, FaAtom, FaFlask, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

export default function Tutors() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom2.jpg"
            alt="Our Expert Tutors"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Expert Tutors
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Meet our team of highly qualified educators with proven track records of student success
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
              <FaUsers className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-lg font-medium text-gray-900">Successful Students</p>
            <p className="text-sm text-gray-600">Coached for IB & IGCSE</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
              <FaStar className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">95%</h3>
            <p className="text-lg font-medium text-gray-900">Success Rate</p>
            <p className="text-sm text-gray-600">Students achieve target grades</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
              <FaChartLine className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-lg font-medium text-gray-900">Expert Tutors</p>
            <p className="text-sm text-gray-600">From top universities</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Qualifications Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Why Choose Our Tutors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaGraduationCap className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Top Academic Credentials</h3>
              <p className="text-gray-600">
                All tutors hold advanced degrees from prestigious universities and have achieved outstanding results in their respective fields
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaAward className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Success</h3>
              <p className="text-gray-600">
                Our tutors have consistently helped students achieve significant grade improvements and reach their academic goals
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Teaching Excellence</h3>
              <p className="text-gray-600">
                Years of experience in teaching IB and IGCSE curricula, with many serving as former examiners
              </p>
            </div>
          </div>
        </div>

        {/* Tutor Profiles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Meet Our Tutors</h2>
          
          {/* Math Tutor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-xl p-6 text-center shadow-inner">
                  <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="h-12 w-12 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold">Dr. Kevin Ling</h3>
                  <p className="text-navy font-medium">Mathematics Specialist</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IB</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IGCSE</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">A-Level</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaUniversity className="h-4 w-4 text-navy" />
                    </div>
                    <span>Ph.D. from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>13+ years of tutoring experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaChalkboardTeacher className="h-4 w-4 text-navy" />
                    </div>
                    <span>Students placed in top universities including NUS, LSE, and Imperial College</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>Excellent teaching record with proven student success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Physics Tutor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-xl p-6 text-center shadow-inner">
                  <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaAtom className="h-12 w-12 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold">Dr. Wei Ming Tan</h3>
                  <p className="text-navy font-medium">Physics Specialist</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IB</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IGCSE</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">A-Level</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaUniversity className="h-4 w-4 text-navy" />
                    </div>
                    <span>Ph.D. in Physics from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>IB Physics Examiner (2019-present)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaChalkboardTeacher className="h-4 w-4 text-navy" />
                    </div>
                    <span>10+ years of experience in IB and IGCSE Physics education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>95% of students achieve their target grades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chemistry Tutor */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-xl p-6 text-center shadow-inner">
                  <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFlask className="h-12 w-12 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold">Dr. Mei Lin Wong</h3>
                  <p className="text-navy font-medium">Chemistry Specialist</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IB</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">IGCSE</span>
                    <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">A-Level</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaUniversity className="h-4 w-4 text-navy" />
                    </div>
                    <span>Ph.D. in Chemistry from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>Former IB Chemistry Examiner (2017-2021)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaChalkboardTeacher className="h-4 w-4 text-navy" />
                    </div>
                    <span>12+ years of experience teaching IB and IGCSE Chemistry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-4 w-4 text-navy" />
                    </div>
                    <span>Specializes in organic chemistry and laboratory techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to Work with Our Expert Tutors?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Join our community of successful students and get the support you need to achieve your academic goals.
          </p>
          <a
            href="/request-tutor"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
          >
            Request a Tutor
          </a>
        </div>
      </div>
    </div>
  );
} 
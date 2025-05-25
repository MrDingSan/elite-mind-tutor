import React from 'react';
import { FaGraduationCap, FaAward, FaBook, FaChalkboardTeacher, FaUniversity, FaAtom, FaFlask } from 'react-icons/fa';

export default function Tutors() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Expert Tutors
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Meet our team of highly qualified educators with proven track records of student success
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Qualifications Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Why Choose Our Tutors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaGraduationCap className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Top Academic Credentials</h3>
              <p className="text-gray-600">
                All tutors hold advanced degrees from prestigious universities and have achieved outstanding results in their respective fields
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaAward className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Proven Success</h3>
              <p className="text-gray-600">
                Our tutors have consistently helped students achieve significant grade improvements and reach their academic goals
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaChalkboardTeacher className="h-8 w-8 text-indigo-600 mb-4" />
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
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <FaBook className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Dr. Kevin Ling</h3>
                  <p className="text-indigo-600">Mathematics Specialist</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaUniversity className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Ph.D. from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>13+ years of tutoring experience</span>
                  </li>
                  <li className="flex items-start">
                    <FaChalkboardTeacher className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Students placed in top universities including NUS, LSE, and Imperial College</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Excellent teaching record with proven student success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Physics Tutor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <FaAtom className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Dr. Wei Ming Tan</h3>
                  <p className="text-indigo-600">Physics Specialist</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaUniversity className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Ph.D. in Physics from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>IB Physics Examiner (2019-present)</span>
                  </li>
                  <li className="flex items-start">
                    <FaChalkboardTeacher className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>10+ years of experience in IB and IGCSE Physics education</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>95% of students achieve their target grades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chemistry Tutor */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <FaFlask className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Dr. Mei Lin Wong</h3>
                  <p className="text-indigo-600">Chemistry Specialist</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Qualifications & Experience</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaUniversity className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Ph.D. in Chemistry from National University of Singapore</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Former IB Chemistry Examiner (2017-2021)</span>
                  </li>
                  <li className="flex items-start">
                    <FaChalkboardTeacher className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>12+ years of experience teaching IB and IGCSE Chemistry</span>
                  </li>
                  <li className="flex items-start">
                    <FaAward className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Specializes in organic chemistry and laboratory techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to Work with Our Expert Tutors?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of successful students and get the support you need to achieve your academic goals.
          </p>
          <a
            href="/request-tutor"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a Tutor
          </a>
        </div>
      </div>
    </div>
  );
} 
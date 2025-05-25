import React from 'react';
import { FaAtom, FaChartLine, FaBook, FaUsers, FaFlask } from 'react-icons/fa';

export default function IGCSEPhysics() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IGCSE Physics Tutoring
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Expert guidance for Cambridge IGCSE Physics
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Course Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Course Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Core Curriculum</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Fundamental principles of physics and their applications</span>
                </li>
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Practical laboratory work and experimental skills</span>
                </li>
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Preparation for both theory and practical examinations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Extended Curriculum</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>In-depth coverage of advanced physics concepts</span>
                </li>
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Enhanced problem-solving and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <FaAtom className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Preparation for advanced physics in IB or A-Levels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Core Topics</h3>
              <ul className="space-y-2">
                <li>Forces and Motion</li>
                <li>Electricity</li>
                <li>Waves</li>
                <li>Energy Resources and Energy Transfer</li>
                <li>Solids, Liquids and Gases</li>
                <li>Magnetism and Electromagnetism</li>
                <li>Radioactivity and Particles</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Extended Topics</h3>
              <ul className="space-y-2">
                <li>Advanced Mechanics</li>
                <li>Thermal Physics</li>
                <li>Properties of Waves</li>
                <li>Electricity and Magnetism</li>
                <li>Atomic Physics</li>
                <li>Nuclear Physics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaBook className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Conceptual Understanding</h3>
              <p className="text-gray-600">
                Building strong foundations through clear explanations and practical examples
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaFlask className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Practical Skills</h3>
              <p className="text-gray-600">
                Hands-on experiments and laboratory work
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaUsers className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Personalized Support</h3>
              <p className="text-gray-600">
                Tailored guidance based on individual learning styles and goals
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaChartLine className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grade Improvement</h3>
              <p className="text-gray-600">
                Average improvement of 2-3 grades in final results
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaUsers className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Success</h3>
              <p className="text-gray-600">
                95% of students achieve their target grades
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaBook className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exam Readiness</h3>
              <p className="text-gray-600">
                Comprehensive preparation for both theory and practical papers
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to Excel in IGCSE Physics?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of successful IGCSE Physics students and get the support you need to achieve your goals.
          </p>
          <a
            href="/request-tutor"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a Physics Tutor
          </a>
        </div>
      </div>
    </div>
  );
} 